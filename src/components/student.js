import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../App.css";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';

export default function Student() {
  const [activeTab, setActiveTab] = useState("");

  return (
    <div className="account-setting">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-3 pr-xl-5">
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
                  onClick={() => setActiveTab("profile_Setting")}
                  href="#profile_Setting"
                  role="tab"
                  aria-selected="true"
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
                  onClick={() => setActiveTab("gradesList")}
                  href="#gradesList"
                  role="tab"
                >
                  <i className="fa fa-shopping-bag" />
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
                  onClick={() => setActiveTab("courseList")}
                  href="#courseList"
                  role="tab"
                >
                  <i className="fa fa-shopping-bag" />
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
                  onClick={() => setActiveTab("enrolCourse")}
                  href="#enrolCourse"
                  role="tab"
                >
                  <i className="fa fa-map-marker" />
                  Enrolment status for a Course
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#" target="_blank" role="tab">
                  <i className="fa fa-sign-out" />
                  Logout
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-9">
            <div className="tab-content" id="settingTabContent">
              <div
                className={`tab-pane fade${
                  activeTab === "profile_Setting" ? " show active" : ""
                }`}
                id="profile_Setting"
                role="tabpanel"
                aria-labelledby="profile_Setting_tab"
              >
                <h2>Profile Details: </h2>
                <div className="table">
                  <Table bordered variant="dark">
                    <thead>
                      <tr>
                        <th>F.Name</th>
                        <th>L.Name</th>
                        <th>Gender</th>
                        <th>Birthday</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>GPA</th>
                        <th>Enrol Date</th>
                        <th>Faculty</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {this.state.data.map((rowData) => ( */}
                      <tr>
                        <td>Exp1</td>
                        <td>Exp2</td>
                        <td>Exp3</td>
                        <td>Exp4</td>
                        <td>Exp5</td>
                        <td>Exp6</td>
                        <td>Exp7</td>
                        <td>Exp8</td>
                        <td>Exp9</td>
                      </tr>
                      {/* ))} */}
                    </tbody>
                  </Table>
                </div>
              </div>

              <div
                className={`tab-pane fade${
                  activeTab === "gradesList" ? " show active" : ""
                }`}
                id="gradesList"
                role="tabpanel"
                aria-labelledby="gradesList_tab"
              >
                <h2>Grades and GPA List: </h2>
                <div className="tables-container">
                  <div className="table-wrapper">
                    <h1>Grade List</h1>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Module ID</th>
                          <th>Module Name</th>
                          <th>Grade</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* {gradeData.map((grade) => ( */}
                        <tr>
                          {/* <tr key={grade.id}> */}
                          <td>ex1</td>
                          <td>ex2</td>
                          <td>grade</td>
                        </tr>
                        {/* ))} */}
                      </tbody>
                    </Table>
                  </div>

                  <div className="table-wrapper">
                    <h1>GPA List</h1>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Course ID</th>
                          <th>Course Name</th>
                          <th>GPA</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* {gpaData.map((gpa) => ( */}
                        <tr>
                          {/* <tr key={gpa.id}> */}
                          <td>ex1</td>
                          <td>ex1</td>
                          <td>ex1</td>
                        </tr>
                        {/* ))} */}
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>

              <div
                className={`tab-pane fade${
                  activeTab === "courseList" ? " show active" : ""
                }`}
                id="courseList"
                role="tabpanel"
                aria-labelledby="courseList_tab"
              >
                <h2>View Courses List: </h2>
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
                      {/* {this.state.data.map((rowData) => ( */}
                      <tr>
                        <td>Exp1</td>
                        <td>Exp2</td>
                        <td>Exp3</td>
                        <td>Exp4</td>
                        <td>Exp5</td>
                        <td>Exp6</td>
                        <td><Button>Enrol</Button></td>                
                      </tr>
                      {/* ))} */}
                    </tbody>
                  </Table>
                </div>
              </div>

              <div
                className={`tab-pane fade${
                  activeTab === "enrolCourse" ? " show active" : ""
                }`}
                id="enrolCourse"
                role="tabpanel"
                aria-labelledby="enrolCourse_tab"
              >
                <h2>Enrolment Status for courses: </h2>
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
                      {/* {this.state.data.map((rowData) => ( */}
                      <tr>
                        <td>Exp1</td>
                        <td>Exp2</td>
                        <td>Exp3</td>
                        <td>Exp4</td>             
                      </tr>
                      {/* ))} */}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
