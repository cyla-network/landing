import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
    }

    // Store email (replace with your preferred storage method)
    console.log('New waitlist signup:', email);
    
    // You can integrate with:
    // - Database (Supabase, MongoDB, etc.)
    // - Email service (Mailchimp, ConvertKit, etc.)
    // - Google Sheets API
    // - Airtable API

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}