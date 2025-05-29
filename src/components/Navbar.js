import React, { useState } from 'react';

export default function Navbar() {
  const [wallet, setWallet] = useState(null);

  const connectWallet = async (type) => {
    if (type === 'metamask' && window.ethereum) {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setWallet(accounts[0]);
    } else {
      alert(type === 'metamask' ? "Install MetaMask!" : "Platform wallet coming soon!");
    }
  };

  return (
    <nav>
      <button onClick={() => connectWallet('metamask')}>MetaMask</button>
      <button onClick={() => connectWallet('platform')}>TruYan Wallet</button>
      {wallet && <span>Connected: {wallet.slice(0, 6)}...</span>}
    </nav>
  );
}
