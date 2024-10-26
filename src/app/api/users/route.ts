import { NextResponse } from 'next/server';

// Mock user data for demonstration purposes
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

// Handle GET request
export async function GET() {
  return NextResponse.json(users); // Respond with user data
}

// You can also implement POST, PUT, DELETE methods as needed
