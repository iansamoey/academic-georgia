// src/types/next-auth.d.ts

import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string; // Add user ID
      email: string; // Keep existing properties
      // Add other properties as needed
    };
  }

  interface User {
    id: string; // Add user ID
    email: string; // Keep existing properties
    // Add other properties as needed
  }
}
