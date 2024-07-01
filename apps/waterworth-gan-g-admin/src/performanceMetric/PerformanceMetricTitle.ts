import { PerformanceMetric as TPerformanceMetric } from "../api/performanceMetric/PerformanceMetric";

export const PERFORMANCEMETRIC_TITLE_FIELD = "id";

export const PerformanceMetricTitle = (record: TPerformanceMetric): string => {
  return record.id?.toString() || String(record.id);
};
