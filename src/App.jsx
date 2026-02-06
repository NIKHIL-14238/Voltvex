import { ethers } from "ethers";
import { CONTRACT_ABI } from "./contract";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Login from "./components/Login/Login";

import Home from "./components/Home/Home";
import WelcomeHubConsumer from "./components/Consumer/WelcomeHubConsumer";
import DashboardConsumer from "./components/Consumer/DashboardConsumer";
import EnergyHubConsumer from "./components/Consumer/EnergyHubConsumer";
import WelcomeHubProducer from "./components/Producer/WelcomeHubProducer";
import DashboardProducer from "./components/Producer/DashboardProducer";
import EnergyHubProducer from "./components/Producer/EnergyHubProducer";

const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;


async function getContract() {
  if (!window.ethereum) {
    alert("Install MetaMask!");
    return;
  }

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
  return contract;
}

async function handlePlaceBid() {
  const contract = await getContract();
  const description = "Selling 20kWh solar energy";
  const amount = 100;

  try {
    const tx = await contract.placeBid(description, amount);
    await tx.wait();
    alert("✅ Bid placed successfully!");
  } catch (error) {
    console.error("Error placing bid:", error);
    alert("❌ Failed to place bid");
  }
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <button onClick={handlePlaceBid}>Place Bid</button>
              </div>
            </div>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/consumer/welcome" element={<WelcomeHubConsumer />} />
        <Route path="/consumer/dashboard" element={<DashboardConsumer />} />
        <Route path="/consumer/energyhub" element={<EnergyHubConsumer />} />
        <Route path="/producer/dashboard" element={<DashboardProducer />} />
        <Route path="/producer/energyhub" element={<EnergyHubProducer />} />
        <Route path="/producer/welcome" element={<WelcomeHubProducer />} />

      </Routes>
    </Router>
  );
}

export default App;
