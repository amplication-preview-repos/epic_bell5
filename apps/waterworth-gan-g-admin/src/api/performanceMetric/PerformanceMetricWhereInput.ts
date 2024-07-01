import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PerformanceMetricWhereInput = {
  callsMade?: IntNullableFilter;
  conversionRate?: FloatNullableFilter;
  emailsSent?: IntNullableFilter;
  employee?: EmployeeWhereUniqueInput;
  id?: StringFilter;
  meetingsBooked?: IntNullableFilter;
  metricType?: "Option1";
  recordedDate?: DateTimeNullableFilter;
};
