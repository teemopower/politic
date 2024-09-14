// app/api/users/route.ts
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// Handle POST request to create a new user
export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, state } = await request.json();

    // Create a new user in the database
    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        state,
      },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ error: 'Unable to create user' }, { status: 500 });
  }
}

// Handle GET request to fetch all users
export async function GET() {
  try {
    // Fetch all users from the database
    const users = await prisma.user.findMany();

    // Return the users as JSON with status 200
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Unable to fetch users' }, { status: 500 });
  }
}
