import "@/styles/globals.scss";
import "@/styles/fonts.scss";

import { useEffect, useState } from "react";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import { Fade } from "react-awesome-reveal";
import { SnackbarProvider } from "notistack";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import { APP_NAME, APP_DESCRIPTION } from "@/utils/globals";
import { ResizeProvider } from "@/providers/resize-context";
import { ScrollProvider } from "@/providers/scroll-context";

import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [particlesInit, setParticlesInit] = useState<boolean>(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setParticlesInit(true);
    });
  }, []);

  const snackbarStyle = {
    fontSize: "1.6rem",
    padding: ".2rem 2rem",
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return isMounted && particlesInit ? (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content={APP_DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Fade triggerOnce duration={2000}>
        <ResizeProvider>
          <ScrollProvider>
            <SnackbarProvider
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              style={snackbarStyle}
            >
              <Component {...pageProps} />
            </SnackbarProvider>
          </ScrollProvider>
        </ResizeProvider>
      </Fade>
    </>
  ) : null;
};

export default appWithTranslation(App);
