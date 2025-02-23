import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialTasks = [
  { id: "1", content: "Complete project documentation" },
  { id: "2", content: "Fix login page bug" },
  { id: "3", content: "Update dashboard UI" },
  { id: "4", content: "Integrate API for analytics" }
];

const Tasks = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = [...tasks];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTasks(items);
  };

  return (
    <Container>
      <h4>Task Management</h4>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <Card className="mb-2 p-2" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      {task.content}
                    </Card>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
};

export default Tasks;
