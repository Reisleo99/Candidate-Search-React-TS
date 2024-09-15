import React, { useState, useEffect } from "react";
import { Candidate } from "../interfaces/CandidateInterface.tsx";

const SavedCandidates: React.FC = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedCandidates") || "[]");
    setSavedCandidates(saved);
  }, []);

  const removeCandidate = (username: string) => {
    const updatedCandidates = savedCandidates.filter(candidate => candidate.username !== username);
    setSavedCandidates(updatedCandidates);
    localStorage.setItem("savedCandidates", JSON.stringify(updatedCandidates));
  };

  const filteredCandidates = savedCandidates.filter(candidate =>
    candidate.username?.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <main>
      <h1>Saved Candidates</h1>
      <input
        type="text"
        placeholder="Search candidates by username..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {filteredCandidates.length === 0 ? (
        <p>No saved candidates match the search criteria.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Username</th>
              <th>Location</th>
              <th>Company</th>
              <th>Profile</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {filteredCandidates.map((candidate, index) => (
              <tr key={index}>
                <td>
                  <img src={candidate.avatar_url} alt={candidate.username} width="50" />
                </td>
                <td>{candidate.name || "N/A"}</td>
                <td>{candidate.username}</td>
                <td>{candidate.location || "N/A"}</td>
                <td>{candidate.company || "N/A"}</td>
                <td>
                  <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
                    View Profile
                  </a>
                </td>
                <td>
                  {/* Remove Button */}
                  <button onClick={() => removeCandidate(candidate.username)} className="remove-button">
                  Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
};

export default SavedCandidates;
