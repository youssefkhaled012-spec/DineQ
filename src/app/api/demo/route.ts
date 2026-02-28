import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Server-side console logging as requested
        console.log('--- New Demo Request ---');
        console.log(`Name: ${data.name}`);
        console.log(`Email: ${data.email}`);
        console.log(`Restaurant Name: ${data.restaurant}`);
        console.log('------------------------');

        // Return success state
        return NextResponse.json(
            { success: true, message: 'Demo request received successfully.' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Failed to parse request body:', error);
        return NextResponse.json(
            { success: false, message: 'Invalid request data.' },
            { status: 400 }
        );
    }
}
