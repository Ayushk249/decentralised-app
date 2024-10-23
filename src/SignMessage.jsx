import {ed25519} from '@noble/curves/ed25519'
import React from 'react'
import bs58 from 'bs58'
import { useWallet } from '@solana/wallet-adapter-react'

const SignMessage = () => {

    const {publicKey,signMessage} = useWallet()

    async function sign(){
        if (!publicKey) throw new Error('Wallet not connected')
        if (!signMessage) throw new Error('Wallet does not support message signing')

        const message = document.getElementById('Message').value
        const encodedMessage = new TextEncoder().encode(message)
        const signature = await signMessage(encodedMessage) // this pops phantom

        // then the check would happen at backend
        if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) {
            throw new Error('Invalid signature')
        }

        alert('success',`Message signed : ${bs58.encode(signature)}`)
        


    }
  return (
    <>
    <div style={{display:"flex", gap:"1rem"}}>
        <input id='Message' type="text" placeholder='write a message'/>
        <button onClick={sign}>Validate</button>
    </div>
    </>
  )
}

export default SignMessage