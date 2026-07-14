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
        body: JSON.stringify({ message: "Faltan campos requeridos: name, email, message" }),
      };
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.gmail.com",
      port: process.env.EMAIL_PORT || 465,
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

    const emailPromise = transporter.sendMail(mailOptions);

    const telegramText = `*Nuevo Contacto*\n\n*Nombre:* ${name}\n*Correo:* ${email}\n*Mensaje:*\n${message}`;
    const telegramUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    const telegramPromise = fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: telegramText,
        parse_mode: "Markdown",
      }),
    });

    await Promise.all([emailPromise, telegramPromise]);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Mensaje procesado correctamente." }),
    };
  } catch (error) {
    console.error("Error al procesar la solicitud de contacto:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: "Error interno del servidor." }),
    };
  }
};
