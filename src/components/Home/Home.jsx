import React from "react";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="  text-white">
      <header className=" fixed top-0 left-0 right-0 z-50 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/">
            <img
              src="src/assets/vv3.png"
              alt="VoltVex logo"
              className="h-16"
            />
          </a>
        </div>

        <div>
          <button
            className="bg-gradient-to-r from-[#9D85BE] to-[#382668] hover:bg-gradient-to-r  hover:from-[#785aa3] hover:to-[#301b69] hover:cursor-pointer text-white font-semibold m-4 px-4 py-2 rounded-full border-1 "
            onClick={handleLoginClick}
          >
            Login
          </button>
        </div>
      </header>

      {/* hero */}
      <section className=" bg-gradient-to-b min-h-screen from-[#272727] to-[#020202] pt-30 pb-20 text-center justify-center items-center flex flex-col">
        <div className="text-9xl font-bold poppins text-[#9D85BE]">VOLTVEX</div>{" "}
        <br />
        <div className="text-7xl font-bold poppins text-white">
          Revolutionizing Every Volt.
        </div>
        <br />
        <p className="mt-4 text-lg text-gray-400">
          a decentralized Peer-to-Peer Energy Trading with AI-driven bid
          selection ...
        </p>
      </section>

      {/* prob-sol */}
      <section className="bg-[url('src/assets/bg1.jpeg')] bg-center bg-no-repeat bg-cover min-h-screen relative flex justify-center items-center">
        <div className="bg-black bg-opacity-70 rounded-2xl p-10  max-w-6xl">
          <div className="flex justify-center items-center">
            <img
              src="src/assets/hero_img.jpg "
              alt="Illustration"
              className="h-80 rounded-xl shadow-md"
            />
          </div>
          <div className="flex flex-row mt-10 gap-16 text-white shadow-lg">
            {/* Left: Problems */}
            <div className="w-1/2">
              <h2 className="text-4xl font-extrabold mb-6 poppins">
                ⚠️ Problems in Traditional Energy Trading
              </h2>
              <ul className="list-disc list-inside space-y-4 text-gray-300 text-lg">
                <li>High dependency on centralized authorities</li>
                <li>Limited access for small-scale producers</li>
                <li>Lack of transparency in pricing</li>
                <li>Slow and inefficient energy distribution</li>
                <li>No real-time insights or optimization</li>
              </ul>
            </div>
            {/* Right: Solutions */}
            <div className="w-1/2">
              <h2 className="text-4xl font-extrabold mb-6 poppins text-[#9D85BE]">
                ✅ How VoltVex <br />
                Solves It
              </h2>
              <ul className="list-disc list-inside space-y-4 text-gray-300 text-lg">
                <li>Decentralized peer-to-peer energy marketplace</li>
                <li>Empowers small and individual producers to trade</li>
                <li>Transparent, tamper-proof smart contract system</li>
                <li>
                  Efficient distribution with direct producer-consumer link
                </li>
                <li>
                  AI-driven bid matching ensures fair pricing and faster trades
                </li>
              </ul>
            </div>{" "}
          </div>
        </div>
      </section>

      {/* why us */}
      <section className="bg-gradient-to-b min-h-screen from-[#272727] to-[#020202] pt-50 pb-20">
        <div className="container mx-auto text-left">
          <div className="text-7xl font-bold text-[#8FE489]">Why VOLTVEX?</div>

          <div class="flex mx-auto px-4 py-8 justify-between">
            {/* list items of why us */}
            <div class="flex flex-col items-start p-10">
              <div class="flex items-center mb-4 w-full">
                <div class="bg-[#524760] text-[#9F86C0] rounded-xl w-14 h-14 flex items-center justify-center text-2xl font-bold">
                  01
                </div>
                <div class="ml-4">
                  <h2 class="poppins text-2xl font-semibold">
                    AI-Powered Bid Matching
                  </h2>
                  <p class="text-[#9F86C0]">
                    Smart algorithms ensure optimal buyer-seller matches <br />{" "}
                    with fair, real-time pricing based on demand, supply, <br />{" "}
                    and usage history.
                  </p>
                </div>
              </div>

              {/* hr line */}
              <div className="my-7 flex w-full gap-1">
                <ul className="flex gap-1 items-center">
                  <li className="bg-gray-600 h-1 w-1 rounded"> </li>

                  <li className="bg-gray-600 h-1.5 w-1.5 rounded"> </li>

                  <li className="bg-gray-600 h-2 w-2 rounded"> </li>
                </ul>{" "}
                <hr class="border-gray-600 w-full border-4 rounded-3xl" />
                <ul className="flex gap-1 items-center">
                  <li className="bg-gray-600 h-2 w-2 rounded"> </li>

                  <li className="bg-gray-600 h-1.5 w-1.5 rounded"> </li>

                  <li className="bg-gray-600 h-1 w-1 rounded"> </li>
                </ul>{" "}
              </div>

              <div class="flex items-center mb-4 w-full">
                <div class="bg-[#524760] text-[#9F86C0] rounded-xl w-14 h-14 flex items-center justify-center text-2xl font-bold">
                  02
                </div>
                <div class="ml-4">
                  <h2 class="poppins text-2xl font-semibold">
                    Decentralized Smart Contracts
                  </h2>
                  <p class="text-[#9F86C0] ">
                    Every trade is governed by transparent, tamper-proof <br />{" "}
                    smart contracts — ensuring trust, autonomy & security.
                  </p>
                </div>
              </div>

              {/* hr line */}
              <div className="my-7 flex w-full gap-1">
                <ul className="flex gap-1 items-center">
                  <li className="bg-gray-600 h-1 w-1 rounded"> </li>

                  <li className="bg-gray-600 h-1.5 w-1.5 rounded"> </li>

                  <li className="bg-gray-600 h-2 w-2 rounded"> </li>
                </ul>{" "}
                <hr class="border-gray-600 w-full border-4 rounded-3xl" />
                <ul className="flex gap-1 items-center">
                  <li className="bg-gray-600 h-2 w-2 rounded"> </li>

                  <li className="bg-gray-600 h-1.5 w-1.5 rounded"> </li>

                  <li className="bg-gray-600 h-1 w-1 rounded"> </li>
                </ul>{" "}
              </div>

              <div class="flex items-center w-full">
                <div class="bg-[#524760] text-[#9F86C0] rounded-xl w-14 h-14 flex items-center justify-center text-2xl font-bold">
                  03
                </div>
                <div class="ml-4">
                  <h2 class="poppins text-2xl font-semibold">
                    Peer-to-Peer Energy Exchange
                  </h2>
                  <p class="text-[#9F86C0] ">
                    Producers and consumers can trade electricity directly{" "}
                    <br />
                    without relying on central authorities — reducing costs{" "}
                    <br /> and improving efficiency.
                  </p>
                </div>
              </div>
            </div>

            {/* sys arch */}
            <div class="flex flex-col ml-30 items-center justify-top mt-20">
              <img
                src="src/assets/VoltVex diag.png"
                alt="Aptoverse logo"
                className="h-80 rounded-2xl"
              />
            </div>
          </div>

          <p className="mt-8 text-[#8FE489] font-bold px-4 py-2 rounded text-center">
            START VOLTING NOW !!!
          </p>
        </div>
      </section>

      {/* abt nd CTA */}
      <section className="min-h-screen">
        {/* about */}
        <section className="bg-gradient-to-r from-[#9F86c0] to-[#3B386B] text-white pb-30 pt-35 relative">
          <div className="container mx-auto text-justify flex flex-row ">
            <div className="poppins text-7xl font-bold w-1/2 mt-30">
              About Us
            </div>
            <div className="w-1/2">
              <p className="poppins mt-4 text-lg max-w-2xl">
                VoltVex is a decentralized energy trading platform built to
                empower individuals and communities to exchange electricity
                seamlessly and securely. <br /> <br />
                Combining the power of blockchain technology and AI-driven bid
                optimization, VoltVex eliminates the middleman and unlocks a
                smarter, fairer, and more transparent energy marketplace.
                <br />
                <br />
                Whether you're a small-scale solar producer or a household
                consumer, VoltVex connects you directly — enabling real-time
                energy trade with optimized pricing, secure smart contracts, and
                a vision of sustainable energy democratization.
              </p>
            </div>
          </div>
        </section>
        {/* CTA */}
        <section className="bg-gradient-to-b from-[#272727] to-[#020202] pt-45 pb-45">
          <div className="container mx-auto flex justify-center items-center h-full">
            <button
              className="bg-gradient-to-r from-[#9D85BE] to-[#382668] hover:bg-gradient-to-r hover:from-[#785aa3] hover:to-[#301b69] hover:cursor-pointer text-white text-3xl font-bold m-4 px-10 py-6 rounded-full border-1"
              onClick={handleLoginClick}
            >
              GET STARTED !!
            </button>
          </div>
        </section>
      </section>

      {/* FAQ section */}
      <section className="bg-gradient-to-r from-[#9F86c0] to-[#3B386B] pb-30 px-20 pt-20 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What is VoltVex?",
                a: "VoltVex is a decentralized peer-to-peer energy trading platform enabling local energy producers and consumers to trade electricity securely using blockchain and AI.",
              },
              {
                q: "How does energy trading work on VoltVex?",
                a: "Producers list available energy for sale. Consumers place bids. Once a producer accepts a bid, a smart contract finalizes the transaction, and the trade details are stored on-chain.",
              },
              {
                q: "Who can use VoltVex?",
                a: "Anyone can join: producers (like solar rooftop owners) to sell energy, and consumers who want access to local clean energy at dynamic prices.",
              },
              {
                q: "Is VoltVex built on blockchain?",
                a: "Yes, VoltVex leverages Solidity-based smart contracts to ensure trust, transparency, and traceability in every energy trade transaction.",
              },
              {
                q: "What is the role of AI in VoltVex?",
                a: "AI models assist with optimal pricing predictions, help producers auto-select the best bid based on priority (e.g., highest bid, earliest bid), and forecast demand patterns.",
              },
              {
                q: "What happens after a bid is accepted?",
                a: "Once a bid is accepted, a smart contract is triggered, finalizing the deal on-chain. The listing moves to completed status and is visible in both parties’ dashboards.",
              },
              {
                q: "Is there a wallet or token involved?",
                a: "Currently, VoltVex simulates wallet activity to visualize transaction flow. In future iterations, MetaMask and real token transfers may be integrated.",
              },
            ].map((item, index) => (
              <details
                key={index}
                className="group rounded-xl bg-white/10 backdrop-blur px-6 py-5 transition-all duration-300"
              >
                <summary className="cursor-pointer text-lg font-semibold flex justify-between items-center">
                  {item.q}
                  <span className="ml-2 text-white group-open:rotate-180 transform transition-transform duration-200">
                    ▼
                  </span>
                </summary>
                <p className="mt-3 text-sm text-gray-100 leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

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

export default Home;
