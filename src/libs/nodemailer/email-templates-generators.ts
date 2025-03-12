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
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>New Contact Form Submission</title>
            <style>
              body {
                margin: 0;
                padding: 0;
                font-family: 'Arial', sans-serif;
              }
            </style>
          </head>
          <body style="background-color: #f4f4f4; color: #333;">
            <div style="max-width: 600px; margin: 20px auto; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
              <div style="text-align: center;">
                <img src="https://firstdripadventures.com/logo.png" alt="FirstDrip Adventures Logo" style="width: 150px; height: auto;" />
                <h1 style="color: #333;">New Contact Form Submission</h1>
              </div>
              <div>
                <p>Hello Admin,</p>
                <p>A new contact form has been submitted. Here are the details:</p>
                <ul>
                  <li><strong>Guest Details:</strong> ${guestDetails}</li>
                  <li><strong>Received Date:</strong> ${contactDate}</li>
                </ul>
                <p>Click <a href="${url}" style="color: #007bff;">here</a> to view the submission.</p>
              </div>
              <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #777;">
                <p>FirstDrip Adventures</p>
                <p>Nairobi, Kenya</p>
                <p><a href="mailto:support@firstdripadventures.com" style="color: #007bff; text-decoration: none;">Contact Support</a></p>
              </div>
            </div>
          </body>
        </html>
      `;
};

export const generateUserConfirmationTemplate = (userName: string): string => {
  return `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>Thank You for Contacting Us</title>
            <style>
              body {
                margin: 0;
                padding: 0;
                font-family: 'Arial', sans-serif;
              }
            </style>
          </head>
          <body style="background-color: #f4f4f4; color: #333;">
            <div style="max-width: 600px; margin: 20px auto; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
              <div style="text-align: center;">
                <img src="https://firstdripadventures.com/logo.png" alt="FirstDrip Adventures Logo" style="width: 150px; height: auto;" />
                <h1 style="color: #333;">Hello, ${userName}!</h1>
              </div>
              <div>
                <p>Thank you for reaching out to FirstDrip Adventures.</p>
                <p>We have received your message and will get back to you as soon as possible.</p>
                <p>If this wasn't you, please ignore this email.</p>
              </div>
              <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #777;">
                <p>FirstDrip Adventures</p>
                <p>Nairobi, Kenya</p>
                <p><a href="mailto:support@firstdripadventures.com" style="color: #007bff; text-decoration: none;">Contact Support</a></p>
              </div>
            </div>
          </body>
        </html>
      `;
};

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
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>New Booking Received</title>
            <style>
              body {
                margin: 0;
                padding: 0;
                font-family: 'Arial', sans-serif;
              }
            </style>
          </head>
          <body class="bg-gray-100 text-gray-700">
            <div class="max-w-xl mx-auto bg-white p-6 mt-6 rounded-lg shadow-lg">
              <div class="text-center">
                <h1 class="text-xl font-bold text-gray-800">New Booking Received</h1>
              </div>
              <div class="mt-4">
                <p>Dear Admin,</p>
                <p>A new booking has been submitted. Details are as follows:</p>
                <ul>
                  <li><strong>Guest Details:</strong> ${guestDetails}</li>
                  <li><strong>Booking Date:</strong> ${bookingDate}</li>
                  <li><strong>Tour Package:</strong> ${tourPackage}</li>
                </ul>
                <p>
                  Please take necessary action. Click <a href="${url}">here to view details</a>.
                </p>
              </div>
              <div class="text-center mt-8 text-sm text-gray-500">
                <p>FirstDrip Adventures</p>
                <p>Diani, Ukunda</p>
              </div>
            </div>
          </body>
        </html>
      `;
};

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
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>Booking Confirmation</title>
            <style>
              body {
                margin: 0;
                padding: 0;
                font-family: 'Arial', sans-serif;
              }
            </style>
          </head>
          <body class="bg-gray-100 text-gray-700">
            <div class="max-w-xl mx-auto bg-white p-6 mt-6 rounded-lg shadow-lg">
              <div class="text-center">
                <h1 class="text-xl font-bold text-gray-800">Booking Confirmed</h1>
              </div>
              <div class="mt-4">
                <p>Dear ${userName},</p>
                <p>Thank you for booking with FirstDrip Adventures! Here are your details:</p>
                <ul>
                  <li><strong>Booking Date:</strong> ${bookingDate}</li>
                  <li><strong>Tour Package:</strong> ${tourPackage}</li>
                </ul>
                <p>We look forward to taking you on an unforgettable adventure!</p>
              </div>
              <div class="text-center mt-8 text-sm text-gray-500">
                <p>FirstDrip Adventures</p>
                <p>Diani, Ukunda</p>
              </div>
            </div>
          </body>
        </html>
      `;
};

export const generateAdminBookingNotificationTemplate3 = (
  guestDetails: string,
  bookingDate: string,
  travelers: Record<string, any>[],
  url: string
): string => {
  if (travelers.length === 0) return "";

  const tableHeaders = Object.keys(travelers[0])
    .map((key) => `<th class="border px-4 py-2">${key}</th>`)
    .join("");

  const travelersTable = travelers
    .map(
      (traveler, index) => `
      <tr>
        <td class="border px-4 py-2">${index + 1}</td>
        ${Object.values(traveler)
          .map((value) => `<td class="border px-4 py-2">${value}</td>`)
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
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>New Booking Received</title>
            <style>
              body {
                margin: 0;
                padding: 0;
                font-family: 'Arial', sans-serif;
              }
              table { width: 100%; border-collapse: collapse; }
              th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
              th { background-color: #f2f2f2; }
            </style>
          </head>
          <body>
            <div>
              <h1>New Booking Received</h1>
              <p>Dear Admin,</p>
              <p>A new booking has been submitted. Details are as follows:</p>
              <ul>
                <li><strong>Guest Details:</strong> ${guestDetails}</li>
                <li><strong>Booking Date:</strong> ${bookingDate}</li>
               
              </ul>
              <p><strong>Travelers List:</strong></p>
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    ${tableHeaders}
                  </tr>
                </thead>
                <tbody>
                  ${travelersTable}
                </tbody>
              </table>
              <p>
                Please take necessary action. Click <a href="${url}">here to view details</a>.
              </p>
            </div>
          </body>
        </html>
      `;
};

export const generateAdminBookingNotificationTemplate = (
  guestDetails: string,
  bookingDate: string,
  bookingData: Record<string, any>,
  url: string
): string => {
  // Convert bookingData to an array of travelers
  const travelersArray = Object.values(bookingData);
  if (travelersArray.length === 0) return "";

  const tableHeaders = Object.keys(travelersArray[0])
    .map((key) => `<th class="border px-4 py-2">${key}</th>`)
    .join("");

  const travelersTable = travelersArray
    .map(
      (traveler, index) => `
      <tr>
        <td class="border px-4 py-2">${index + 1}</td>
        ${Object.values(traveler)
          .map((value) => `<td class="border px-4 py-2">${value}</td>`)
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
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>New Booking Received</title>
        <style>
          body { margin: 0; padding: 0; font-family: 'Arial', sans-serif; }
          table { width: 100%; border-collapse: collapse; }
          th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
          th { background-color: #f2f2f2; }
        </style>
      </head>
      <body>
        <div>
          <h1>New Booking Received</h1>
          <p>Dear Admin,</p>
          <p>A new booking has been submitted. Details are as follows:</p>
          <ul>
            <li><strong>Guest Details:</strong> ${guestDetails}</li>
            <li><strong>Booking Date:</strong> ${bookingDate}</li>
          </ul>
          <p><strong>Travelers List:</strong></p>
          <table>
            <thead>
              <tr>
                <th>#</th>
                ${tableHeaders}
              </tr>
            </thead>
            <tbody>
              ${travelersTable}
            </tbody>
          </table>
          <p>
            Please take necessary action. Click <a href="${url}">here to view details</a>.
          </p>
        </div>
      </body>
    </html>
  `;
};

export const generateUserBookingConfirmationTemplate2 = (
  userName: string,
  bookingDate: string,
  // tourPackage: string,
  travelers: Record<string, any>[]
): string => {
  if (travelers.length === 0) return "";

  const tableHeaders = Object.keys(travelers[0])
    .map((key) => `<th class="border px-4 py-2">${key}</th>`)
    .join("");

  const travelersTable = travelers
    .map(
      (traveler, index) => `
      <tr>
        <td class="border px-4 py-2">${index + 1}</td>
        ${Object.values(traveler)
          .map((value) => `<td class="border px-4 py-2">${value}</td>`)
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
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>Booking Confirmation</title>
            <style>
              body {
                margin: 0;
                padding: 0;
                font-family: 'Arial', sans-serif;
              }
              table { width: 100%; border-collapse: collapse; }
              th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
              th { background-color: #f2f2f2; }
            </style>
          </head>
          <body>
            <div>
              <h1>Booking Confirmation</h1>
              <p>Dear ${userName},</p>
              <p>Thank you for booking with FirstDrip Adventures. Here are your booking details:</p>
              <ul>
                <li><strong>Booking Date:</strong> ${bookingDate}</li>
                
              </ul>
              <p><strong>Travelers List:</strong></p>
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    ${tableHeaders}
                  </tr>
                </thead>
                <tbody>
                  ${travelersTable}
                </tbody>
              </table>
              <p>
                We look forward to taking you on an unforgettable adventure!
              </p>
            </div>
          </body>
        </html>
      `;
};

export const generateUserBookingConfirmationTemplate = (
  userName: string,
  bookingDate: string,
  bookingData: Record<string, any>
): string => {
  const travelersArray = Object.values(bookingData);
  if (travelersArray.length === 0) return "";

  const tableHeaders = Object.keys(travelersArray[0])
    .map((key) => `<th class="border px-4 py-2">${key}</th>`)
    .join("");

  const travelersTable = travelersArray
    .map(
      (traveler, index) => `
      <tr>
        <td class="border px-4 py-2">${index + 1}</td>
        ${Object.values(traveler)
          .map((value) => `<td class="border px-4 py-2">${value}</td>`)
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
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>Booking Confirmation</title>
            <style>
              body {
                margin: 0;
                padding: 0;
                font-family: 'Arial', sans-serif;
              }
              table { width: 100%; border-collapse: collapse; }
              th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
              th { background-color: #f2f2f2; }
            </style>
          </head>
          <body>
            <div>
              <h1>Booking Confirmation</h1>
              <p>Dear ${userName},</p>
              <p>Thank you for booking with FirstDrip Adventures. Here are your booking details:</p>
              <ul>
                <li><strong>Booking Date:</strong> ${bookingDate}</li>
              </ul>
              <p><strong>Travelers List:</strong></p>
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    ${tableHeaders}
                  </tr>
                </thead>
                <tbody>
                  ${travelersTable}
                </tbody>
              </table>
              <p>
                We look forward to taking you on an unforgettable adventure!
              </p>
            </div>
          </body>
        </html>
      `;
};
