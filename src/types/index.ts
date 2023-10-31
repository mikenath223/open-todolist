export interface TaskType {
  [category: string]: {
    id: string,
    tasks: {
      title: string;
      details: string;
      dueDate: Date;
      completed: boolean;
    }[]
  }
};

export interface CategoryType {
  title: string;
  id: string
}