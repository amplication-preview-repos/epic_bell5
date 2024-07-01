import { EmployeeUpdateManyWithoutDepartmentsInput } from "./EmployeeUpdateManyWithoutDepartmentsInput";
import { JobPostingUpdateManyWithoutDepartmentsInput } from "./JobPostingUpdateManyWithoutDepartmentsInput";

export type DepartmentUpdateInput = {
  description?: string | null;
  employees?: EmployeeUpdateManyWithoutDepartmentsInput;
  jobPostings?: JobPostingUpdateManyWithoutDepartmentsInput;
  name?: string | null;
};
