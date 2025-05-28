// Reusable footer helper
const emailFooter = (): string => {
  return `
    <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #777;">
      <p>FirstDrip Adventures</p>
      <p>Nairobi, Kenya</p>
      <p><a href="mailto:support@firstdripadventures.co.ke" style="color: #007bff; text-decoration: none;">Contact Support</a></p>
    </div>
  `;
};

// Contact form admin notification
export const generateAdminNotificationTemplate = (
  guestDetails: string,
  contactDate: string,
  url: string
): string => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Contact Form Submission</title>
        <style>
          body { margin: 0; padding: 0; font-family: 'Arial', sans-serif; }
        </style>
      </head>
      <body style="background-color: #f4f4f4; color: #333;">
        <div style="max-width: 600px; margin: 20px auto; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
          <div style="text-align: center;">
            <img src="https://firstdripadventures.co.ke/logo.png" alt="FirstDrip Adventures Logo" style="width: 150px;" />
            <h1>New Contact Form Submission</h1>
          </div>
          <div>
            <p>Hello Admin,</p>
            <p>A new contact form has been submitted:</p>
            <ul>
              <li><strong>Guest Details:</strong> ${guestDetails}</li>
              <li><strong>Received Date:</strong> ${contactDate}</li>
            </ul>
            <p>Click <a href="${url}" style="color: #007bff;">here</a> to view the submission.</p>
          </div>
          ${emailFooter()}
        </div>
      </body>
    </html>
  `;
};

// Contact form user confirmation
export const generateUserConfirmationTemplate = (userName: string): string => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Thank You for Contacting Us</title>
        <style>
          body { margin: 0; padding: 0; font-family: 'Arial', sans-serif; }
        </style>
      </head>
      <body style="background-color: #f4f4f4; color: #333;">
        <div style="max-width: 600px; margin: 20px auto; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
          <div style="text-align: center;">
            <img src="https://firstdripadventures.co.ke/logo.png" alt="Logo" style="width: 150px;" />
            <h1>Hello, ${userName}!</h1>
          </div>
          <div>
            <p>Thank you for reaching out. We'll get back to you as soon as possible.</p>
            <p>If this wasn't you, please ignore this email.</p>
          </div>
          ${emailFooter()}
        </div>
      </body>
    </html>
  `;
};

// Admin booking notification (simple)
export const generateAdminBookingNotificationTemplate1 = (
  guestDetails: string,
  bookingDate: string,
  tourPackage: string,
  url: string
): string => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Booking Received</title>
        <style>
          body { margin: 0; padding: 0; font-family: 'Arial', sans-serif; }
        </style>
      </head>
      <body>
        <div style="max-width: 600px; margin: 30px auto; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
          <h1 style="text-align:center;">New Booking Received</h1>
          <p>Hello Admin,</p>
          <p>A new booking has been submitted:</p>
          <ul>
            <li><strong>Guest Details:</strong> ${guestDetails}</li>
            <li><strong>Booking Date:</strong> ${bookingDate}</li>
            <li><strong>Tour Package:</strong> ${tourPackage}</li>
          </ul>
          <p>Click <a href="${url}" style="color: #007bff;">here</a> to view details.</p>
          ${emailFooter()}
        </div>
      </body>
    </html>
  `;
};

// User booking confirmation
export const generateUserBookingConfirmationTemplate1 = (
  userName: string,
  bookingDate: string,
  tourPackage: string
): string => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Booking Confirmation</title>
        <style>
          body { margin: 0; padding: 0; font-family: 'Arial', sans-serif; }
        </style>
      </head>
      <body>
        <div style="max-width: 600px; margin: 30px auto; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
          <h1 style="text-align:center;">Booking Confirmed</h1>
          <p>Hello ${userName},</p>
          <p>Thank you for booking with FirstDrip Adventures!</p>
          <ul>
            <li><strong>Booking Date:</strong> ${bookingDate}</li>
            <li><strong>Tour Package:</strong> ${tourPackage}</li>
          </ul>
          <p>We look forward to hosting you on your adventure!</p>
          ${emailFooter()}
        </div>
      </body>
    </html>
  `;
};

