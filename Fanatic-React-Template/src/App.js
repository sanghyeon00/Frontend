import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
// Screens
import Landing from "./screens/Landing.jsx";
import CreateQpage from "./components/Sections/CreateQpage.jsx";
import SolveQpage from "./components/Sections/SolveQpage.jsx";
import Classroom from "./components/Sections/Classroom.jsx";
import TopNavbar from "./components/Nav/TopNavbar.jsx";
import Footer from "./components/Sections/Footer.jsx";
import ProClassroom from "./components/Sections/ProClassroom.jsx";
import Community from "./components/Sections/Community.jsx";
import DiaryPage from "./components/Sections/DiaryPage.jsx";
import FreeCommu from './components/Sections/FreeCommu.jsx';
import Write from './components/Sections/Write.jsx'; // Write를 올바르게 import
import PostDetail from './components/Sections/PostDetail.jsx';
// Member
import Login from "./components/Member/Login.jsx";
import Membership from "./components/Member/Membership.jsx";
import TeacherSingout from "./components/Member/TeacherSingout.jsx";
import StudentSingout from "./components/Member/StudentSingout.jsx";

import { AuthProvider } from "./components/Member/AuthContext.jsx";

export default function App() {
  const [posts, setPosts] = useState([
      { id: 1, title: '게시물1', date: '2024-05-14', author: '이름없음', comments: 0 },
      { id: 2, title: '게시물2', date: '2017-11-20', author: '이름없음', comments: 0 },
      { id: 3, title: '게시물3', date: '2017-11-20', author: '이름없음', comments: 0 },
      { id: 4, title: '게시물4', date: '2017-11-20', author: '이름없음', comments: 0 },
      { id: 5, title: '게시물5', date: '2017-11-20', author: '이름없음', comments: 0 },
      { id: 6, title: '게시물6', date: '2017-11-20', author: '이름없음', comments: 0 },
      { id: 7, title: '게시물7', date: '2017-11-20', author: '이름없음', comments: 0 },
      { id: 8, title: '게시물8', date: '2017-11-20', author: '이름없음', comments: 0 },
      { id: 9, title: '게시물9', date: '2017-11-20', author: '이름없음', comments: 0 },
      { id: 10, title: '게시물10', date: '2017-11-20', author: '이름없음', comments: 0 },
      // 더 많은 게시물...
  ]);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <Router>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>

      <AuthProvider>
        <TopNavbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/community" element={<Community />} />
          <Route path="/create_question" element={<CreateQpage />} />
          <Route path="/solve_question" element={<SolveQpage />} />
          <Route path="/classroom" element={<Classroom />} />
          <Route path="/login" element={<Login />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/teacherSingout" element={<TeacherSingout />} />
          <Route path="/studentSingout" element={<StudentSingout />} />
          <Route path="/diary" element={<DiaryPage />} />
          <Route path="/proClassroom" element={<ProClassroom />} />
          <Route path="/freeCommu" element={<FreeCommu posts={posts} addPost={addPost} />} />
          <Route path="/write" element={<Write addPost={addPost} />} />
          <Route path="/posts/:postId" element={<PostDetail posts={posts} />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  );
}