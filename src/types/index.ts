export interface TaskType {
  [category: string]: {
    title: string;
    details: string;
    dueDate: Date;
    completed: boolean;
  }[]
};