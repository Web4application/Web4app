import { useEffect, useState } from "react";
import { ethers } from "ethers";

export default function WalletPage(){
  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<string>("0");

  useEffect(() => {
    // client-side-only
    if (typeof window === "undefined") return;
  }, []);

  async function createWallet() {
    const wallet = ethers.Wallet.createRandom();
    // Show mnemonic to user and store encrypted locally
    const mnemonic = wallet.mnemonic.phrase;
    setAddress(wallet.address);
    // NOTE: never send private key to server
    alert(`Save this mnemonic securely:\n\n${mnemonic}`);
  }

  async function getBalanceFor(addr:string){
    const res = await fetch(`/api/chain/balance?address=${addr}`);
    const data = await res.json();
    setBalance(data.balance || "0");
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Swift Beta Wallet</h1>
      <button onClick={createWallet}>Create Wallet (mnemonic)</button>
      {address && (
        <>
          <p>Address: {address}</p>
          <p>Balance: {balance}</p>
          <button onClick={() => getBalanceFor(address)}>Refresh Balance</button>
        </>
      )}
    </div>
  )
}
