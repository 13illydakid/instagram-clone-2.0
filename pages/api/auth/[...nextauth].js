import { useContext, createContext, useState, useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // const user = result.user;
        setUser(result.user);
      }).catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  const email = error.customData.email;
  const credential = GoogleAuthProvider.credentialFromError(error);
})
  };

const logOut = () => {
  signOut(auth);
};

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  return () => unsubscribe();
}, [user]);

return (
  <AuthContext.Provider value={{ user, googleSignIn, logOut }}>
    {children}
  </AuthContext.Provider>
);
};

export const UserAuth = () => {
  return useContext(AuthContext);
};









// import NextAuth from "next-auth/next";
// // import { CredentialsProvider } from "next-auth/providers/credentials";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../../firebase";

// export const authOptions = {
//   pages: {
//     signIn: '/auth/signin'
//   },
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {},
//       async authorize(credentials) {
//         try {
//           const userCredential = await signInWithEmailAndPassword(auth, credentials.email || '', credentials.password || '');
//           if (userCredential.user) {
//             return userCredential.user;
//           }
//           return null;
//         } catch (error) {
//           console.log(error);
//           return null;
//         }
//       }
//     })
//   ]
// };

// export default NextAuth(authOptions);



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
