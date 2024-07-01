import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LeaveRequestListRelationFilter } from "../leaveRequest/LeaveRequestListRelationFilter";
import { PerformanceMetricListRelationFilter } from "../performanceMetric/PerformanceMetricListRelationFilter";

export type EmployeeWhereInput = {
  department?: DepartmentWhereUniqueInput;
  email?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  leaveRequests?: LeaveRequestListRelationFilter;
  performanceMetrics?: PerformanceMetricListRelationFilter;
  phoneNumber?: StringNullableFilter;
  position?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  status?: "Option1";
};
