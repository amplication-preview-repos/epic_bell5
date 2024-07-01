import { SortOrder } from "../../util/SortOrder";

export type PerformanceMetricOrderByInput = {
  callsMade?: SortOrder;
  conversionRate?: SortOrder;
  createdAt?: SortOrder;
  emailsSent?: SortOrder;
  employeeId?: SortOrder;
  id?: SortOrder;
  meetingsBooked?: SortOrder;
  metricType?: SortOrder;
  recordedDate?: SortOrder;
  updatedAt?: SortOrder;
};
