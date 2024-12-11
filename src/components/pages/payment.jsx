import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import API_BASE_URL from "../../config/apiConfig";

const PaymentPage = () => {
  const [transactionId, setTransactionId] = useState("");
  var teamName = JSON.parse(localStorage.getItem("teamData")).name;
  const [loading, setLoading] = useState(false);

  // EmailJS configuration
  const serviceID = "service_0nrni1x";
  const templateID = "template_n4s5myd";
  const userID = "3b3sPYto0voKhRyYj";

  // Constant image URL
  const constantImage = "/path/to/your/image.jpg"; // Update with the actual path

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
      console.log("team", teamData);
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

      console.log(templateParams);

      // Send email using EmailJS
      const emailResponse = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        userID
      );
      console.log("Sending PUT request...");
      console.log("teamId:", teamId);
      console.log("paymentStatus:", "pending");
      console.log("token",token);

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

      console.log("Response:", response);

      if (!response.ok) {
        const errorData = await response.json();
        console.log("Error data:", errorData);
        throw new Error(errorData.message || "Failed to update payment status.");
      }

      alert("Form submitted successfully! Payment status updated to pending.");
      resetForm();

    } catch (error) {
      console.error("Error:", error); // Log the full error message
      alert(`An error occurred: ${error.message}`);
    } finally {
      setLoading(false);
    }

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
        <div className="flex justify-center mb-6">
          <img
            src={constantImage}
            alt="Constant Preview"
            className="w-40 h-40 border-4 border-gray-600"
          />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Transaction ID Input */}
          <div>
            <label htmlFor="transactionId" className="block text-gray-300 mb-2">
              Transaction ID
            </label>
            <input
              type="text"
              id="transactionId"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              placeholder="Enter Transaction ID"
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
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-200"
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
