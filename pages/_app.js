// import 'tailwindcss/tailwind.css'
import '../styles/globals.css';
import { getServerSession } from "next-auth/next";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import { authOptions } from "./api/auth/[...nextauth]";

// const getPageProps = async ({ req, res }) => {
//   return {
//     props: {
//       session: await getServerSession(req, res, authOptions)
//     }
//   }
// }
// const pageProps = getPageProps();
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
// function MyApp({ Component, pageProps}) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp;
