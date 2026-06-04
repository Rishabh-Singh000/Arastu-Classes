import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, message } = body;

    // Basic server-side validation
    if (!name || !phone || !message) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Here you would typically save to a database or send an email
    // For now, we just return success
    console.log('Contact form submission:', { name, phone, message });

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
    });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
