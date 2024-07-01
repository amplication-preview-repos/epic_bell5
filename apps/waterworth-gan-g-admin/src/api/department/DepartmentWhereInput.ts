import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployeeListRelationFilter } from "../employee/EmployeeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobPostingListRelationFilter } from "../jobPosting/JobPostingListRelationFilter";

export type DepartmentWhereInput = {
  description?: StringNullableFilter;
  employees?: EmployeeListRelationFilter;
  id?: StringFilter;
  jobPostings?: JobPostingListRelationFilter;
  name?: StringNullableFilter;
};
