import { useReducer, useState } from "react";
import { reducer } from "./reducer";
import type { TaskType, Dispatch, Tasks } from "./types";

const Task = ({ id, title, isDone, dispatch }: TaskType) => {
  return (
    <div>
      {isDone ? <s>{title}</s> : title}
      <button onClick={() => dispatch({ type: "toggle-task", id })}>
        Toggle status
      </button>
      <button onClick={() => dispatch({ type: "delete-task", id })}>
        Delete
      </button>
    </div>
  );
};

const Form = ({ dispatch }: { dispatch: Dispatch }) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "add-task", title: newTaskTitle });
        setNewTaskTitle("");
      }}
    >
      <input
        type="text"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
      />
    </form>
  );
};

const Todo = ({ tasks: initialTasks }: { tasks: Tasks[] }) => {
  const [tasksState, dispatch] = useReducer(reducer, {
    nextId: initialTasks.length + 1,
    tasks: initialTasks,
  });

  return (
    <div>
      {tasksState.tasks.map(({ id, title, isDone }) => (
        <Task
          id={id}
          title={title}
          isDone={isDone}
          key={id}
          dispatch={dispatch}
        />
      ))}
      <Form dispatch={dispatch} />
    </div>
  );
};

const App = () => {
  const tasks: Tasks[] = [
    { id: 1, title: "Pack bags", isDone: true },
    { id: 2, title: "Courier bags", isDone: false },
    { id: 3, title: "Book tickets", isDone: true },
    { id: 4, title: "Rent apartment", isDone: false },
  ];

  return <Todo tasks={tasks} />;
};

export default App;
