import type { State, Action } from "./types.tsx";

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "toggle-task":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.id ? { ...task, isDone: !task.isDone } : task,
        ),
      };

    case "delete-task":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };

    case "add-task":
      return {
        nextId: state.nextId + 1,
        tasks: [
          ...state.tasks,
          { id: state.nextId, title: action.title, isDone: false },
        ],
      };

    default:
      return state;
  }
};
