import React, { useState, useEffect } from "react";
import API_BASE_URL from "../../config/apiConfig";

const AdminProfile = () => {
  const [team, setTeam] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const localdata = localStorage.getItem("user");
        const user = JSON.parse(localdata);
        const token = user.token;

        const response = await fetch(`${API_BASE_URL}/api/teams`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setTeam(data.team);
        } else {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch team data");
        }
      } catch (err) {
        setError(err.message || "An error occurred");
      }
    };

    fetchTeam();
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center p-6">
      {error && (
        <p className="text-red-500 text-center mb-4">{error}</p>
      )}
      {!team ? (
        <p className="text-gray-300 text-center">Loading team data...</p>
      ) : (
        <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-lg shadow-md">
          {/* Team Details */}
          <h1 className="text-white text-4xl font-bold text-center mb-6">
            Team Profile
          </h1>
          <div className="mb-6">
            <h2 className="text-white text-2xl font-semibold">Team Name:</h2>
            <p className="text-gray-300 text-lg">{team.name}</p>
          </div>

          {/* Members Section */}
          <div className="mb-6">
            <h2 className="text-white text-2xl font-semibold">Members:</h2>
            {team.members.length === 0 ? (
              <p className="text-gray-300 text-lg">No members added yet.</p>
            ) : (
              <ul className="space-y-4">
                {team.members.map((member) => (
                  <li
                    key={member._id}
                    className="bg-gray-700 p-4 rounded-md text-gray-300"
                  >
                    <p>
                      <strong>Name:</strong> {member.name}
                    </p>
                    <p>
                      <strong>Email:</strong> {member.email}
                    </p>
                    <p>
                      <strong>Phone:</strong> {member.phone}
                    </p>
                    <p>
                      <strong>University Roll No.:</strong>{" "}
                      {member.universityRollNo}
                    </p>
                    <p>
                      <strong>Codeforces Handle:</strong>{" "}
                      {member.codeforceHandle}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Payment Status */}
          <div>
            <h2 className="text-white text-2xl font-semibold">
              Payment Status:
            </h2>
            {team.payment && team.payment.status ? (
              <p
                className={`text-lg font-bold ${
                  team.payment.status === "accepted"
                    ? "text-green-400"
                    : team.payment.status === "pending"
                    ? "text-blue-400"
                    : "text-red-400"
                }`}
              >
                {team.payment.status.toUpperCase()}
              </p>
            ) : (
              <p className="text-gray-300 text-lg">
                Payment details not available.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProfile;
