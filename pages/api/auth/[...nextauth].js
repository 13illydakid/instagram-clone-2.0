import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      // clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
    // ...add more providers here
  ],
  secret: [
    GoogleProvider({
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  pages: {
    signin: "/auth/signin",
  },
  callbacks: {
    // async jwt({ token, account, profile }) {
    //   // Persist the OAuth access_token and or the user id to the token right after signin
    //   if (account) {
    //     token.accessToken = account.access_token
    //     token.id = profile.id
    //   }
    //   return token
    // },
    async session({ session, token, user }) {
      session.user.username = session.user.name
        .split(" ")
        .join("")
        .toLowerCase();

      session.accessToken = token.accessToken;
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

//https://gallery.billychiu.dev/auth/signin?callbackUrl=https%3A%2F%2Fgallery.billychiu.dev&error=OAuthSignin


//https://instagram-clone-2-0-dlgglbyly-billychius-projects.vercel.app/
