import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="grid grid-cols-5 gap-8">
      <Card
        name="Bitcoin (BTC)"
        price="$31,812.80"
        per="+10%"
        image="Bitcoin.svg"
        className="from-card-bg to-btc"
        block1="Solana.svg"
        block2="Ethereum.svg"
        block3="BinanceCoin.svg"
      />
      <Card
        name="Solana (SOL)"
        price="$32.83"
        per="-12.32%"
        image="Solana.svg"
        className="from-card-bg to-solana"
        block1="Bitcoin.svg"
        block2="Ethereum.svg"
        block3="BinanceCoin.svg"
      />
      <Card
        name="Ethereum (ETH)"
        price="$1,466.45"
        per="-11.93%"
        image="Ethereum.svg"
        className="from-card-bg to-ethereum"
        block1="Solana.svg"
        block2="Bitcoin.svg"
        block3="BinanceCoin.svg"
      />
      <Card
        name="Binance USD (BUSD)"
        price="$1.00"
        per="+0.26%"
        image="BinanceCoin.svg"
        className="from-card-bg to-binance"
        block1="Solana.svg"
        block2="Ethereum.svg"
        block3="BinanceCoin.svg"
      />
      <Card
        name="Shiba Inu (SHIB)"
        price="$0.00000001948"
        per="-8.1%"
        image="SHIBAINU.svg"
        className="from-card-bg to-shiba"
        block1="Solana.svg"
        block2="Ethereum.svg"
        block3="BinanceCoin.svg"
      />
    </div>
  );
};

export default Cards;
