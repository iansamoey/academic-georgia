import NextAuth, { AuthOptions, User as NextAuthUser } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { validateUser } from '@/lib/user'; // Ensure this function is properly defined
import UserModel, { IUser } from '@/models/User'; // Ensure this import is correct
import { AdapterUser } from 'next-auth/adapters';

// Extend NextAuth User type globally to include isAdmin
interface CustomUser extends NextAuthUser {
  isAdmin?: boolean; // Optional property
}

// Custom type guard to check if user is of type CustomUser
function isCustomUser(user: NextAuthUser | AdapterUser): user is CustomUser {
  return (user as CustomUser).isAdmin !== undefined;
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error('No credentials provided');
        }

        try {
          const user: IUser = await validateUser(credentials.email, credentials.password);
          return {
            id: user._id.toString(), // Convert ObjectId to string
            email: user.email,
            isAdmin: user.isAdmin, // Assuming isAdmin is a property on your user model
          } as CustomUser; // Cast to CustomUser
        } catch (error) {
          throw new Error('Invalid email or password');
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      // Ensure that token is properly typed
      if (user) {
        token.id = (user as CustomUser).id; // Type assertion to CustomUser
        if (isCustomUser(user)) {
          token.isAdmin = user.isAdmin; // Assign isAdmin if user is CustomUser
        }
      }
      return token; // Return the token without explicit casting
    },
    async session({ session, token }) {
      // Ensure token properties are typed correctly
      session.user.id = token.id as string; // Ensure token.id is treated as a string
      session.user.isAdmin = token.isAdmin as boolean; // Ensure token.isAdmin is treated as a boolean
      return session; // Return session
    },
  },
  pages: {
    signIn: '/auth/login', // Your custom login page
  },
};

export default NextAuth(authOptions);
