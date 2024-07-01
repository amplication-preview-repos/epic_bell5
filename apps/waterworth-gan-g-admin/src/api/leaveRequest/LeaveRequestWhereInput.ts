import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LeaveRequestWhereInput = {
  comments?: StringNullableFilter;
  employee?: EmployeeWhereUniqueInput;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  manager?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  status?: "Option1";
  typeField?: "Option1";
};
