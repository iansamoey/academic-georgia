// src/app/api/users/login/route.ts

import { hash, compare } from 'bcrypt'; // Assuming you're using bcrypt for hashing passwords
import { NextApiRequest, NextApiResponse } from 'next';

interface User {
  email: string;
  passwordHash: string;
  isAdmin: boolean;
}

// Mock function to get user from the database
const getUserByEmail = async (email: string): Promise<User | null> => {
  // Replace this with your actual database fetch logic
  // Simulating a user for demonstration
  if (email === 'user@example.com') {
    const passwordHash = await hash('password123', 10); // Example hashed password
    return { email, passwordHash, isAdmin: false };
  }
  return null; // Return null if no user found
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    console.log('Login attempt:', { email }); // Log the incoming email

    const user = await getUserByEmail(email); // Fetch user from your database

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    const isMatch = await compare(password, user.passwordHash); // Use the correct field for your hashed password

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // If login is successful, return the user data, including isAdmin status
    return res.status(200).json({ isAdmin: user.isAdmin });
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
