import React from "react";
import { Outlet } from "react-router-dom";
const token = import.meta.env.VITE_GITHUB_TOKEN;

import Nav from "./components/Nav"; // if you have a Nav component

const App: React.FC = () => {
  return (
    <div>
      <Nav />
      <Outlet /> {/* This renders the nested routes */}
    </div>
  );
};

export default App;
