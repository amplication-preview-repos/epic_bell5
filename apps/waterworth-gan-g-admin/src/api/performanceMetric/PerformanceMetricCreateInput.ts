import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type PerformanceMetricCreateInput = {
  callsMade?: number | null;
  conversionRate?: number | null;
  emailsSent?: number | null;
  employee?: EmployeeWhereUniqueInput | null;
  meetingsBooked?: number | null;
  metricType?: "Option1" | null;
  recordedDate?: Date | null;
};
