import React from 'react'
import {useConnection,useWallet} from '@solana/wallet-adapter-react'
import {LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction} from '@solana/web3.js'

const SendTokens = () => {

    const wallet = useWallet()
    const {connection} = useConnection()

    async function sendTransaction(){
        const amountToSend = document.getElementById('Amount').value
        const recipientAddress = document.getElementById('to').value

        const transaction = new Transaction()

        transaction.add(
            // add instructions 
            SystemProgram.transfer({
                fromPubkey: wallet.publicKey,
                toPubkey: new PublicKey(recipientAddress),
                lamports: amountToSend * LAMPORTS_PER_SOL
            })
        );

        // for wallet to pop up and sign the transaction
        await wallet.sendTransaction(transaction, connection)

        alert('amount '+ amountToSend + ' sent to ' + recipientAddress)


    }

  return (
    <div style={{display:"flex", gap:"1rem"}}>
    <input id='to' type="text" placeholder='Recipient address' />
    <input id='Amount' type="text" />
    <button id='transaction' onClick={sendTransaction}>Send</button>
    </div>
  )
}

export default SendTokens