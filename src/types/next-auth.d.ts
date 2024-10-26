// src/types/next-auth.d.ts
import NextAuth from "next-auth";

// Extend the NextAuth session type
declare module "next-auth" {
    interface Session {
        user: {
            name?: string | null;
            email?: string | null;
            image?: string | null;
            isAdmin?: boolean; // Add this line to include isAdmin
        };
    }
}
