// import React, { useState, useEffect, fetchData} from "react";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "../App.css";
// import Table from "react-bootstrap/Table";
// import Button from 'react-bootstrap/Button';
// import axios from "axios";

// export default function Student() {
//   const [activeTab, setActiveTab] = useState("");
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const path = window.location.pathname;
//     fetchData(path);
//   }, []);

//   // Base url
//   const url = "http://localhost:8081/";

//   // Fetch student profile data
//   const fetchProfileData = async () => {
//     try {
//       const response = await axios.get(url + "students");
//       setData(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // Fetch grades data
//   const fetchGradesData = async () => {
//     try {
//       const response = await axios.get(url + "course");
//       setData(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // Fetch GPA data
//   const fetchGPAData = async () => {
//     try {
//       const response = await axios.get(url + "student");
//       setData(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // Fetch course list data
//   const fetchCourseListData = async () => {
//     try {
//       const response = await axios.get(url + "course");
//       setData(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // Fetch enrolment status data
//   const fetchEnrolmentStatusData = async () => {
//     try {
//       const response = await axios.get(url + "course");
//       setData(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const fetchData = (path) => {
//     if (path === "/student/profile") {
//       fetchProfileData();
//       setActiveTab("profile_Setting");
//     } else if (path === "/student/grades") {
//       fetchGradesData();
//       fetchGPAData();
//       setActiveTab("gradesList");
//     } else if (path === "/student/course") {
//       fetchCourseListData();
//       setActiveTab("courseList");
//     } else if (path === "/student/enrolcourse") {
//       fetchEnrolmentStatusData();
//       setActiveTab("enrolCourse");
//     }
//   };

//   const renderContent = () => {
//     if (activeTab === "profile_Setting") {
//       return (
//         <div
//           className={`tab-pane fade${
//             activeTab === "profile_Setting" ? " show active" : ""
//           }`}
//           id="profile_Setting"
//           role="tabpanel"
//           aria-labelledby="profile_Setting_tab"
//         >
//           <h2>Profile Details: </h2>
//           <div className="table">
//             <Table bordered variant="dark">
//               <thead>
//                 {/* Table headers */}
//                 <tr>
//                         <th>F.Name</th>
//                         <th>L.Name</th>
//                         {/* <th>Gender</th>
//                         <th>Birthday</th>
//                         <th>Username</th>
//                         <th>Email</th>
//                         <th>GPA</th>
//                         <th>Enrol Date</th>
//                         <th>Faculty</th> */}
//                       </tr>
//               </thead>
//               <tbody>
//                 {/* Render profile data */}
//                 {data.map((rowData) => (
//                    <tr key={rowData.id}>

//                     {/* Render profile data fields */}
//                         <td>rowData.firstname</td>
//                         <td>rowData.lastname</td>
//                         {/* <td>Exp3</td>
//                         <td>Exp4</td>
//                         <td>Exp5</td>
//                         <td>Exp6</td>
//                         <td>Exp7</td>
//                         <td>Exp8</td>
//                         <td>Exp9</td> */}
//                   </tr>
//                  ))}
//               </tbody>
//             </Table>
//           </div>
//         </div>
//       );
//     } else if (activeTab === "gradesList") {
//       return (
//         <div
//           className={`tab-pane fade${
//             activeTab === "gradesList" ? " show active" : ""
//           }`}
//           id="gradesList"
//           role="tabpanel"
//           aria-labelledby="gradesList_tab"
//         >
//           <h2>Grades and GPA List: </h2>
//           <div className="tables-container">
//                   <div className="table-wrapper">
//                     <h1>Grade List</h1>
//                     <Table striped bordered hover>
//                       <thead>
//                         <tr>
//                           <th>Module ID</th>
//                           <th>Module Name</th>
//                           <th>Grade</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {/* {gradeData.map((grade) => ( */}
//                         <tr>
//                           {/* <tr key={grade.id}> */}
//                           <td>ex1</td>
//                           <td>ex2</td>
//                           <td>grade</td>
//                         </tr>
//                         {/* ))} */}
//                       </tbody>
//                     </Table>
//                   </div>

