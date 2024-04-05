import { ThirdwebProvider } from "@thirdweb-dev/react";
import "@/styles/globals.css";
import Layout from "@/Components/Layout";

export default function App({ Component, pageProps }) {
  const clientId = process.env.Client_Id
  return<>
      <ThirdwebProvider clientId={clientId} activeChain="arbitrum">
        <Layout>
          <Component {...pageProps} />
        </Layout>  
      </ThirdwebProvider>
  </>

}
