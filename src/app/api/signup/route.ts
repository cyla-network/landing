import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const { email, userType } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
    }

    if (!userType || !['manufacturer', 'distributor', 'healthcare_provider'].includes(userType)) {
      return NextResponse.json({ error: 'Valid user type required' }, { status: 400 });
    }

    const signup = await prisma.waitlist.create({
      data: { email, userType }
    });

    return NextResponse.json({ success: true, id: signup.id });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json({ error: 'Email already registered' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Failed to register email' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const signups = await prisma.waitlist.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(signups);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch signups' }, { status: 500 });
  }
}