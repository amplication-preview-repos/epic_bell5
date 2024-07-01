import { Injectable } from "@nestjs/common";
import { AddPerformanceMetricInput } from "../performanceMetrics/AddPerformanceMetricInput";
import { PerformanceMetricDto } from "../performanceMetrics/PerformanceMetricDto";

@Injectable()
export class PerformanceMetricsService {
  constructor() {}
  async AddPerformanceMetric(args: AddPerformanceMetricInput): Promise<PerformanceMetricDto> {
    throw new Error("Not implemented");
  }
  async GetPerformanceMetrics(args: PerformanceMetricDto): Promise<PerformanceMetricDto[]> {
    throw new Error("Not implemented");
  }
}
