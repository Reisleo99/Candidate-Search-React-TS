import React, { useEffect, useState } from "react";
import { Candidate } from "../interfaces/CandidateInterface.tsx";
import axios from "axios";

const CandidateSearch: React.FC = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [candidatesQueue, setCandidatesQueue] = useState<Candidate[]>([]);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCandidate = async () => {
      const token = import.meta.env.VITE_GITHUB_TOKEN;
      try {
        const response = await axios.get(
          `https://api.github.com/search/users?q=location:your-location`,
          { headers: { Authorization: `token ${token}` } }
        );
        const candidates = response.data.items.map((user: any) =>
          ({
          name: user.name,
          username: user.login,
          location: user.location,
          avatar_url: user.avatar_url,
          email: user.email,
          html_url: user.html_url,
          company: user.company,
        }));
        setCandidatesQueue(candidates);
        setCandidate(candidates[0]);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };
    fetchCandidate();
  }, []);

  const saveCandidate = () => {
    if (candidate) {
      const updatedSaved = [...savedCandidates, candidate];
      setSavedCandidates(updatedSaved);
      localStorage.setItem("savedCandidates", JSON.stringify(updatedSaved));
      nextCandidate(); // Show the next candidate after saving
    }
  };

  const nextCandidate = () => {
    const next = candidatesQueue.shift();
    if (next) setCandidate(next);
    else setCandidate(null); // No more candidates
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!candidate) {
    return <div>No more candidates available.</div>;
  }

  return (
    <main>
      <div>
        <img src={candidate.avatar_url} alt={candidate.username} width="150" />
        <h2>{candidate.name || "N/A"}</h2>
        <p>Username: {candidate.username}</p>
        <p>Location: {candidate.location || "N/A"}</p>
        <p>Company: {candidate.company || "N/A"}</p>
        <p>{candidate.email}</p>
        <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
          View Profile
        </a>
        <div>
          <button className="accept-btn" onClick={saveCandidate}>
            +
          </button>
          <button className="reject-btn" onClick={nextCandidate}>
            -
          </button>
        </div>
      </div>
    </main>
  );
};

export default CandidateSearch;
