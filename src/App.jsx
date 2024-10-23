import { useState } from 'react'
import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import  Airdrop  from '../src/Airdrop';
import './App.css'


// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import ShowBalance from './ShowBalance';


function App() {

  return (

    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/e3HZvubgnRnSYOuGvGEm5OzgadUR-dTQ"}>
      {/* will provide us with connection object through application */}
      <WalletProvider wallets={[]} autoConnect>
        {/* will provide us with wallet object through application */}
        <WalletModalProvider>
          <div style={{width:"100%", display:"flex", flexDirection:"column" ,justifyContent:"center", gap:"2rem"}}>
          <WalletMultiButton />
          <WalletDisconnectButton />
          <Airdrop />
          <ShowBalance/>
          </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
  )
}
  
export default App
