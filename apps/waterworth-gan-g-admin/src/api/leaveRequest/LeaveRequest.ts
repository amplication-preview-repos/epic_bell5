import { Employee } from "../employee/Employee";

export type LeaveRequest = {
  comments: string | null;
  createdAt: Date;
  employee?: Employee | null;
  endDate: Date | null;
  id: string;
  manager: string | null;
  startDate: Date | null;
  status?: "Option1" | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
