export type Action =
  | { type: "toggle-task"; id: number }
  | { type: "delete-task"; id: number }
  | { type: "add-task"; title: string };

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
