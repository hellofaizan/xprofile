import "@/styles/globals.css";
import Head from "next/head";
import "bootstrap-icons/font/bootstrap-icons.css";
import Script from "next/script";
// 1. import `NextUIProvider` component
import { NextUIProvider, createTheme } from "@nextui-org/react";
import { Analytics } from "@vercel/analytics/react";

// 2. create a custom theme
const darkTheme = createTheme({ type: "dark" });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>𝕏 Profile - Your Twitter Profile Card</title>
        <link rel="icon" href="/x_large.png" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#171717" />
        <meta
          name="keywords"
          content="X, Twitter, Twitter Profile, X Profile Card, Open Source, github, typescript, nextjs, hellofaizan portfolio"
        />
        <meta name="description" content="Showcase your 𝕏 profile to world" />
        <meta name="author" content="Hello Faizan" />
        <link rel="apple-touch-icon" href="/x_large.png" />

        <meta
          property="og:title"
          content="𝕏 Profile - Your Twitter Profile Card"
        />
        <meta
          property="og:site_name"
          content="Showcase your 𝕏 profile to world"
        />
        <meta property="og:url" content="https://xprofile.hellofaizan.me" />

        <meta
          property="og:description"
          content="Showcase your 𝕏 profile to world and get recomendations from community."
        />

        <meta
          property="og:image"
          itemProp="image"
          content="https://i.insider.com/64be308bed4f4600196198a0?width=1200&format=jpeg"
        />

        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@HelloFaizaan" />
        <meta name="twitter:creator" content="@HelloFaizaan" />
        <meta
          name="twitter:title"
          content="𝕏 Profile - Your Twitter Profile Card"
        />
        <meta
          name="twitter:description"
          content="Showcase your 𝕏 profile to world and get recomendations from community."
        />
        <meta
          name="twitter:image"
          itemProp="image"
          content="https://i.insider.com/64be308bed4f4600196198a0?width=1200&format=jpeg"
        />
      </Head>

      <NextUIProvider theme={darkTheme}>

        <Script
          strategy="afterInteractive"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GV02M4EWW9"
        ></Script>

        <Script strategy="afterInteractive" id="google-analytics">
          {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());

             gtag('config', 'G-GV02M4EWW9');
          `}
        </Script>

        <Component {...pageProps} />
        <Analytics />
      </NextUIProvider>
    </>
  );
}
