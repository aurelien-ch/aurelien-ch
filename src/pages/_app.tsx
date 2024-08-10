import "@/styles/globals.scss";
import "@/styles/fonts.scss";
import Head from "next/head";
import { SnackbarProvider } from "notistack";
import { useEffect, useState } from "react";

import { APP_NAME, APP_DESCRIPTION } from "@/utils/globals";
import theme from "@/utils/theme";
import { RespProvider } from "@/providers/resp-context";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const snackbarStyle = {
    fontSize: "1.6rem",
    padding: ".2rem 2rem",
    backgroundColor: theme.lightBackground,
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content={APP_DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <RespProvider>
        <SnackbarProvider
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          style={snackbarStyle}
        >
          <Component {...pageProps} />
        </SnackbarProvider>
      </RespProvider>
    </>
  ) : null;
}