import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useHistory } from "react-router";
import StudentLogin from "./components/studentLogin";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { baseUrl } from "./api/url";
import Student from "./components/student";
import LandingPage from "./components/landingPage";

export default function App() {
  const [token, setToken] = useState("");

  let loginUser = () => {
    if (localStorage.getItem("accessToken")) {
      const getUser = async () => {
        try {
          const response = await axios.get(baseUrl + "students", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          });
          localStorage.setItem("username", response.data.username);
          setToken(localStorage.getItem("accessToken"));
        } catch (error) {
          console.log(error);
        }
      };
      getUser();
    }
  };

  useEffect(() => {
    loginUser();
  }, []);

  return (
    <Router>
      <nav className="flex items-center justify-between bg-gray-700 lg:px-3 shadow border-solid">
        <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pr-2 pb-1 lg:pb-0">
          <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
            <span className="font-semibold text-xl tracking-tight">
              <a href="/">
                <img
                  src="https://p2.hiclipart.com/preview/630/591/779/computer-technology-icon-tv-icon-monitor-icon-course-skill-education-distance-education-personal-computer-operating-system-microsoft-office-specialist-png-clipart.jpg"
                  style={{
                    width: "180px",
                    textAlign: "right",
                    paddingLeft: "80px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                  alt="Logo"
                />
              </a>
              <h1 style={{ color: "white" }} className="text-left pb-2 ml-2">
                Course Application Processing System
              </h1>
            </span>
          </div>
        </div>

        <div className="menu w-full flex-grow sm:flex sm:items-center sm:w-auto sm:px-3 px-3 pb-3">
          <div className="text-md font-bold text-gray-100 lg:flex-grow d-flex justify-items-end">
            <a
              href="/students"
              className="block mt-4 lg:inline-block lg:mt-0 px-2 py-2 mr-2 transition transform hober:fixed hover:-translate-y-1 hover:bg-gray-600 hover:border hover:rounded-xl motion-reduce:transition-none motion-reduce:transform-none"
            >
              Manage Students
            </a>
            <a
              href="/lecturers"
              className="block mt-4 lg:inline-block lg:mt-0 px-2 py-2 mr-2 transition transform hover:-translate-y-1 hover:bg-gray-600 hover:border hover:rounded-xl motion-reduce:transition-none motion-reduce:transform-none"
            >
              Manage Lecturers
            </a>
            <a
              href="/courses"
              className="block mt-4 lg:inline-block lg:mt-0 px-2 py-2 mr-2 transition transform hover:-translate-y-1 hover:bg-gray-600 hover:border hover:rounded-xl motion-reduce:transition-none motion-reduce:transform-none"
            >
              Manage Courses
            </a>
            <a
              href="/enrolment"
              className="block mt-4 lg:inline-block lg:mt-0 px-2 py-2 mr-2 transition transform hover:-translate-y-1 hover:bg-gray-600 hover:border hover:rounded-xl motion-reduce:transition-none motion-reduce:transform-none"
            >
              Manage Enrolment
            </a>
          </div>

          <div className="flex">
            <div className="block text-md px-4 py-2 my-3 text-gray-100 ml-2 font-bold lg:mt-0"></div>

            <a
              href="/student"
              className="block text-md px-4 py-2 rounded text-gray-100 ml-2 font-bold mt-4 lg:mt-0 transition transform hover:-translate-y-1 hover:bg-gray-600 hover:border hover:rounded-xl motion-reduce:transition-none motion-reduce:transform-none"
            >
              Admin Login
            </a>
            <a
              href="/student/login"
              className="block text-md px-4 py-2 rounded text-gray-100 ml-2 font-bold mt-4 lg:mt-0 transition transform hover:-translate-y-1 hover:bg-gray-600 hover:border hover:rounded-xl motion-reduce:transition-none motion-reduce:transform-none"
            >
              Student Login
            </a>
            <a
              href="/lecturer/login"
              className="block text-md px-4 py-2 rounded text-gray-100 ml-2 font-bold mt-4 lg:mt-0 transition transform hover:-translate-y-1 hover:bg-gray-600 hover:border hover:rounded-xl motion-reduce:transition-none motion-reduce:transform-none"
            >
              Lecturer Login
            </a>
          </div>
        </div>
      </nav>
      <ToastContainer autoClose={3000} limit={5} />
      <div className="fixed-bg bg-1">
    

      <Routes>
        {/* Home route */}
        <Route exact path="/" element={<LandingPage/>} />

        <Route exact path="/admin/login">
          {/* <WallBedListing /> */}
        </Route>

        <Route
          exact
          path="/student/login"
          element={<StudentLogin setLoginUser={loginUser} />}
        />

        <Route exact path="/lecturer/login">
          {/* <LogoutPage /> */}
        </Route>

        <Route exact path="/users/account">
          {/* <UserPage /> */}
        </Route>

        <Route path="/student" element={<Student />} />

        <Route
          path="/student/profile"
          element={<Student activeTab="profile_Setting" />}
        />
        <Route
          path="/student/grades"
          element={<Student activeTab="gradesList" />}
        />
        <Route
          path="/student/course"
          element={<Student activeTab="courseList" />}
        />
        <Route
          path="/student/enrolcourse"
          element={<Student activeTab="enrolCourse" />}
        />

        <Route exact path="/successPurchase">
          {/* <SuccessfulPayment /> */}
        </Route>
      </Routes>
      </div>
      <div className="fixed-bg bg-2"></div>
    </Router>
  );
}
