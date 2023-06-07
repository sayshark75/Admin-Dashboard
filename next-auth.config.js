import GoogleProvider from "next-auth/providers/google";

export default {
  secret: process.env["NO_SECRET"],
  providers: [
    GoogleProvider({
      clientId: process.env["GOOGLE_CLIENT_ID"],
      clientSecret: process.env["GOOGLE_CLIENT_SECRET"],
    }),
  ],
};
