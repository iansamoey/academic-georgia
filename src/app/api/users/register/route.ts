// src/app/api/users/register/route.ts

import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb'; // Make sure this is correctly exporting connectToDatabase
import bcrypt from 'bcrypt';
import User from '@/models/User'; // Adjust the path based on your project structure

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Validate inputs
    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password are required.' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const { db } = await connectToDatabase();
    const userExists = await db.collection('users').findOne({ email });

    if (userExists) {
      return NextResponse.json({ message: 'User already exists.' }, { status: 400 });
    }

    const newUser = await db.collection('users').insertOne({
      email,
      password: hashedPassword,
    });

    return NextResponse.json({ message: 'User registered successfully.', user: newUser }, { status: 201 });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ message: 'Failed to register user' }, { status: 500 });
  }
}
