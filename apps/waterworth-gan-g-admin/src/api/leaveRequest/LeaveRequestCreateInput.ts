import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type LeaveRequestCreateInput = {
  comments?: string | null;
  employee?: EmployeeWhereUniqueInput | null;
  endDate?: Date | null;
  manager?: string | null;
  startDate?: Date | null;
  status?: "Option1" | null;
  typeField?: "Option1" | null;
};
