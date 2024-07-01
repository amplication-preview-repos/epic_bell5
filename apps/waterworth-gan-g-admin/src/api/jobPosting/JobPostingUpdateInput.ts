import { ApplicantUpdateManyWithoutJobPostingsInput } from "./ApplicantUpdateManyWithoutJobPostingsInput";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";

export type JobPostingUpdateInput = {
  applicants?: ApplicantUpdateManyWithoutJobPostingsInput;
  closeDate?: Date | null;
  department?: DepartmentWhereUniqueInput | null;
  description?: string | null;
  postedDate?: Date | null;
  requirements?: string | null;
  status?: "Option1" | null;
  title?: string | null;
};
