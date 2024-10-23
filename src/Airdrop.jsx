import React from 'react'
import {useConnection, useWallet } from '@solana/wallet-adapter-react'

const Airdrop = () => {
  const wallet = useWallet()
  const {connection} = useConnection() 
  // to get the connection object from the context and send request to the rpc server

  async function sendAirdrop(){
    
    const amount = document.getElementById('publicKey').value
    await connection.requestAirdrop(wallet.publicKey, amount * 1000000000)
    alert('Airdrop sent')
  } 

  return (
    <>
    <input id='publicKey' type="text" placeholder='Amount...' style={{padding:"0.5rem"}} />
    <button onClick={sendAirdrop}>send Airdrop</button>
    {/* {wallet.publicKey?.toBase58()} */}
    </>
  )
}

export default Airdrop;