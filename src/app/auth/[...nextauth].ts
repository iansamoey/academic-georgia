// src/app/auth/[...nextauth].ts
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '@/lib/mongodb'; // Ensure this is correctly imported
import { User as UserModel } from '@/models/User'; // Adjusted to use named import
import type { AuthOptions } from 'next-auth'; // Import AuthOptions type for TypeScript
import type { User } from 'next-auth'; // Import User type from NextAuth

export const authOptions: AuthOptions = { // Specify AuthOptions type
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'example@example.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Check if credentials is defined before accessing properties
        if (!credentials) {
          throw new Error('No credentials provided');
        }

        const user = await UserModel.findOne({ email: credentials.email });

        // Add your logic to validate the user password, e.g., using bcrypt
        // You should hash the password in the database and use bcrypt.compare here
        if (user && user.password === credentials.password) { // Replace with bcrypt.compare
          return {
            id: user._id.toString(), // Convert ObjectId to string
            email: user.email,
            // Add any other properties required by your application
          } as User; // Cast to User type
        }

        throw new Error('Invalid email or password');
      },
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: 'jwt' as const, // Specify as const for TypeScript compatibility
  },
  secret: process.env.NEXTAUTH_SECRET, // Ensure you have this in your .env file
};

export default NextAuth(authOptions);
