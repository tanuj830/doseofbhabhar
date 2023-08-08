import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      // clientId: process.env.GOOGLE_CLIENT_ID,
      clientId: "290305077578-phnn00es9ko9av76elnfu00kfvinvp8f.apps.googleusercontent.com",
      clientSecret: "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"
      // clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = { id: "1", name: "Admin", email: "admin@admin.com" };
        console.log(user)
        return user;
      },
    }),
  ],
};
