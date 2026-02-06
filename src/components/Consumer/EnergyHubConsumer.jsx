import React, { useContext, useState } from "react";
import { EnergyContext } from "../../context/EnergyContext";

function EnergyHubConsumer() {
  const { trades, placeBid, acceptedBids } = useContext(EnergyContext);

  // Track local user bids (from localStorage as before)
  const [bidClicked, setBidClicked] = useState(() => {
    const stored = localStorage.getItem("voltvex_myBids");
    return stored ? JSON.parse(stored) : {};
  });

  const handleBid = (id) => {
    placeBid(id, "You");
    setBidClicked((prev) => {
      const updated = { ...prev, [id]: true };
      localStorage.setItem("voltvex_myBids", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div className="text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 bg-[#1d1d1d] shadow-md">
        <div className="flex items-center">
          <a href="/">
            <img
              src="../src/assets/vv3.png"
              alt="VoltVex logo"
              className="h-16"
            />
          </a>
        </div>
        <nav className="flex gap-10 font-semibold text-lg">
          <a
            href="/consumer/welcome"
            className="hover:text-[#85be93] transition"
          >
            Welcome Hub
          </a>
          <a
            href="/consumer/dashboard"
            className="hover:text-[#85be93] transition"
          >
            Dashboard
          </a>
          <a
            href="/consumer/energyhub"
            className="hover:text-[#85be93] transition"
          >
            Energy Hub
          </a>
        </nav>
        <div className="rounded-full bg-[#85be93] text-black px-4 py-2 font-bold">
          A
        </div>
      </header>

      {/* Main section - Energy Hub Table */}
      <main className="pt-32 pb-20 bg-gradient-to-b from-[#272727] to-[#020202] min-h-screen px-10">
        <h2 className="text-4xl poppins font-bold text-center mb-12 text-[#9D85BE]">
          Available Energy Trades
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse rounded-lg overflow-hidden bg-[#1e1e1e]">
            <thead className="bg-[#3B386B] text-white text-md">
              <tr>
                <th className="py-4 px-6">Producer</th>
                <th className="py-4 px-6">Time Slot</th>
                <th className="py-4 px-6">Price</th>
                <th className="py-4 px-6">Energy</th>
                <th className="py-4 px-6">Bid</th>
              </tr>
            </thead>
            <tbody>
              {trades.map((trade) => {
                const hasBidded = bidClicked[trade.id];
                const isAccepted = acceptedBids[trade.id];
                const disabled = hasBidded || isAccepted;
                const label = isAccepted
                  ? "ACCEPTED"
                  : hasBidded
                  ? "BID Placed"
                  : "BID";

                return (
                  <tr
                    key={trade.id}
                    className="hover:bg-[#2f2f2f] border-b border-[#444]"
                  >
                    <td className="py-4 px-6">Producer_{trade.id}</td>
                    <td className="py-4 px-6">{trade.time}</td>
                    <td className="py-4 px-6">₹{trade.price}/unit</td>
                    <td className="py-4 px-6">{trade.energy}</td>
                    <td className="py-4 px-6">
                      <button
                        onClick={() => handleBid(trade.id)}
                        disabled={disabled}
                        className={`w-32 px-5 py-2 rounded-xl font-semibold transition duration-300 text-center
                          ${
                            disabled
                              ? "bg-gray-700 text-green-300 cursor-not-allowed"
                              : "bg-[#85be93] text-black hover:bg-green-400"
                          }`}
                      >
                        {label}
                      </button>
                    </td>
                  </tr>
                );
              })}
              {trades.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-6 text-center text-gray-400">
                    No energy trades available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[radial-gradient(at_66%_90%,#282828,#030303)] text-gray-300 py-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          {/* Top row: logo & links */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8">
            {/* Logo & Tagline */}
            <div className="text-center md:text-left mb-6 md:mb-0">
              <img
                src="../src/assets/vv3.png"
                alt="VoltVex Logo"
                className="h-12 mx-auto md:mx-0"
              />
              <div className="text-xl text-[#9D85BE] font-mono ">
                VoltVex <br />{" "}
                <span className="text-lg font-mono">
                  Revolutionizing every Volt.
                </span>
              </div>
              <p className="mt-2 text-sm italic">
                Powering peer-to-peer energy.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div>
                <h4 className="uppercase font-semibold mb-2">Quick Links</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    <a href="/" className="hover:text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/consumer/dashboard" className="hover:text-white">
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="/consumer/energyhub" className="hover:text-white">
                      Energy Hub
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="uppercase font-semibold mb-2">Legal</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    <a href="/terms" className="hover:text-white">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="/privacy" className="hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social + Copyright */}
          <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
            {/* Social Icons */}
            <div className="flex gap-4 mb-4 md:mb-0">
              <a href="#" aria-label="Twitter" className="hover:text-white">
                {/* Twitter SVG */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23 3a10.9..." />
                </svg>
              </a>
              <a href="#" aria-label="GitHub" className="hover:text-white">
                {/* GitHub SVG */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0a12..." />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white">
                {/* LinkedIn SVG */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M4.98 3.5..." />
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm">
              &copy; {new Date().getFullYear()} VoltVex. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default EnergyHubConsumer;
