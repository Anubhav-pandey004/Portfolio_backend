// sendEmail.js
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = async function sendEmail(emailData, res) {
  try {
    emailData = emailData.body ? emailData.body : emailData;

    if (!emailData.email || !emailData.subject || !emailData.message) {
      return res.status(400).json({
        message: "Missing required fields",
        error: true,
        success: false,
      });
    }

    const msg = {
      to: emailData.email,
      from: "anubhavpandeyayush@gmail.com", // ✅ must be verified in SendGrid
      subject: emailData.subject,
      text: `From ${emailData.email} \n ${emailData.message}`,
    };

    await sgMail.send(msg);

    return res.json({
      message: "Email sent successfully!",
      error: false,
      success: true,
    });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return res.status(500).json({
      message: error.message,
      error: true,
      success: false,
    });
  }
};
