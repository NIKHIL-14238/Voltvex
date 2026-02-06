import React, { createContext, useState, useEffect } from "react";

export const EnergyContext = createContext();

export function EnergyProvider({ children }) {
  // Load from localStorage or start empty
  const [trades, setTrades] = useState(() => {
    const stored = localStorage.getItem("voltvex_trades");
    return stored ? JSON.parse(stored) : [];
  });
  const [acceptedBids, setAcceptedBids] = useState(() => {
    const stored = localStorage.getItem("voltvex_accepted");
    return stored ? JSON.parse(stored) : {};
  });

  // Persist trades
  useEffect(() => {
    localStorage.setItem("voltvex_trades", JSON.stringify(trades));
  }, [trades]);

  // Persist accepted bids
  useEffect(() => {
    localStorage.setItem("voltvex_accepted", JSON.stringify(acceptedBids));
  }, [acceptedBids]);

  // 1️⃣ Producer: add a new energy listing
  const addTrade = ({ time, energy, price }) => {
    const id = Date.now();
    setTrades(prev => [
      ...prev,
      { id, time, energy, price, bidders: [] }
    ]);
  };

  // 2️⃣ Consumer: place a bid on a trade
  const placeBid = (tradeId, bidderName = "You") => {
    setTrades(prev =>
      prev.map(t =>
        t.id === tradeId
          ? {
              ...t,
              bidders: [
                ...t.bidders,
                { id: Date.now(), name: bidderName, price: t.price }
              ]
            }
          : t
      )
    );
  };

  // 3️⃣ Producer: accept one bid per trade
  const acceptBid = (tradeId, bidderId) => {
    setAcceptedBids(prev => ({ ...prev, [tradeId]: bidderId }));
  };

  return (
    <EnergyContext.Provider
      value={{ trades, acceptedBids, addTrade, placeBid, acceptBid }}
    >
      {children}
    </EnergyContext.Provider>
  );
}
