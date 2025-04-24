type EmailTemplate = {
    subject: string;
    html: (data: any) => string;
  };
  
  // Footer helper
  const footer = `
    <p style="margin-top: 30px;">
      Best regards,<br />
      <strong>All in Africa Safaris</strong><br />
      📧 info@allinafricasafaris.com<br />
      📞 +254 712 345 678
    </p>
  `;
  
  const emailTemplates: Record<string, EmailTemplate> = {
    WELCOME: {
      subject: "Welcome to All in Africa Safaris!",
      html: (data) => `
        <h1>Karibu, ${data.name}!</h1>
        <p>Thank you for signing up. We’re thrilled to have you onboard.</p>
        <p>Explore the best safari experiences with us!</p>
        ${footer}
      `,
    },
  
    TOUR_BOOKING_CONFIRMATION: {
      subject: "🦁 Your Tour Booking is Confirmed!",
      html: (data) => `
        <h1>Hello, ${data.name}</h1>
        <p>We're excited to confirm your tour booking: <strong>${data.tourName}</strong></p>
        <p><strong>Date:</strong> ${data.date}</p>
        <p>We look forward to giving you an unforgettable safari experience.</p>
        ${footer}
      `,
    },
  
    TOUR_PAYMENT: {
      subject: "🧾 Complete Your Payment for ${data.tourName}",
      html: (data) => `
        <h1>Hello, ${data.name}</h1>
        <p>We’ve received your booking for <strong>${data.tourName}</strong>.</p>
        <p>To confirm your spot, please complete the payment using the link below:</p>
        <a href="${data.paymentLink}" style="background: #1e40af; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px;">
          Pay Now
        </a>
        <p>If you have any questions, feel free to contact us.</p>
        ${footer}
      `,
    },
  
    TOUR_CANCELLATION: {
      subject: "❌ Tour Booking Cancelled",
      html: (data) => `
        <h1>Hi, ${data.name}</h1>
        <p>Your booking for <strong>${data.tourName}</strong> on ${data.date} has been cancelled.</p>
        <p>If this was a mistake or you'd like to rebook, please contact us.</p>
        ${footer}
      `,
    },
  
    INQUIRY_RESPONSE: {
      subject: "📩 We Received Your Inquiry",
      html: (data) => `
        <h1>Hello, ${data.name}</h1>
        <p>Thanks for reaching out to All in Africa Safaris!</p>
        <p>We’ve received your message and will respond within 24 hours.</p>
        ${footer}
      `,
    },
  
    FEEDBACK_THANKS: {
      subject: "🙏 Thank You for Your Feedback",
      html: (data) => `
        <h1>Dear ${data.name},</h1>
        <p>We appreciate your feedback on your recent tour with us.</p>
        <p>Your thoughts help us improve and continue to offer the best experiences in Africa.</p>
        ${footer}
      `,
    },
  };
  
  export default emailTemplates;
  