import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainLayout from "./layouts/MainLayout.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import VideoDetails from "./components/VideoDetails.jsx";
import RecentActivities from "./pages/RecentActivities.jsx";
import HomePage from "./pages/homepage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/history" element={<RecentActivities />} />
          <Route path="/download" element={<VideoDetails />} />
        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
