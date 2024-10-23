import React, { useEffect } from 'react'
import {useConnection,useWallet} from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL } from '@solana/web3.js'


const ShowBalance = () => {
    const wallet = useWallet()
    const {connection} = useConnection()

    async function userBalance(){
        const balance = await connection.getBalance(wallet.publicKey) / LAMPORTS_PER_SOL
        document.querySelector('.balance').innerHTML = balance
    }


    useEffect(() => {
        userBalance()
    }, [wallet])


  return (
    <>
    <div>
    Balance : <span className='balance'></span> SOL
    </div>
    
    </>
  )
}

export default ShowBalance