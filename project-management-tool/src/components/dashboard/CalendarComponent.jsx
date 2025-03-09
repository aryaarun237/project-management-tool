import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Button, Form, ListGroup, Container } from "react-bootstrap";

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const [tasks, setTasks] = useState({});
  const [taskInput, setTaskInput] = useState("");

  // Handle adding a new task
  const addTask = () => {
    if (taskInput.trim() === "") return;

    const dateKey = date.toDateString(); // Store tasks by date
    setTasks((prevTasks) => ({
      ...prevTasks,
      [dateKey]: [...(prevTasks[dateKey] || []), taskInput],
    }));

    setTaskInput(""); // Clear input field
  };

  // Handle deleting a task
  const deleteTask = (taskIndex) => {
    const dateKey = date.toDateString();
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks[dateKey]];
      updatedTasks.splice(taskIndex, 1);
      return updatedTasks.length
        ? { ...prevTasks, [dateKey]: updatedTasks }
        : Object.fromEntries(Object.entries(prevTasks).filter(([key]) => key !== dateKey));
    });
  };

  return (
    <Container className="mt-3 p-3 rounded" style={{ maxWidth: "500px", backgroundColor: "#2E5077", color: "#F6F4F0" }}>
  <h4 className="mb-3 text-center">📅 Task Schedule</h4>

  {/* Calendar */}
  <div style={{ backgroundColor: "#F6F4F0", padding: "40px", borderRadius: "20px" }}>
    <Calendar onChange={setDate} value={date} />
  </div>

  {/* Task Input */}
  <Form className="mt-3 d-flex">
    <Form.Control
      type="text"
      placeholder="Add task for selected date"
      value={taskInput}
      onChange={(e) => setTaskInput(e.target.value)}
      style={{ backgroundColor: "#F6F4F0", color: "#2E5077" }}
    />
    <Button className="ms-2" style={{ backgroundColor: "#4DA1A9", border: "none" }} onClick={addTask}>
      ➕ Add
    </Button>
  </Form>

  {/* Task List */}
  {tasks[date.toDateString()] && (
    <ListGroup className="mt-3" style={{ backgroundColor: "#79D7BE", borderRadius: "10px", padding: "10px" }}>
      <h5>Tasks for {date.toDateString()}</h5>
      {tasks[date.toDateString()].map((task, index) => (
        <ListGroup.Item
          key={index}
          className="d-flex justify-content-between"
          style={{ backgroundColor: "#F6F4F0", color: "#2E5077" }}
        >
          {task}
          <Button
            size="sm"
            onClick={() => deleteTask(index)}
            style={{ backgroundColor: "#dc3545", border: "none", color: "#F6F4F0" }}
          >
            ❌
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )}
</Container>

    // <Container className="mt-3 p-4 rounded" style={{ backgroundColor: "#2E5077", color: "#F6F4F0" }}>
    //   <h4 className="mb-3">📅 Task Schedule</h4>

    //   {/* Calendar */}
    //   <div style={{ backgroundColor: "#F6F4F0", padding: "50px", borderRadius: "50px" }}>
    //     <Calendar onChange={setDate} value={date}  />
    //   </div>

    //   {/* Task Input */}
    //   <Form className="mt-3 d-flex">
    //     <Form.Control
    //       type="text"
    //       placeholder="Add task for selected date"
    //       value={taskInput}
    //       onChange={(e) => setTaskInput(e.target.value)}
    //       style={{ backgroundColor: "#F6F4F0", color: "#2E5077" }}
    //     />
    //     <Button className="ms-2" style={{ backgroundColor: "#4DA1A9", border: "none" }} onClick={addTask}>
    //       ➕ Add
    //     </Button>
    //   </Form>

    //   {/* Task List */}
    //   {tasks[date.toDateString()] && (
    //     <ListGroup className="mt-3" style={{ backgroundColor: "#79D7BE", borderRadius: "10px", padding: "10px" }}>
    //       <h5>Tasks for {date.toDateString()}</h5>
    //       {tasks[date.toDateString()].map((task, index) => (
    //         <ListGroup.Item
    //           key={index}
    //           className="d-flex justify-content-between"
    //           style={{ backgroundColor: "#F6F4F0", color: "#2E5077" }}
    //         >
    //           {task}
    //           <Button
    //             size="sm"
    //             onClick={() => deleteTask(index)}
    //             style={{ backgroundColor: "#dc3545", border: "none", color: "#F6F4F0" }}
    //           >
    //             ❌
    //           </Button>
    //         </ListGroup.Item>
    //       ))}
    //     </ListGroup>
    //   )}
    // </Container>
  );
};

export default CalendarComponent;
