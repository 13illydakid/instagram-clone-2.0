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
        <title>Instagram</title>
        <link rel="icon" href="/PortfolioLogo.ico" />
      </Head>

      <Modal />
      <Header />
      <Feed />

      {/* Modal */}
    </div>
  );
}
