import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "@next/font/google";
import Layout from "@/ui/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout className={inter.className}>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </>
  );
}
