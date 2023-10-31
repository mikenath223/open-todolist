export interface TaskItem {
  id: string;
  title: string;
  details: string;
  dueDate: string;
  completed: boolean;
}

export interface TaskType {
  [category: string]: {
    id: string;
    tasks: TaskItem[];
  };
}

export interface CategoryType {
  title: string;
  id: string;
}
