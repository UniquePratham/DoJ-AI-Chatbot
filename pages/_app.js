// pages/_app.js
import { ChakraProvider} from "@chakra-ui/react";
import Head from "next/head";
import theme from "@/components/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>EchoJusticeAI - Amplifying Fairness, One Voice at a Time.</title>
        <meta
          name="description"
          content="EchoJusticeAI - Amplifying Fairness, One Voice at a Time."
        />
        <link rel="icon" href="favicon.png" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
