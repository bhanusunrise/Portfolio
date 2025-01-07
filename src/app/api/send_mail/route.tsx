import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    try {
        const { name, email, message } = await req.json();

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'bhanusunrisesolutions@gmail.com',
                pass: process.env.GOOGLE_APP_PASSWORD,
            },
        });

        const mailOptions = {
            from: '"Pasindu Bhanuka" <bhanusunrisesolutions@gmail.com>',
            to: 'pasindubhanukagood@gmail.com',
            subject: `New message from ${name}`,
            text: message,
            html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);

        return NextResponse.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: 'Failed to send email' + error }, { status: 500 });
    }
}
