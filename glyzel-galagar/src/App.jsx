import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CustomCursor } from "./components/feedback/CustomCursor.jsx";
import Home from "./pages/Home.jsx";
import ProjectDetailPage from "./pages/ProjectDetail.jsx";

export default function App() {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      </Routes>
    </>
  );
}
