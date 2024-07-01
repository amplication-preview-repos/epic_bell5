import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { LeaveRequestCreateNestedManyWithoutEmployeesInput } from "./LeaveRequestCreateNestedManyWithoutEmployeesInput";
import { PerformanceMetricCreateNestedManyWithoutEmployeesInput } from "./PerformanceMetricCreateNestedManyWithoutEmployeesInput";

export type EmployeeCreateInput = {
  department?: DepartmentWhereUniqueInput | null;
  email?: string | null;
  endDate?: Date | null;
  firstName?: string | null;
  lastName?: string | null;
  leaveRequests?: LeaveRequestCreateNestedManyWithoutEmployeesInput;
  performanceMetrics?: PerformanceMetricCreateNestedManyWithoutEmployeesInput;
  phoneNumber?: string | null;
  position?: string | null;
  startDate?: Date | null;
  status?: "Option1" | null;
};
