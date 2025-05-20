export interface Tour {
  id: string;
  name: string;
  description: string;
  price: number; //amount paid
  imageUrl: string;

}

// enums/PaymentMethod.ts
export enum PaymentMethod {
  STRIPE = "stripe",
  CASH = "cash",
  MPESA = "mpesa",
  BANK = "bank",
}
// enums/PaymentStatus.ts
export enum PaymentStatus {
  UNPAID = "unpaid",
  PARTIALLY_PAID = "partially_paid",
  PAID = "paid",
}
// enums/TourStatus.ts
export enum TourStatus {
  PENDING = "pending", // booked but not confirmed
  CONFIRMED = "confirmed", // payment made or approved
  CANCELLED = "cancelled", // cancelled by user or admin
  COMPLETED = "completed", // tour completed
}

export enum PaymentOption {
  PARTIAL = "partial",
  FULL = "full",
}
