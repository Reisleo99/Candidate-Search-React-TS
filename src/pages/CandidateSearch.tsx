import React, { useEffect, useState } from "react";
import { searchGithub, searchGithubUser } from "../api/API";

const CandidateSearch: React.FC = () => {
  const [candidate, setCandidate] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch initial candidate data when the component loads
    const fetchCandidate = async () => {
      try {
        const data = await searchGithub("developer");
        setCandidate(data.items[0]); // assuming items is part of the API response
      } catch (err) {
        setError("Failed to fetch candidate");
      }
    };
    fetchCandidate();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!candidate) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <h1>{candidate.login}</h1>
      <img src={candidate.avatar_url} alt={candidate.login} width="150" />
      <p>Location: {candidate.location || "N/A"}</p>
      <p>Company: {candidate.company || "N/A"}</p>
      <p>
        Profile: <a href={candidate.html_url}>{candidate.html_url}</a>
      </p>
      <div>
        <button className="accept-btn">+</button>
        <button className="reject-btn">-</button>
      </div>
    </main>
  );
};

export default CandidateSearch;
