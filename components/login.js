import React from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { Wallet } from '@project-serum/anchor'
import Payment from './Payment'
import HomePage from '../pages/homepage'


const styles = {
    loginPage: 'w-screen h-screen bg-white flex justify-center items-center flex-col',
    text: 'text-4xl text-black mb-10'
}


const Login = () => {

    const wallet = useWallet()

    if (wallet.connected) return <HomePage/>

    return (
        <div className={styles.loginPage}>
            <p className={styles.text}>Login to access the app</p>
            <WalletMultiButton />
        </div>
    )
}

export default Login