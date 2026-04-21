import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, company, email, types, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '必須項目が入力されていません。' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Change to your verified domain in production
      to: [process.env.CONTACT_TO_EMAIL || 'your_email@example.com'],
      subject: `[お問い合わせ] ${types.join(', ')}`,
      html: `
        <h2>新しいお問い合わせが届きました</h2>
        <p><strong>名前:</strong> ${name}</p>
        <p><strong>所属:</strong> ${company || '未記入'}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>種別:</strong> ${types.join(', ')}</p>
        <p><strong>メッセージ:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました。' },
      { status: 500 }
    );
  }
}
