import { type State, type Action, ACTIONS } from "./types.tsx";

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTIONS.TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.id ? { ...task, isDone: !task.isDone } : task,
        ),
      };

    case ACTIONS.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };

    case ACTIONS.ADD_TASK:
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
