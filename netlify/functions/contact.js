const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  try {
    const body = JSON.parse(event.body);
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: "Faltan campos requeridos: name, email, message",
        }),
      };
    }

    // Validate env vars exist
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing EMAIL_USER or EMAIL_PASS environment variables");
      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          message: "Server configuration error.",
        }),
      };
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.gmail.com",
      port: parseInt(process.env.EMAIL_PORT || "465", 10),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "gregory.gonzalez.martinez2@gmail.com",
      subject: `Nuevo mensaje de contacto de: ${name}`,
      text: `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send Telegram notification (non-blocking, don't fail if Telegram fails)
    if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
      try {
        const telegramText = `*Nuevo Contacto*\n\n*Nombre:* ${name}\n*Correo:* ${email}\n*Mensaje:*\n${message}`;
        const telegramUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

        await fetch(telegramUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: process.env.TELEGRAM_CHAT_ID,
            text: telegramText,
            parse_mode: "Markdown",
          }),
        });
      } catch (telegramError) {
        console.warn("Telegram notification failed:", telegramError.message);
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Mensaje procesado correctamente.",
      }),
    };
  } catch (error) {
    console.error("Error in contact function:", error.message, error.stack);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: "Error interno del servidor.",
        debug: process.env.NODE_ENV !== "production" ? error.message : undefined,
      }),
    };
  }
};
