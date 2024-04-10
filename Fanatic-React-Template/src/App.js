import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
// Screens
import Landing from "./screens/Landing.jsx";
import CreateQpage from "./components/Sections/CreateQpage.jsx";
import Classroom from "./components/Sections/Classroom.jsx";
import TopNavbar from "./components/Nav/TopNavbar.jsx";

//Member
import Login from "./components/Member/Login.jsx";
import Membership from "./components/Member/Membership.jsx"

export default function App() {
  return (
    <Router>
      <>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
        </Helmet>
        <TopNavbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create_question" element={<CreateQpage />}/>
          <Route path="/classroom" element={<Classroom />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/membership" element={<Membership />}/>
        </Routes>
      </>
    </Router>
  );
}