//                   <div className="table-wrapper">
//                     <h1>GPA List</h1>
//                     <Table striped bordered hover>
//                       <thead>
//                         <tr>
//                           <th>Course ID</th>
//                           <th>Course Name</th>
//                           <th>GPA</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {/* {gpaData.map((gpa) => ( */}
//                         <tr>
//                           {/* <tr key={gpa.id}> */}
//                           <td>ex1</td>
//                           <td>ex1</td>
//                           <td>ex1</td>
//                         </tr>
//                         {/* ))} */}
//                       </tbody>
//                     </Table>
//                   </div>
//                 </div>
//         </div>
//       );
//     } else if (activeTab === "courseList") {
//       return (
//         <div
//           className={`tab-pane fade${
//             activeTab === "courseList" ? " show active" : ""
//           }`}
//           id="courseList"
//           role="tabpanel"
//           aria-labelledby="courseList_tab"
//         >
//           <h2>View Courses List: </h2>
//           <div className="table">
//           <Table bordered variant="dark">
//                     <thead>
//                       <tr>
//                         <th>Course ID</th>
//                         <th>Course Name</th>
//                         <th>Credits</th>
//                         <th>Capacity</th>
//                         <th>Vacancy</th>
//                         <th>Faculty</th>
//                         <th></th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {/* {this.state.data.map((rowData) => ( */}
//                       <tr>
//                         <td>Exp1</td>
//                         <td>Exp2</td>
//                         <td>Exp3</td>
//                         <td>Exp4</td>
//                         <td>Exp5</td>
//                         <td>Exp6</td>
//                         <td><Button>Enrol</Button></td>
//                       </tr>
//                       {/* ))} */}
//                     </tbody>
//                   </Table>
//                 </div>
//         </div>
//       );
//     } else if (activeTab === "enrolCourse") {
//       return (
//         <div
//           className={`tab-pane fade${
//             activeTab === "enrolCourse" ? " show active" : ""
//           }`}
//           id="enrolCourse"
//           role="tabpanel"
//           aria-labelledby="enrolCourse_tab"
//         >
//           <h2>Enrolment Status for courses: </h2>
//           <div className="table-wrapper">
//                 <Table striped bordered hover>
//                     <thead>
//                       <tr>
//                         <th>Course ID</th>
//                         <th>Course Name</th>
//                         <th>Faculty</th>
//                         <th>Enrolment Status</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {/* {this.state.data.map((rowData) => ( */}
//                       <tr>
//                         <td>Exp1</td>
//                         <td>Exp2</td>
//                         <td>Exp3</td>
//                         <td>Exp4</td>
//                       </tr>
//                       {/* ))} */}
//                     </tbody>
//                   </Table>
//                 </div>
//             </div>
//       );
//     }

//     return null; // Default case, when activeTab doesn't match any specific tab
//   };

//   return (
//     <div className="account-setting">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-3 mb-3 pr-xl-5">
//             <b>
//               <h2>Welcome Student</h2>
//             </b>

//             <ul
//               className="nav nav-pills flex-column"
//               id="settingTab"
//               role="tablist"
//             >
//               <li
//                 className={`nav-item${
//                   activeTab === "profile_Setting" ? " active" : ""
//                 }`}
//               >
//                 <a
//                   className={`nav-link${
//                     activeTab === "profile_Setting" ? " active" : ""
//                   }`}
//                   onClick={() => fetchData("/student/profile")}
//                   href="/student/profile"
//                   role="tab"
//                   aria-selected={activeTab === "profile_Setting"}
//                 >
//                   <i className="fa fa-user" />
//                   Profile
//                 </a>
//               </li>

//               <li
//                 className={`nav-item${
//                   activeTab === "gradesList" ? " active" : ""
//                 }`}
//               >
//                 <a
//                   className={`nav-link${
//                     activeTab === "gradesList" ? " active" : ""
//                   }`}
//                   onClick={() => fetchData("/student/grades")}
//                   href="/student/grades"
//                   role="tab"
//                   aria-selected={activeTab === "gradesList"}
//                 >
//                   <i className="fa fa-newspaper" />
//                   Grades and GPA
//                 </a>
//               </li>

//               <li
//                 className={`nav-item${
//                   activeTab === "courseList" ? " active" : ""
//                 }`}
//               >
//                 <a
//                   className={`nav-link${
//                     activeTab === "courseList" ? " active" : ""
//                   }`}
//                   onClick={() => fetchData("/student/course")}
//                   href="/student/course"
//                   role="tab"
//                   aria-selected={activeTab === "courseList"}
//                 >
//                   <i className="fa fa-book" />
//                   View courses
//                 </a>
//               </li>

//               <li
//                 className={`nav-item${
//                   activeTab === "enrolCourse" ? " active" : ""
//                 }`}
//               >
//                 <a
//                   className={`nav-link${
//                     activeTab === "enrolCourse" ? " active" : ""
//                   }`}
//                   onClick={() => fetchData("/student/enrolcourse")}
//                   href="/student/enrolcourse"
//                   role="tab"
//                   aria-selected={activeTab === "enrolCourse"}
//                 >
//                   <i className="fa fa-graduation-cap" />
//                   Enrolment status for a Course
//                 </a>
//               </li>

//               <li className="nav-item">
//                 <a className="nav-link" href="/student" target="_blank" role="tab">
//                   <i className="fa fa-sign-out" />
//                   Logout
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className="col-md-9">
//             <div className="tab-content" id="settingTabContent">
//               {renderContent()}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

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
        url = "http://localhost:8081/course";
        setActiveTab("gradesList");
      } else if (path === "/student/course") {
        url = "http://localhost:8081/course";
        setActiveTab("courseList");
      } else if (path === "/student/enrolcourse") {
        url = "http://localhost:8081/course";
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
          <h2>Grades and GPA List:</h2>
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
                  <tr>
                    <td>ex1</td>
                    <td>ex2</td>
                    <td>grade</td>
                  </tr>
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
                  <tr>
                    <td>ex1</td>
                    <td>ex1</td>
                    <td>ex1</td>
                  </tr>
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
                <tr>
                  <td>Exp1</td>
                  <td>Exp2</td>
                  <td>Exp3</td>
                  <td>Exp4</td>
                  <td>Exp5</td>
                  <td>Exp6</td>
                  <td>
                    <Button>Enrol</Button>
                  </td>
                </tr>
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
                <tr>
                  <td>Exp1</td>
                  <td>Exp2</td>
                  <td>Exp3</td>
                  <td>Exp4</td>
                </tr>
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
                  href="/student"
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