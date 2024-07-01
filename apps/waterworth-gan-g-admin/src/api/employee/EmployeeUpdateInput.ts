import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { LeaveRequestUpdateManyWithoutEmployeesInput } from "./LeaveRequestUpdateManyWithoutEmployeesInput";
import { PerformanceMetricUpdateManyWithoutEmployeesInput } from "./PerformanceMetricUpdateManyWithoutEmployeesInput";

export type EmployeeUpdateInput = {
  department?: DepartmentWhereUniqueInput | null;
  email?: string | null;
  endDate?: Date | null;
  firstName?: string | null;
  lastName?: string | null;
  leaveRequests?: LeaveRequestUpdateManyWithoutEmployeesInput;
  performanceMetrics?: PerformanceMetricUpdateManyWithoutEmployeesInput;
  phoneNumber?: string | null;
  position?: string | null;
  startDate?: Date | null;
  status?: "Option1" | null;
};
