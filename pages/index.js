// 'use client';
// import { signIn, signOut, useSession } from "next-auth/react";
// //import { redirect } from "next/navigation";

// function Home() {
//   const session = useSession({
//     required: true,
//     onUnauthenticated() {
//       // async redirect => ('/signin');
//       signIn("credentials", { callbackUrl: '/'})
//     },
//   });

//   return (
//     <div className="p-8">
//       <div className="text-white">{session?.data?.user?.email}</div>
//       <button className="text-white" onClick={() => signOut()}>Logout</button>
//     </div>
//   );
// }

// Home.requireAuth = true;

// export default Home;


import Head from 'next/head'
import Header from "../components/Header";
import Feed from "../components/Feed";
import Modal from "../components/Modal";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide ">
      <Head>
        <title>Presenting INSTAGRAM 2.0 BUILD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Modal />
      <Header />
      <Feed />

      {/* Modal */}
    </div>
  );
}
