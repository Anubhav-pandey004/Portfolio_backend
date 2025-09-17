const nodemailer = require('nodemailer');

module.exports = async function sendEmail(emailData, res) {
    try {
        // If body is wrapped, unwrap it
        emailData = emailData.body ? emailData.body : emailData;

        // Validate required fields
        if (!emailData.email || !emailData.subject || !emailData.message) {
            console.error('Missing required fields: email, subject, or message');
            return res.status(400).json({
                message: 'Missing required fields',
                error: true,
                success: false
            });
        }

        // ✅ Use SendGrid SMTP instead of Gmail
        const transporter = nodemailer.createTransport({
            host: "smtp.sendgrid.net",
            port: 587,
            secure: false, // 465 = true, 587 = false
            auth: {
                user: "apikey", // this must be literally "apikey"
                pass: process.env.SENDGRID_API_KEY, // your API key
            },
        });

        const mailOptions = {
            from: "anubhavpandeyayush@gmail.com", // 👈 use a verified sender from SendGrid
            to: emailData.email,         // recipient email (parent)
            subject: emailData.subject,
            text: `From ${emailData.email} \n ${emailData.message}`
        };

        // Send the email
        await transporter.sendMail(mailOptions);
        console.log('✅ Email sent successfully!');

        // Respond success
        return res.json({
            message: "Email sent successfully!",
            error: false,
            success: true
        });

    } catch (error) {
        console.error('❌ Error sending email:', error);

        return res.status(500).json({
            message: error.message,
            error: true,
            success: false
        });
    }
};
