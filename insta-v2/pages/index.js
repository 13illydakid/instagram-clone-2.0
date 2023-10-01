import Head from 'next/head'
import Header from "../components/Header";
import Feed from "../components/Feed";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide ">
      <Head>
        <title>Presenting INSTAGRAM 2.0 BUILD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Feed */}
      <Feed />

      {/* Modal */}
    </div>
  );
}
