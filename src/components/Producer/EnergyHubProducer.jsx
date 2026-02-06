import React, { useState, useContext } from "react";
import { EnergyContext } from "../../context/EnergyContext";

function EnergyHubProducer() {
  const { trades, acceptedBids, addTrade, acceptBid } =
    useContext(EnergyContext);
  const [form, setForm] = useState({ time: "", energy: "", price: "" });
  const [showPopupId, setShowPopupId] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleListEnergy = () => {
    const { time, energy, price } = form;
    if (!time || !energy || !price) return;
    addTrade({ time, energy, price });
    setForm({ time: "", energy: "", price: "" });
  };

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
            href="/producer/welcome"
            className="hover:text-[#85be93] transition"
          >
            Welcome Hub
          </a>
          <a
            href="/producer/dashboard"
            className="hover:text-[#85be93] transition"
          >
            Dashboard
          </a>
          <a
            href="/producer/energyhub"
            className="hover:text-[#85be93] transition"
          >
            Energy Hub
          </a>
        </nav>
        <div className="rounded-full bg-[#85be93] text-black px-4 py-2 font-bold">
          A
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 px-10 pb-20 bg-[#111] min-h-screen">
        {/* Form Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-[#9D85BE]">
            List New Energy Trade
          </h2>
          <div className="bg-[#1f1f1f] p-6 rounded-xl max-w-2xl space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                name="time"
                value={form.time}
                onChange={handleChange}
                placeholder="Time (e.g. 10:00 - 14:00)"
                className="p-3 rounded-lg bg-[#2b2b2b] outline-none"
              />
              <input
                name="energy"
                value={form.energy}
                onChange={handleChange}
                placeholder="Energy (e.g. 4.5kW)"
                className="p-3 rounded-lg bg-[#2b2b2b] outline-none"
              />
              <input
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="Price/unit (Rs.)"
                className="p-3 rounded-lg bg-[#2b2b2b] outline-none"
              />
            </div>
            <button
              onClick={handleListEnergy}
              className="bg-[#85be93] text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#72ab81] transition"
            >
              List Energy
            </button>
          </div>
        </section>

        {/* Listed Energy Table */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-[#9D85BE]">
            Current Listed Energy
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-[#1f1f1f] rounded-xl overflow-hidden text-left">
              <thead className="bg-[#2b2b2b] text-[#85be93]">
                <tr>
                  <th className="p-4">Time</th>
                  <th className="p-4">Energy</th>
                  <th className="p-4">Price/unit (Rs.)</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {trades.map((entry) => (
                  <tr key={entry.id} className="border-b border-[#333]">
                    <td className="p-4">{entry.time}</td>
                    <td className="p-4">{entry.energy}</td>
                    <td className="p-4">{entry.price}</td>
                    <td className="p-4">
                      <button
                        onClick={() =>
                          setShowPopupId(
                            showPopupId === entry.id ? null : entry.id
                          )
                        }
                        className="bg-[#85be93] text-black px-4 py-2 rounded-lg hover:bg-[#72ab81] transition"
                      >
                        Show Bidders
                      </button>

                      {/* Popup Card */}
                      {showPopupId === entry.id && (
                        <div className="absolute mt-4 bg-[#2b2b2b] p-4 rounded-xl shadow-lg w-80 z-50">
                          <h3 className="text-lg font-semibold mb-2 text-[#9D85BE]">
                            Bidders
                          </h3>
                          <ul className="space-y-2">
                            {entry.bidders.map((bidder) => (
                              <li
                                key={bidder.id}
                                className="flex justify-between items-center bg-[#3a3a3a] p-2 rounded-lg"
                              >
                                <div>
                                  {bidder.name} — ₹{bidder.price}
                                </div>
                                <button
                                  onClick={() => acceptBid(entry.id, bidder.id)}
                                  disabled={
                                    acceptedBids[entry.id] &&
                                    acceptedBids[entry.id] !== bidder.id
                                  }
                                  className={`${
                                    acceptedBids[entry.id] === bidder.id
                                      ? "bg-green-500"
                                      : acceptedBids[entry.id]
                                      ? "bg-gray-500 cursor-not-allowed"
                                      : "bg-[#85be93] hover:bg-[#72ab81]"
                                  } text-black font-semibold px-3 py-1 rounded`}
                                >
                                  {acceptedBids[entry.id] === bidder.id
                                    ? "Accepted"
                                    : "Accept Bid"}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
                {trades.length === 0 && (
                  <tr>
                    <td colSpan="4" className="p-6 text-center text-gray-400">
                      No energy trades listed yet.
                    </td>
                  </tr>
                )}
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
                    <a href="/producer/dashboard" className="hover:text-white">
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="/producer/energyhub" className="hover:text-white">
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

export default EnergyHubProducer;
