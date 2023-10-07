import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  // secret: [
  //   GoogleProvider({
  //     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  //   })
  // ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session.user.name
        .split(" ")
        .join("")
        .toLowerCase();

      session.user.uid = token.sub;
      return session;
    }
  },

  //   theme: {
  //    logo: "",
  //    brandColor: "",
  //    colorScheme: "auto",
  //   },
}

export default NextAuth(authOptions);

// import NextAuth from 'next-auth';
// import GoogleProvider from 'next-auth/providers/google';
// export const authOptions = {
//  providers: [
//   GoogleProvider({
//    clientId: process.env.GOOGLE_ID,
//    clientSecret: process.env.GOOGLE_SECRET,
//   }),
//  ],
//  session: {
//   strategy: 'jwt',
//  },
// };
// export default NextAuth(authOptions);
