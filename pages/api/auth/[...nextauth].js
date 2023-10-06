import NextAuth from "next-auth/next";
// import { CredentialsProvider } from "next-auth/providers/credentials";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";

export const authOptions = {
  pages: {
    signIn: '/auth/signin'
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials) {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, credentials.email || '', credentials.password || '');
          if (userCredential.user) {
            return userCredential.user;
          }
          return null;
        } catch (error) {
          console.log(error);
          return null;
        }
      }
    })
  ]
};

export default NextAuth(authOptions);



// import NextAuth from "next-auth"
// import GoogleProvider from "next-auth/providers/google"

// export const authOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//     }),
//     // ...add more providers here
//   ],
//   secret: [
//     GoogleProvider({
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     })
//   ],
//   pages: {
//     signIn: "/auth/signin",
//   },
//   callbacks: {
//     async session({ session, token, user }) {
//       session.user.username = session.user.name
//         .split(" ")
//         .join("")
//         .toLowerCase();

//       session.user.uid = token.sub;
//       return session;
//     }
//   },
// }

// export default NextAuth(authOptions);

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
