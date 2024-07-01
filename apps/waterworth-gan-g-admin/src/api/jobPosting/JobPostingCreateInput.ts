import { ApplicantCreateNestedManyWithoutJobPostingsInput } from "./ApplicantCreateNestedManyWithoutJobPostingsInput";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";

export type JobPostingCreateInput = {
  applicants?: ApplicantCreateNestedManyWithoutJobPostingsInput;
  closeDate?: Date | null;
  department?: DepartmentWhereUniqueInput | null;
  description?: string | null;
  postedDate?: Date | null;
  requirements?: string | null;
  status?: "Option1" | null;
  title?: string | null;
};
