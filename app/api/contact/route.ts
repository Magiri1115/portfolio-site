import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('Contact form request body:', body);
    const { name, company, email, types = [], message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '必須項目が入力されていません。' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is missing');
      return NextResponse.json({ error: 'API設定エラー' }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    console.log('Sending email via Resend...', {
      from: 'onboarding@resend.dev',
      to: process.env.CONTACT_TO_EMAIL || 'your_email@example.com',
    });

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [process.env.CONTACT_TO_EMAIL || 'your_email@example.com'],
      subject: `[お問い合わせ] ${name}様より`,
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
      console.error('Resend API Error:', error);
      return NextResponse.json(
        { 
          error: 'メール送信に失敗しました。', 
          details: error.message,
          hint: 'Resendの無料枠（onboarding@resend.dev）を使用している場合、送信先は登録済みのメールアドレスである必要があります。'
        }, 
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error('Contact API error details:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'サーバーエラーが発生しました。' },
      { status: 500 }
    );
  }
}
