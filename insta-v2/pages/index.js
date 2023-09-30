import Head from 'next/head'
import Header from "@/components/Header";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Presenting INSTAGRAM 2.0 BUILD</h1>

      <Header />
    </div>
  );
}
