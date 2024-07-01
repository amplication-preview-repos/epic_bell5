export type Task = {
  assignedTo: string | null;
  createdAt: Date;
  description: string | null;
  dueDate: Date | null;
  id: string;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
