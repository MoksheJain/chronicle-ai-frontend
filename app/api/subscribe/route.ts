import { NextRequest, NextResponse } from 'next/server';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export async function POST(req: NextRequest) {
    try {
        const { email, language } = await req.json();

        if (!email || !language) {
            return NextResponse.json({ error: 'Data missing' }, { status: 400 });
        }

        // console.log("Hello")

        // 1. Google Sheets Auth
        const auth = new JWT({
            email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            key: (process.env.GOOGLE_PRIVATE_KEY as string).replace(/\\n/g, '\n'),
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        // console.log(auth)

        const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID!, auth);
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[0];

        // 2. Append Row (Google Sheets handles Hindi/Unicode natively)
        await sheet.addRow({
            email: email,
            language: language,
        });

        // console.log("LOL")

        // 3. Conditional Content for English/Hindi
        const isHindi = language.toLowerCase() === 'hindi' || language.toLowerCase() === 'hi';

        const mailOptions = {
            from: `"Chronicle AI 📰" <${process.env.SMTP_USER}>`,
            to: email,
            subject: isHindi
                ? '🎉 हमारे साथ जुड़ने के लिए धन्यवाद!'
                : '🎉 Welcome to Chronicle AI!',

            html: isHindi
                ? `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h1>नमस्ते 👋</h1>

            <p>
                Chronicle AI न्यूज़लेटर से जुड़ने के लिए आपका धन्यवाद 🙏
            </p>

            <p>
                अब आपको हर सुबह 🕘 आपके इनबॉक्स में
                <strong>AI, टेक्नोलॉजी और महत्वपूर्ण खबरों का संक्षिप्त सार</strong>
                मिलेगा।
            </p>

            <p>
                हमारा उद्देश्य है कि आपको कम समय में 📚
                सबसे महत्वपूर्ण और उपयोगी जानकारी मिले।
            </p>

            <p>
                हमारे साथ जुड़े रहने के लिए धन्यवाद 💙
                हम आपके साथ इस सफर को लेकर उत्साहित हैं 🚀
            </p>

            <hr />

            <p style="font-size: 14px; color: #777;">
                – Chronicle AI टीम ✨
            </p>
        </div>
        `
                : `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h1>Hello 👋</h1>

            <p>
                Thank you for subscribing to <strong>Chronicle AI</strong> 📰
            </p>

            <p>
                Starting soon, you’ll receive a concise morning roundup 🕘
                featuring <strong>AI updates, tech trends, and important global highlights</strong>
                directly in your inbox.
            </p>

            <p>
                Our goal is simple: deliver valuable insights in less time 📚
                so you stay informed without information overload.
            </p>

            <p>
                We're excited to have you on board 💙
                Let’s build smarter mornings together 🚀
            </p>

            <hr />

            <p style="font-size: 14px; color: #777;">
                – The Chronicle AI Team ✨
            </p>
        </div>
        `,
        };

        // console.log("Sending email")


        // 4. Send the Email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Success' }, { status: 200 });

    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
    }
}