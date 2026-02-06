import { useNavigate } from "react-router";

function WelcomeHubProducer() {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/producer/dashboard"); // Adjust based on role if needed
  };

  const goToEnergyHub = () => {
    navigate("/producer/energyhub"); // Adjust based on role if needed
  };

  return (
    <div className="text-white">
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

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#272727] to-[#020202] pt-30 pb-10 text-center justify-center items-center flex flex-col">
        <div className="text-6xl font-bold poppins mb-5 text-[#9D85BE]">
          Welcome <span className="font-mono"> Producer</span>
        </div>
        <div className="text-5xl font-bold poppins text-white mb-10">to</div>
        <div className="text-9xl font-extrabold text-[#85be93]">VoltVex</div>
      </section>

      {/* Utils Section */}
      <section className="bg-gradient-to-r from-[#9F86c0] to-[#3B386B] px-20 py-50 text-white min-h-[40vh] flex flex-col sm:flex-row items-start justify-center gap-x-20 gap-y-10">
        {/* Left Side: Text */}
        <div className="text-left max-w-sm">
          <h2 className="text-5xl font-bold poppins mt-10">Quick Actions</h2>
        </div>

        {/* Right Side: Buttons stacked */}
        <div className="flex flex-col gap-4">
          <button
            onClick={goToDashboard}
            className="px-8 py-4 bg-[#121212] text-white border-white border-2 font-bold rounded-xl hover:bg-[#1f1f1f] transition-all duration-300 text-lg shadow-lg hover:scale-105"
          >
            Go to Dashboard
          </button>
          <button
            onClick={goToEnergyHub}
            className="px-8 py-4 bg-[#121212] text-white border-white border-2 font-bold rounded-xl hover:bg-[#1f1f1f] transition-all duration-300 text-lg shadow-lg hover:scale-105"
          >
            Visit Energy Hub
          </button>
        </div>
      </section>

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

export default WelcomeHubProducer;
