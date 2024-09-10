import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

interface Candidate {
  name: string;
  username: string;
  location: string;
  avatar_url: string;
  email: string;
  html_url: string;
  company: string;
}

const CandidateSearch: React.FC = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [candidatesQueue, setCandidatesQueue] = useState<Candidate[]>([]);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  // Fetch candidates from GitHub API
  const fetchCandidate = async () => {
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=location:your-location`,
        { headers: { Authorization: `token ${token}` } }
      );
      const candidates = response.data.items.map((user: any) => ({
        name: user.name,
        username: user.login,
        location: user.location,
        avatar_url: user.avatar_url,
        email: user.email,
        html_url: user.html_url,
        company: user.company
      }));
      setCandidatesQueue(candidates);
      setCandidate(candidates[0]);
    } catch (error) {
      console.error("Error fetching candidates:", error);
    }
  };

  useEffect(() => {
    fetchCandidate();
  }, []);

  const saveCandidate = () => {
    if (candidate) {
      setSavedCandidates([...savedCandidates, candidate]);
      nextCandidate();
      localStorage.setItem("savedCandidates", JSON.stringify([...savedCandidates, candidate]));
    }
  };

  const nextCandidate = () => {
    const next = candidatesQueue.shift();
    if (next) setCandidate(next);
    else setCandidate(null); // No more candidates
  };

  return (
    <div>
      {candidate ? (
        <div>
          <img src={candidate.avatar_url} alt={candidate.name} />
          <h2>{candidate.name}</h2>
          <p>{candidate.username}</p>
          <p>{candidate.location}</p>
          <p>{candidate.company}</p>
          <p>{candidate.email}</p>
          <a href={candidate.html_url}>GitHub Profile</a>
          <button onClick={saveCandidate}>+</button>
          <button onClick={nextCandidate}>-</button>
        </div>
      ) : (
        <p>No more candidates available</p>
      )}
    </div>
  );
};

export default CandidateSearch;
