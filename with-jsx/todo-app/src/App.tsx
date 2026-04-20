import { useReducer, useState } from "react";
import { reducer } from "./reducer";
import { type TaskType, type Dispatch, type Tasks, ACTIONS } from "./types";
import "./index.css";



const Task = ({ id, title, isDone, dispatch }: TaskType) => {
  return (
    <div className="task">
      <span className={`task-title ${isDone ? "done" : ""}`}>{title}</span>

      <div className="task-actions">
        <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TASK, id })}>
          Toggle
        </button>
        <button
          className="delete"
          onClick={() => dispatch({ type: ACTIONS.DELETE_TASK, id })}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const Form = ({ dispatch }: { dispatch: Dispatch }) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  return (
    <form
      className="task-form"
      onSubmit={(e) => {
        e.preventDefault();
        if (!newTaskTitle.trim()) return;
        dispatch({ type: ACTIONS.ADD_TASK, title: newTaskTitle });
        setNewTaskTitle("");
      }}
    >
      <input
        type="text"
        placeholder="Add a task..."
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
      />
      <button type="submit">Add</button>
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
    { id: 1, title: "reducer", isDone: true },
    { id: 2, title: "immer", isDone: true },
    { id: 3, title: "context", isDone: false },
    { id: 4, title: "useEffect", isDone: false },
  ];

  return <Todo tasks={tasks} />;
};

export default App;
