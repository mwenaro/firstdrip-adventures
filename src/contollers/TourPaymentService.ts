import { dbCon } from "@/libs/mongoose/dbCon";
import { Payment } from "@/models/Payment";
import { TourBooking } from "@/models/TourBooking";
import {
  PaymentMethod,
  PaymentOption,
  PaymentStatus,
  TourStatus,
} from "@/types/tour";
import mongoose from "mongoose";

/**
 * Service class to handle all payment-related operations
 * for tour bookings including adding, listing, refunding,
 * and removing payments as well as calculating balances.
 */
export class TourPaymentService {
  constructor() {
    dbCon(); // Ensure DB connection is established
  }

  /**
   * Adds a new payment entry for a tour booking
   */
  async addPayment({
    bookingId,
    paidAmount,
    method,
    stripePaymentId,
    // partialOption,
    // customAmount,
    note,
  }: {
    bookingId: string;
    paidAmount: number;
    method: PaymentMethod;
    stripePaymentId?: string;
    // partialOption?: number;
    // customAmount?: number;
    note?: string;
  }) {
    const booking = await TourBooking.findById(bookingId);
    if (!booking) throw new Error("Booking not found");
    const payment = await Payment.create({
      bookingId: new mongoose.Types.ObjectId(bookingId),
      paidAmount,
      method,
      stripePaymentId,
      paymentOption:
        paidAmount < booking.totalAmount
          ? PaymentOption.PARTIAL
          : PaymentOption.FULL,
      note,
    });

    await this.updatePaymentStatus(bookingId);
    return payment;
  }

  /**
   * Calculates the total amount paid so far for a booking
   */
  async getTotalPaid(bookingId: string): Promise<number> {
    const payments = await Payment.find({ bookingId });
    return payments.reduce((sum, p) => sum + p.paidAmount, 0);
  }

  /**
   * Calculates the outstanding balance for a tour booking
   */
  async getBalance(bookingId: string): Promise<number> {
    const booking = await TourBooking.findById(bookingId);
    if (!booking) throw new Error("Booking not found");

    const totalPaid = await this.getTotalPaid(bookingId);
    return booking.totalAmount - totalPaid;
  }

  /**
   * Updates the payment and tour status based on the current total paid
   */
  async updatePaymentStatus(bookingId: string): Promise<void> {
    const booking = await TourBooking.findById(bookingId);
    if (!booking) throw new Error("Booking not found");

    const totalPaid = await this.getTotalPaid(bookingId);
    let status: PaymentStatus;

    if (totalPaid === 0) {
      status = PaymentStatus.UNPAID;
    } else if (totalPaid < booking.totalAmount) {
      status = PaymentStatus.PARTIALLY_PAID;
    } else {
      status = PaymentStatus.PAID;
    }

    booking.paymentStatus = status;

    if (status === PaymentStatus.PAID) {
      booking.tourStatus = TourStatus.CONFIRMED;
    }

    await booking.save();
  }

  /**
   * Returns all payments made for a tour booking
   */
  async getPaymentsForBooking(bookingId: string) {
    return Payment.find({ bookingId }).sort({ paymentDate: 1 });
  }

  /**
   * Processes a refund by creating a negative payment
   */
  async refundPayment({
    bookingId,
    refundAmount,
    method,
    note,
  }: {
    bookingId: string;
    refundAmount: number;
    method: PaymentMethod;
    note?: string;
  }) {
    const booking = await TourBooking.findById(bookingId);
    if (!booking) throw new Error("Booking not found");

    // Negative value for refund
    const refund = await Payment.create({
      bookingId: new mongoose.Types.ObjectId(bookingId),
      paidAmount: -Math.abs(refundAmount),
      method,
      note: note || "Refund issued",
    });

    await this.updatePaymentStatus(bookingId);
    return refund;
  }

  /**
   * Deletes a specific payment entry and updates the booking status
   */
  async deletePayment(paymentId: string) {
    const payment = await Payment.findById(paymentId);
    if (!payment) throw new Error("Payment not found");

    const bookingId = payment.bookingId.toString();
    await payment.deleteOne();

    await this.updatePaymentStatus(bookingId);
    return { success: true };
  }
}
