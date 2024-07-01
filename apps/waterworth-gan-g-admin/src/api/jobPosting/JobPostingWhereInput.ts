import { ApplicantListRelationFilter } from "../applicant/ApplicantListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type JobPostingWhereInput = {
  applicants?: ApplicantListRelationFilter;
  closeDate?: DateTimeNullableFilter;
  department?: DepartmentWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  postedDate?: DateTimeNullableFilter;
  requirements?: StringNullableFilter;
  status?: "Option1";
  title?: StringNullableFilter;
};
