export interface TaskItem {
  title: string;
  details: string;
  dueDate: Date;
  completed: boolean;
}

export interface TaskType {
  [category: string]: {
    id: string,
    tasks: TaskItem[]
  }
};

export interface CategoryType {
  title: string;
  id: string
}