import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { FaEthereum } from "react-icons/fa";
import { toast } from "react-toastify";

const Login = () => {
  const [selectedRole, setSelectedRole] = useState("Producer");
  const [walletConnected, setWalletConnected] = useState(false);
  const [account, setAccount] = useState("");
  const navigate = useNavigate();

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);
        setWalletConnected(true);
        toast.success("Wallet connected!");
      } catch (error) {
        console.error(error);
        toast.error("Wallet connection failed");
      }
    } else {
      toast.error("Please install MetaMask!");
    }
  };

  const handleLogin = () => {
    if (!walletConnected || !account) {
      toast.warn("Connect your wallet first");
      return;
    }
    if (selectedRole === "Producer") navigate("/producer/welcome");
    else navigate("/consumer/welcome");
  };

  useEffect(() => {
    const checkConnection = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          setWalletConnected(true);
        }
      }
    };
    checkConnection();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#272727] to-[#020202] flex items-center justify-center px-4">
      <div className="bg-[#1F1F1F] bg-opacity-80 rounded-2xl shadow-2xl p-8 max-w-xl w-full border border-[#333]">
        <div className="text-center mb-6">
        <img
              src="src/assets/vv3.png"
              alt="VoltVex logo"
              className="h-16 mx-auto"
            />

          <h1 className="text-3xl font-bold text-[#9D85BE]">VoltVex Login</h1>
          <p className="text-gray-400 mt-1">Trade smarter with P2P energy</p>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-1">Select Role</label>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="w-full bg-[#272727] border border-[#444] text-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#9D85BE]"
          >
            <option value="Producer">Producer</option>
            <option value="Consumer">Consumer</option>
          </select>
        </div>

        <div className="mb-4 text-center">
          <button
            onClick={connectWallet}
            className="w-full bg-gradient-to-r from-[#9D85BE] to-[#382668] hover:from-[#785aa3] hover:to-[#301b69] text-white font-semibold py-2 rounded-full transition duration-300"
          >
            {walletConnected ? "Wallet Connected" : "Connect Wallet"}
          </button>
          {walletConnected && (
            <p className="text-sm text-gray-400 mt-2 break-words">{account}</p>
          )}
        </div>

        <div>
          <button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-[#9D85BE] to-[#382668] hover:from-[#785aa3] hover:to-[#301b69] text-white font-semibold py-2 rounded-full transition duration-300"
          >
            Login as {selectedRole}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
