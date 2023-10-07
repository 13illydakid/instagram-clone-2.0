// import 'tailwindcss/tailwind.css'
import '../styles/globals.css';
// import { SessionProvider } from "next-auth/react";
import { AuthContextProvider } from "./api/auth/[...nextauth]";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <AuthContextProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </AuthContextProvider>
  );
}

export default MyApp;
