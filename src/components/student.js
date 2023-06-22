import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../App.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function Student() {
  const [activeTab, setActiveTab] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const path = window.location.pathname;
      let url = "";
      

      if (path === "/student/profile") {
        url = "http://localhost:8081/students";
        setActiveTab("profile_Setting");
      } else if (path === "/student/grades") {
        url = "http://localhost:8081/course_students";
        setActiveTab("gradesList");
      } else if (path === "/student/course") {
        url = "http://localhost:8081/courses";
        setActiveTab("courseList");
      } else if (path === "/student/enrolcourse") {
        url = "http://localhost:8081/courses";
        setActiveTab("enrolCourse");
      }

      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderContent = () => {
    if (activeTab === "profile_Setting") {
      return (
        <div
          className={`tab-pane fade${
            activeTab === "profile_Setting" ? " show active" : ""
          }`}
          id="profile_Setting"
          role="tabpanel"
          aria-labelledby="profile_Setting_tab"
        >
          <h2>Profile Details:</h2>
          <div className="table">
            <Table bordered variant="dark">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Surname</th>
                  <th>Gender</th>
                  <th>Birthday</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Enrollment Date</th>
                  <th>Faculty</th>
                </tr>
              </thead>
              <tbody>
                {data.map((rowData) => (
                  <tr key={rowData.id}>
                    <td>{rowData.firstname}</td>
                    <td>{rowData.lastname}</td>
                    <td>{rowData.gender}</td>
                    <td>{rowData.birthday}</td>
                    <td>{rowData.username}</td>
                    <td>{rowData.email}</td>
                    <td>{rowData.enrollmentdate}</td>
                    <td>{rowData.studentfaculty.facultyname}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      );
    } else if (activeTab === "gradesList") {
      return (
        <div
          className={`tab-pane fade${
            activeTab === "gradesList" ? " show active" : ""
          }`}
          id="gradesList"
          role="tabpanel"
          aria-labelledby="gradesList_tab"
        >
          <b><h2>Grades and GPA List:</h2></b>
          <div className="tables-container">
            <div className="table-wrapper">
              <h2 >Grade List</h2>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Course ID</th>
                    <th>Course Name</th>
                    <th>Grade</th>
                  </tr>
                </thead>
                <tbody>
                {data.map((rowData) => (
                  <tr key={rowData.id}>
                  
                    <td>{rowData.course.courseid}</td>
                    <td>{rowData.course.coursename}</td>
                    <td>{rowData.grade}</td>
                  </tr>
                  ))}
                </tbody>
              </Table>
            </div>

            <div className="table-wrapper">
              <h2>GPA List</h2>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Average GPA</th>
                  </tr>
                </thead>
                <tbody>
                {data.map((rowData) => (
                  <tr key={rowData.id}>               
                    <td>{rowData.student.gpa}</td>                 
                  </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      );
    } else if (activeTab === "courseList") {
      return (
        <div
          className={`tab-pane fade${
            activeTab === "courseList" ? " show active" : ""
          }`}
          id="courseList"
          role="tabpanel"
          aria-labelledby="courseList_tab"
        >
          <h2>View Courses List:</h2>
          <div className="table">
            <Table bordered variant="dark">
              <thead>
                <tr>
                  <th>Course ID</th>
                  <th>Course Name</th>
                  <th>Credits</th>
                  <th>Capacity</th>
                  <th>Vacancy</th>
                  <th>Faculty</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
              {data.map((rowData) => (
                <tr key={rowData.id}> 
                  <td>{rowData.courseid}</td>
                  <td>{rowData.coursename}</td>
                  <td>{rowData.coursecredits}</td>
                  <td>{rowData.coursecapacity}</td>
                  <td>{rowData.coursevacancy}</td>
                  <td>{rowData.faculty.facultyname}</td>
                  <td>
                    <Button>Enrol</Button>
                  </td>
                </tr>
                 ))}
              </tbody>
            </Table>
          </div>
        </div>
      );
    } else if (activeTab === "enrolCourse") {
      return (
        <div
          className={`tab-pane fade${
            activeTab === "enrolCourse" ? " show active" : ""
          }`}
          id="enrolCourse"
          role="tabpanel"
          aria-labelledby="enrolCourse_tab"
        >
          <h2>Enrolment Status for courses:</h2>
          <div className="table-wrapper">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Course ID</th>
                  <th>Course Name</th>
                  <th>Faculty</th>
                  <th>Enrolment Status</th>
                </tr>
              </thead>
              <tbody>
              {data.map((rowData) => (
                <tr key={rowData.id}> 
                
                  <td>{rowData.courseid}</td>
                  <td>{rowData.coursename}</td>
                  <td>{rowData.faculty.facultyname}</td>
                  <td>{rowData.courseenrollmentstatus.toString()}</td>
                </tr>
                 ))}
              </tbody>
            </Table>
          </div>
        </div>
      );
    }

    return null; // Default case, when activeTab doesn't match any specific tab
  };

  return (
    <div className="account-setting">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-3 mt-5 pr-xl-5">
            <b>
              <h2>Welcome Student</h2>
            </b>

            <ul
              className="nav nav-pills flex-column"
              id="settingTab"
              role="tablist"
            >
              <li
                className={`nav-item${
                  activeTab === "profile_Setting" ? " active" : ""
                }`}
              >
                <a
                  className={`nav-link${
                    activeTab === "profile_Setting" ? " active" : ""
                  }`}
                  onClick={() => fetchData("/student/profile")}
                  href="/student/profile"
                  role="tab"
                  aria-selected={activeTab === "profile_Setting"}
                >
                  <i className="fa fa-user" />
                  Profile
                </a>
              </li>

              <li
                className={`nav-item${
                  activeTab === "gradesList" ? " active" : ""
                }`}
              >
                <a
                  className={`nav-link${
                    activeTab === "gradesList" ? " active" : ""
                  }`}
                  onClick={() => fetchData("/student/grades")}
                  href="/student/grades"
                  role="tab"
                  aria-selected={activeTab === "gradesList"}
                >
                  <i className="fa fa-newspaper" />
                  Grades and GPA
                </a>
              </li>

              <li
                className={`nav-item${
                  activeTab === "courseList" ? " active" : ""
                }`}
              >
                <a
                  className={`nav-link${
                    activeTab === "courseList" ? " active" : ""
                  }`}
                  onClick={() => fetchData("/student/course")}
                  href="/student/course"
                  role="tab"
                  aria-selected={activeTab === "courseList"}
                >
                  <i className="fa fa-book" />
                  View courses
                </a>
              </li>

              <li
                className={`nav-item${
                  activeTab === "enrolCourse" ? " active" : ""
                }`}
              >
                <a
                  className={`nav-link${
                    activeTab === "enrolCourse" ? " active" : ""
                  }`}
                  onClick={() => fetchData("/student/enrolcourse")}
                  href="/student/enrolcourse"
                  role="tab"
                  aria-selected={activeTab === "enrolCourse"}
                >
                  <i className="fa fa-graduation-cap" />
                  Enrolment status for a Course
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  target="_blank"
                  role="tab"
                >
                  <i className="fa fa-sign-out" />
                  Logout
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-9 mt-5">
            <div className="tab-content" id="settingTabContent">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}