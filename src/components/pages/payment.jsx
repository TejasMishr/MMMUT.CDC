import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import API_BASE_URL from "../../config/apiConfig";

const PaymentPage = () => {
  const [transactionId, setTransactionId] = useState("");
  var teamName = JSON.parse(localStorage.getItem("teamData")).name;
  const [loading, setLoading] = useState(false);
  const [copiedText, setCopiedText] = useState("");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(""), 2000); 
  };

  // EmailJS configuration
  const serviceID = "service_4401q79";
  const templateID = "template_k024fij";
  const userID = "6SYFkuz4yz71tbNLR";

  // Constant image URL
  const constantImage = "./payment/qr.png"; // Update with the actual path

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!transactionId || !teamName) {
      alert("Please provide both Transaction ID and Team Name.");
      return;
    }

    setLoading(true);

    try {
      const token = JSON.parse(localStorage.getItem("user"))?.token;

      // Fetch the team ID based on team name
      const teamResponse = await fetch(`${API_BASE_URL}/api/teams?name=${teamName}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!teamResponse.ok) {
        const errorData = await teamResponse.json();
        throw new Error(errorData.message || "Team not found.");
      }

      const teamData = await teamResponse.json();
     
      const teamId = teamData.team._id;
      // const teamId = JSON.parse(localStorage.getItem("user")).userId;

      if (!teamId) {
        throw new Error("Team ID could not be retrieved.");
      }

      // EmailJS template parameters
      const templateParams = {
        transaction_id: transactionId,
        team_name: teamName,
      };

   

      // Send email using EmailJS
      const emailResponse = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        userID
      );
  

      const response = await fetch(`${API_BASE_URL}/api/teams/paymentStatus`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          teamId,
          paymentStatus: "pending",
        }),
      });

  

      if (!response.ok) {
        const errorData = await response.json();
       
        throw new Error(errorData.message || "Failed to update payment status.");
      }

      alert("Form submitted successfully! Payment status updated to pending.");
      resetForm();
      setTimeout(() => navigate('/createTeam'), 2000);

    } catch (error) {
      console.error("Error:", error); // Log the full error message
      alert(`An error occurred: ${error.message}`);
    } finally {
      setLoading(false);
    }
    window.location.href = '/createTeam';

  };

  const resetForm = () => {
    setTransactionId("");
    teamName = "";
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl text-white mb-4">Payment Form</h1>

        {/* Display constant image */}
        <div className="flex justify-center mb-2">
          <img
            src={constantImage}
            alt="Constant Preview"
            className="w-40 h-40 border-4 border-gray-600"
          />
        </div>
        <div className="bg-gray-800 text-white p-4 rounded-md shadow-lg flex flex-col items-center">
        <p className="text-lg font-semibold mb-2">Account Details</p>
        <p className="mb-1">
          Account Holder: <span className="font-medium">Ayush Sharma</span>
        </p>
        <p className="mb-1 flex items-center">
          ACC No.: 
          <span className="font-medium ml-2">41441152413</span>
          <button
            onClick={() => copyToClipboard("41441152413")}
            className="ml-2 text-gray-400 text-lg hover:text-white"
            title="Copy Account Number"
          >
            📋
          </button>
        </p>
        <p className="mb-1 flex items-center">
          IFSC: 
          <span className="font-medium ml-2">SBIN0002578</span>
          <button
            onClick={() => copyToClipboard("SBIN0002578")}
            className="ml-2 text-gray-400 text-lg hover:text-white"
            title="Copy IFSC Code"
          >
            📋
          </button>
        </p>
        {copiedText && (
          <p className="text-green-400 mt-2">Copied: {copiedText}</p>
        )}
      </div>
  
  
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-2">
          {/* Transaction ID Input */}
          <div>
            <label htmlFor="transactionId" className="block text-gray-300 mb-2">
              Transaction ID or UTR
            </label>
            <input
              type="text"
              id="transactionId"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              placeholder="Enter Transaction ID or UTR"
              className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-md"
              required
            />
          </div>

          {/* Team Name Input */}
          <div>
            <label className="block text-gray-300 mb-2">Team Name</label>
            <div className="w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-md">
              {teamName || "Team Name Not Found"}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-lg hover:bg-blue-700 text-white font-semibold rounded-md transition duration-200"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;