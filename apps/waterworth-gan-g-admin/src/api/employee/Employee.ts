import { Department } from "../department/Department";
import { LeaveRequest } from "../leaveRequest/LeaveRequest";
import { PerformanceMetric } from "../performanceMetric/PerformanceMetric";

export type Employee = {
  createdAt: Date;
  department?: Department | null;
  email: string | null;
  endDate: Date | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  leaveRequests?: Array<LeaveRequest>;
  performanceMetrics?: Array<PerformanceMetric>;
  phoneNumber: string | null;
  position: string | null;
  startDate: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