// Admin booking notification with travelers
export const generateAdminBookingNotificationTemplate = (
  guestDetails: string,
  bookingDate: string,
  travelers: Record<string, any>[],
  url: string
): string => {
  if (travelers.length === 0) return "";

  const headers = Object.keys(travelers[0])
    .map((key) => `<th>${key}</th>`)
    .join("");

  const rows = travelers
    .map(
      (traveler, index) => `
      <tr>
        <td>${index + 1}</td>
        ${Object.values(traveler)
          .map((v) => `<td>${v}</td>`)
          .join("")}
      </tr>`
    )
    .join("");

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Booking Received</title>
        <style>
          body { font-family: 'Arial', sans-serif; margin: 0; padding: 0; }
          table { width: 100%; border-collapse: collapse; }
          th, td { border: 1px solid #ddd; padding: 8px; }
          th { background: #f4f4f4; }
        </style>
      </head>
      <body>
        <div style="padding: 20px;">
          <h2>New Booking Received</h2>
          <p><strong>Guest:</strong> ${guestDetails}</p>
          <p><strong>Booking Date:</strong> ${bookingDate}</p>
          <p><strong>Traveler Details:</strong></p>
          <table>
            <thead><tr><th>#</th>${headers}</tr></thead>
            <tbody>${rows}</tbody>
          </table>
          <p>Click  <a href="${url}">here</a> to view the full booking and update amount charged!.</p>
          ${emailFooter()}
        </div>
      </body>
    </html>
  `;
};

// NEW: User Tour Payment Confirmation
export const generateUserTourPaymentConfirmation = (
  userName: string,
  amountPaid: string,
  paymentDate: string
  // packageName: string
): string => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Payment Confirmation</title>
        <style>
          body { margin: 0; padding: 0; font-family: 'Arial', sans-serif; }
        </style>
      </head>
      <body style="background-color: #f4f4f4; color: #333;">
        <div style="max-width: 600px; margin: 30px auto; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
          <div style="text-align: center;">
            <img src="https://firstdripadventures.co.ke/logo.png" alt="Logo" style="width: 150px;" />
            <h1>Payment Received</h1>
          </div>
          <div>
            <p>Hello ${userName},</p>
            <p>Thank you for your payment. Here are your payment details:</p>
            <ul>
              <li><strong>Amount Paid:</strong> ${amountPaid}</li>
              <li><strong>Payment Date:</strong> ${paymentDate}</li>
            </ul>
            <p>We look forward to seeing you soon on your adventure!</p>
          </div>
          ${emailFooter()}
        </div>
      </body>
    </html>
  `;
};

// NEW: User Tour Payment Request Email
export const generateUserTourPaymentRequest = (
  userName: string,
  amountDue: string,
  paymentLink: string,
  packageName?: string
): string => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Payment Request</title>
        <style>
          body { margin: 0; padding: 0; font-family: 'Arial', sans-serif; }
        </style>
      </head>
      <body style="background-color: #f4f4f4; color: #333;">
        <div style="max-width: 600px; margin: 30px auto; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
          <div style="text-align: center;">
            <img src="https://firstdripadventures.co.ke/logo.png" alt="Logo" style="width: 150px;" />
            <h1>Tour Payment Request</h1>
          </div>
          <div>
            <p>Hello ${userName},</p>
            <p>We’re excited for your upcoming adventure with us! To confirm your booking for the <strong>${packageName}</strong> package, we kindly request your payment of <strong>${amountDue}</strong>.</p>
            <p>Please click the button below to proceed to payment:</p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="${paymentLink}" style="display: inline-block; padding: 12px 24px; background-color: #1e40af; color: #fff; text-decoration: none; border-radius: 5px; font-weight: bold;">
                Pay Now
              </a>
            </div>
            <p style="text-align: center;">If the button above doesn't work, please copy and paste the following link into your browser:</p>
            <p style="word-break: break-all; text-align: center;"><a href="${paymentLink}" style="color: #1e40af;">${paymentLink}</a></p>
            <p>If you have any questions, feel free to reach out. We’re here to help!</p>
          </div>
          ${emailFooter()}
        </div>
      </body>
    </html>
  `;
};
