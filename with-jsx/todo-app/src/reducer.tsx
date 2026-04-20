import { produce } from "immer";
import { type State, type Action, ACTIONS } from "./types";

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTIONS.TOGGLE_TASK:
      return produce(state, (draft) => {
        const task = draft.tasks.find((t) => t.id === action.id);
        if (task) task.isDone = !task.isDone;
      });

    case ACTIONS.DELETE_TASK:
      return produce(state, (draft) => {
        draft.tasks = draft.tasks.filter((t) => t.id !== action.id);
      });

    case ACTIONS.ADD_TASK:
      return produce(state, (draft) => {
        draft.tasks.push({
          id: draft.nextId,
          title: action.title,
          isDone: false,
        });
        draft.nextId++;
      });

    default:
      return state;
  }
};
