import { StateProvider } from "@/context/StateContext";
import reducer, { initialState } from "@/context/StateReducers.js";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Head>
        <title>Let'sTalk</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />;
    </StateProvider>
  );
}
