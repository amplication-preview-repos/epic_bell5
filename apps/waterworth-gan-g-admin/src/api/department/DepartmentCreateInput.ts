import { EmployeeCreateNestedManyWithoutDepartmentsInput } from "./EmployeeCreateNestedManyWithoutDepartmentsInput";
import { JobPostingCreateNestedManyWithoutDepartmentsInput } from "./JobPostingCreateNestedManyWithoutDepartmentsInput";

export type DepartmentCreateInput = {
  description?: string | null;
  employees?: EmployeeCreateNestedManyWithoutDepartmentsInput;
  jobPostings?: JobPostingCreateNestedManyWithoutDepartmentsInput;
  name?: string | null;
};
