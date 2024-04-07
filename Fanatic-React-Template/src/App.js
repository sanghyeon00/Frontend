import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
// Screens
import Landing from "./screens/Landing.jsx";
import CreateQpage from "./components/Sections/CreateQpage.jsx";
import Classroom from "./components/Sections/Classroom.jsx";
// Top Navbar Component
import TopNavbar from "./components/Nav/TopNavbar"; // TopNavbar 컴포넌트 경로에 따라 수정해주세요.

export default function App() {
  return (
    <Router>
      <>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
        </Helmet>
        <TopNavbar /> {/* 모든 페이지 상단에 TopNavbar 컴포넌트를 표시 */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create_question" element={<CreateQpage />}/>
          <Route path="/classroom" element={<Classroom />}/>
        </Routes>
      </>
    </Router>
  );
}
