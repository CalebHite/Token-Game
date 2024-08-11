'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { connectWallet } from "../web3"

export default function Home() {
  async function handleConnect() {
    console.log("connecting wallet!");
    try{
      await connectWallet();
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <main className={styles.main}>
      <button onClick={handleConnect}>Connect Wallet</button>
    </main>
  );
}
