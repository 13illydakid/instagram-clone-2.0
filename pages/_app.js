// import 'tailwindcss/tailwind.css'
import '../styles/globals.css';
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  );
}
// function MyApp({ Component, pageProps: { session, ...pageProps } }) {
//   return (
//     <SessionProvider session={session}>
//       <RecoilRoot>
//         <Component {...pageProps} />
//       </RecoilRoot>
//     </SessionProvider>
//   );
// }

export default MyApp;
