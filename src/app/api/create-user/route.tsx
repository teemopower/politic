import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const body = await request.json();

    const { firstName, lastName, email, state } = body;

    // Handle the posted data (e.g., save it to a database or process it)
    console.log('Received:', { firstName, lastName, email, state });

   

    // Respond with a success message
    return NextResponse.json({ message: 'User data received', data: body });
}
