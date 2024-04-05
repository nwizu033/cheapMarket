import { ThirdwebProvider } from "@thirdweb-dev/react";
import {createWeb3Modal, defaultWagmiConfig} from '@web3modal/wagmi/react'
import {WagmiConfig} from 'wagmi'
import {arbitrum} from 'wagmi/chains'
import {ToastContainer} from 'react-toastify'
import "@/styles/globals.css";
import Layout from "@/Components/Layout";

// 1. Get projectId
// const projectId = process.env.Project_Id
const projectId = "faee34443b3ea04a6edae3ceed49a142"
// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Nutlip web3',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [arbitrum]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains,
  themeMode: 'dark',
  themeVariables: {
  '--w3m-accent': '#F30029',
  '--w3m-border-radius-master': '10px',
} })

export default function App({ Component, pageProps }) {
  const clientId = process.env.Client_Id
  return<>
   <WagmiConfig config={wagmiConfig}>
      <ThirdwebProvider clientId={clientId} activeChain="arbitrum">
        <Layout>
          <Component {...pageProps} />
          <ToastContainer/>
        </Layout>  
      </ThirdwebProvider>
    </WagmiConfig>
  </>

}
