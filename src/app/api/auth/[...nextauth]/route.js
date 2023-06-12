import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const options = {
    secret: process.env["NO_SECRET"],
    providers: [
        GoogleProvider({
            clientId: process.env["GOOGLE_CLIENT_ID"],
            clientSecret: process.env["GOOGLE_CLIENT_SECRET"],
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const { email } = credentials;
                // we can verify Here using DB as well, i kept it dummy
                const user = { name: "custom user", email, image: "https://img.freepik.com/premium-vector/businessman-avatar-cartoon-character-profile_18591-50141.jpg" };
                return user;
            },
        }),
    ],
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
