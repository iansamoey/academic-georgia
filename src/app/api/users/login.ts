import { NextResponse } from 'next/server';
import { User } from '@/models/User'; // Adjust path as needed
import bcrypt from 'bcryptjs'; // Make sure to install bcryptjs for password hashing

export async function POST(request: Request) {
    const data = await request.json();
    const { email, password } = data;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Compare the password with the hashed password stored in the database
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    // If login is successful, return user information (exclude password)
    const { password: _, ...userData } = user.toObject(); // Exclude password
    return NextResponse.json({ success: true, user: userData });
}
