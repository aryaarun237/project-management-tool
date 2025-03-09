import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Tasks from "./Tasks";
import Analytics from "./Analytics";
import CalendarComponent from "./CalendarComponent";
import ExportReport from "./ExportReport";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Container fluid className="p-4" style={{ backgroundColor: "#F6F4F0", minHeight: "100vh" }}>
        {/* Header Section */}
        <Row className="mb-4 align-items-center">
          <Col>
            <h2 className="fw-bold" style={{ color: "#2E5077" }}>Welcome, User</h2>
          </Col>
          <Col className="text-end">
            <Button
              style={{ backgroundColor: "#dc3545", border: "none" }}
              onClick={() => {
                localStorage.removeItem("auth");
                window.location.href = "/signin";
              }}
            >
              Logout
            </Button>
          </Col>
        </Row>

        {/* Quick Stats Section */}
        <Row className="mb-4">
          <Col md={4}>
            <Card style={{ backgroundColor: "#4DA1A9", color: "#F6F4F0" }} className="text-center p-3">
              <Card.Body>
                <Card.Title>📌 Pending Tasks</Card.Title>
                <h3>8</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ backgroundColor: "#79D7BE", color: "#2E5077" }} className="text-center p-3">
              <Card.Body>
                <Card.Title>✅ Completed Tasks</Card.Title>
                <h3>15</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ backgroundColor: "#F6F4F0", color: "#2E5077", border: "1px solid #2E5077" }} className="text-center p-3">
              <Card.Body>
                <Card.Title>📅 Upcoming Meetings</Card.Title>
                <h3>3</h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Task & Analytics Section */}
        <Row>
          <Col md={6}>
            <Tasks />
          </Col>
          <Col md={6}>
            <Analytics />
          </Col>
        </Row>

        {/* Calendar & Export Section */}
        <Row className="mt-4">
          <Col md={6}>
            <CalendarComponent />
          </Col>
          <Col md={6}>
            <ExportReport />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;







// import React from "react";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import Tasks from "./Tasks";
// import Analytics from "./Analytics";
// import CalendarComponent from "./CalendarComponent";
// import ExportReport from "./ExportReport";
// import Sidebar from "./Sidebar";

// const Dashboard = () => {
//   return (
//     <div className="d-flex">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <Container fluid className="p-4" style={{ backgroundColor: "#F6F4F0", minHeight: "100vh" }}>
//         {/* Header Section */}
//         <Row className="mb-4 align-items-center">
//           <Col>
//             <h2 className="fw-bold" style={{ color: "#2E5077" }}>Welcome, User</h2>
//           </Col>
//           <Col className="text-end">
//             <Button
//               style={{ backgroundColor: "#dc3545", border: "none" }}
//               onClick={() => {
//                 localStorage.removeItem("auth");
//                 window.location.href = "/signin";
//               }}
//             >
//               Logout
//             </Button>
//           </Col>
//         </Row>

//         {/* Quick Stats Section */}
//         <Row className="mb-4">
//           <Col md={4}>
//             <Card style={{ backgroundColor: "#4DA1A9", color: "#F6F4F0" }} className="text-center p-3">
//               <Card.Body>
//                 <Card.Title>📌 Pending Tasks</Card.Title>
//                 <h3>8</h3>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={4}>
//             <Card style={{ backgroundColor: "#79D7BE", color: "#2E5077" }} className="text-center p-3">
//               <Card.Body>
//                 <Card.Title>✅ Completed Tasks</Card.Title>
//                 <h3>15</h3>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={4}>
//             <Card style={{ backgroundColor: "#F6F4F0", color: "#2E5077", border: "1px solid #2E5077" }} className="text-center p-3">
//               <Card.Body>
//                 <Card.Title>📅 Upcoming Meetings</Card.Title>
//                 <h3>3</h3>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>

//         {/* Task & Analytics Section */}
//         <Row>
//           <Col md={6}>
//             <Tasks />
//           </Col>
//           <Col md={6}>
//             <Analytics />
//           </Col>
//         </Row>

//         {/* Calendar & Export Section */}
//         <Row className="mt-4">
//           <Col md={6}>
//             <CalendarComponent />
//           </Col>
//           <Col md={6}>
//             <ExportReport />
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Dashboard;













// // import React, { useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { Container, Row, Col, Card, Button } from "react-bootstrap";
// // import Tasks from "./Tasks";
// // import Analytics from "./Analytics";
// // import CalendarComponent from "./CalendarComponent";
// // import ExportReport from "./ExportReport";
// // import Sidebar from "./Sidebar";

// // const Dashboard = () => {
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const auth = localStorage.getItem("auth");
// //     if (!auth) {
// //       navigate("/signin");
// //     }
// //   }, [navigate]);

// //   return (
// //     <div className="d-flex">
// //       <Sidebar />
// //       <Container fluid className="p-4" style={{ backgroundColor: "#F6F4F0", minHeight: "100vh" }}>
// //         <Row className="mb-4 align-items-center">
// //           <Col>
// //             <h2 className="fw-bold" style={{ color: "#2E5077" }}>Welcome, User</h2>
// //           </Col>
// //           <Col className="text-end">
// //             <Button style={{ backgroundColor: "#dc3545", border: "none" }} onClick={() => { localStorage.removeItem("auth"); navigate("/signin"); }}>
// //               Logout
// //             </Button>
// //           </Col>
// //         </Row>
// //       </Container>
// //     </div>
// //   );
// // };

// // export default Dashboard;
