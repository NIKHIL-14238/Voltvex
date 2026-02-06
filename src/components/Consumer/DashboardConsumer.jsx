import React, { useContext } from "react";
import { EnergyContext } from "../../context/EnergyContext";

function DashboardConsumer() {
  const { trades, acceptedBids } = useContext(EnergyContext);

  // Active trades: those the user has accepted a bid on
  const activeTrades = trades
    .filter((t) => acceptedBids[t.id])
    .map((t) => ({
      id: t.id,
      time: t.time,
      price: `₹${t.price}/unit`,
      energy: t.energy,
      seller: `Producer_${t.id}`,
    }));

  // Static past trades (could be replaced with dynamic data later)
  const pastTrades = [
    {
      id: 1,
      time: "9:00 AM",
      price: "₹4.00/kWh",
      energy: "7.5 kWh",
      seller: "Producer_Beta",
    },
    {
      id: 2,
      time: "11:15 AM",
      price: "₹5.00/kWh",
      energy: "12 kWh",
      seller: "Producer_Gamma",
    },
    {
      id: 3,
      time: "2:45 PM",
      price: "₹4.20/kWh",
      energy: "5 kWh",
      seller: "Producer_Omega",
    },
  ];

  return (
    <div className="text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 bg-[#1d1d1d] shadow-md">
        <div className="flex items-center">
          <a href="/">
            <img
              src="../src/assets/vv3.png"
              alt="VoltVex Logo"
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

      {/* Main Dashboard Body */}
      <main className="pt-28 pb-20 px-8 bg-gradient-to-b from-[#272727] to-[#020202] min-h-screen">
        <h1 className="text-4xl font-bold mb-10 text-center text-[#9D85BE]">
          Consumer Dashboard
        </h1>

        {/* Active Trades Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#85be93]">
            Active Trade
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left table-auto border border-gray-600 bg-[#1e1e1e] rounded-xl shadow-md">
              <thead className="bg-[#33334d] text-white">
                <tr>
                  <th className="py-3 px-4">Time</th>
                  <th className="py-3 px-4">Price</th>
                  <th className="py-3 px-4">Energy</th>
                  <th className="py-3 px-4">Seller</th>
                </tr>
              </thead>
              <tbody>
                {activeTrades.map((trade) => (
                  <tr
                    key={trade.id}
                    className="border-t border-gray-700 hover:bg-[#2a2a3d]"
                  >
                    <td className="py-3 px-4">{trade.time}</td>
                    <td className="py-3 px-4">{trade.price}</td>
                    <td className="py-3 px-4">{trade.energy}</td>
                    <td className="py-3 px-4">{trade.seller}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Past Trades Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-[#85be93]">
            Past Trades
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left table-auto border border-gray-600 bg-[#1e1e1e] rounded-xl shadow-md">
              <thead className="bg-[#3b386b] text-white">
                <tr>
                  <th className="py-3 px-4">Time</th>
                  <th className="py-3 px-4">Price</th>
                  <th className="py-3 px-4">Energy</th>
                  <th className="py-3 px-4">Seller</th>
                </tr>
              </thead>
              <tbody>
                {pastTrades.map((trade) => (
                  <tr
                    key={trade.id}
                    className="border-t border-gray-700 hover:bg-[#3f3f59]"
                  >
                    <td className="py-3 px-4">{trade.time}</td>
                    <td className="py-3 px-4">{trade.price}</td>
                    <td className="py-3 px-4">{trade.energy}</td>
                    <td className="py-3 px-4">{trade.seller}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
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

export default DashboardConsumer;
