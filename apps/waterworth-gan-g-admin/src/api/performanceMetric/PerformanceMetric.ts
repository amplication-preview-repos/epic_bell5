import { Employee } from "../employee/Employee";

export type PerformanceMetric = {
  callsMade: number | null;
  conversionRate: number | null;
  createdAt: Date;
  emailsSent: number | null;
  employee?: Employee | null;
  id: string;
  meetingsBooked: number | null;
  metricType?: "Option1" | null;
  recordedDate: Date | null;
  updatedAt: Date;
};
