import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function DashboardProducer() {
  const energyData = [
    { name: "Mon", kWh: 24 },
    { name: "Tue", kWh: 30 },
    { name: "Wed", kWh: 20 },
    { name: "Thu", kWh: 27 },
    { name: "Fri", kWh: 35 },
    { name: "Sat", kWh: 40 },
    { name: "Sun", kWh: 32 },
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

      {/* Body Content */}
      <main className="pt-32 px-20 pb-10 bg-gradient-to-b from-[#020202] to-[#1d1d1d] min-h-screen">
        {/* Top Statistics */}
        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-10 poppins text-[#9D85BE]">
            Top Statistics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            <div className="bg-[#1f1f1f] p-8 rounded-xl shadow-lg hover:scale-105 transition">
              <h3 className="text-2xl font-bold mb-2 text-[#85be93]">
                Energy Sold
              </h3>
              <p className="text-4xl font-semibold">1280 kWh</p>
            </div>
            <div className="bg-[#1f1f1f] p-8 rounded-xl shadow-lg hover:scale-105 transition">
              <h3 className="text-2xl font-bold mb-2 text-[#85be93]">
                Total Earnings
              </h3>
              <p className="text-4xl font-semibold">₹ 24,000</p>
            </div>
            <div className="bg-[#1f1f1f] p-8 rounded-xl shadow-lg hover:scale-105 transition">
              <h3 className="text-2xl font-bold mb-2 text-[#85be93]">
                Bids Placed
              </h3>
              <p className="text-4xl font-semibold">16</p>
            </div>
          </div>
        </section>

        {/* Graph Section */}
        <section>
          <h2 className="text-4xl font-semibold mb-10 poppins text-[#9D85BE]">
            Energy Activity Graph
          </h2>
          <div className="bg-[#1f1f1f] p-10 rounded-xl shadow-lg">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={energyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="name" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="kWh"
                  stroke="#85be93"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
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

export default DashboardProducer;
