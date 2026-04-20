export type Action =
  | { type: ACTIONS.TOGGLE_TASK; id: number }
  | { type: ACTIONS.DELETE_TASK; id: number }
  | { type: ACTIONS.ADD_TASK; title: string };

export type Tasks = {
  id: number;
  title: string;
  isDone: boolean;
};

export type State = {
  nextId: number;
  tasks: Tasks[];
};

export type Dispatch = (action: Action) => void;

export type TaskType = Tasks & {
  dispatch: Dispatch;
};

export enum ACTIONS {
  TOGGLE_TASK,
  ADD_TASK,
  DELETE_TASK,
}
