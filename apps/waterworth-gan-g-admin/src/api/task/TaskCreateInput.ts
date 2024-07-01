export type TaskCreateInput = {
  assignedTo?: string | null;
  description?: string | null;
  dueDate?: Date | null;
  status?: "Option1" | null;
  title?: string | null;
};
