import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialTasks = [
  { id: "1", title: "Design UI", status: "To Do" },
  { id: "2", title: "Fix bugs", status: "In Progress" },
  { id: "3", title: "Deploy app", status: "Done" },
];

const statuses = ["To Do", "In Progress", "Done"];

const Tasks = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const updatedTasks = [...tasks];
    const [movedTask] = updatedTasks.splice(result.source.index, 1);
    movedTask.status = statuses[result.destination.droppableId];
    updatedTasks.splice(result.destination.index, 0, movedTask);
    setTasks(updatedTasks);
  };

  return (
    <Card className="p-3 mt-3">
      <h4>Task Board</h4>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="d-flex justify-content-between">
          {statuses.map((status, index) => (
            <Droppable key={index} droppableId={String(index)}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="p-3 border rounded bg-light mx-2"
                  style={{ minWidth: "250px" }}
                >
                  <h5>{status}</h5>
                  {tasks
                    .filter((task) => task.status === status)
                    .map((task, i) => (
                      <Draggable key={task.id} draggableId={task.id} index={i}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="p-2 bg-white shadow-sm rounded mb-2"
                          >
                            {task.title}
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </Card>
  );
};

export default Tasks;
