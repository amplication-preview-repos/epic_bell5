import * as graphql from "@nestjs/graphql";
import { AddPerformanceMetricInput } from "../performanceMetrics/AddPerformanceMetricInput";
import { PerformanceMetricDto } from "../performanceMetrics/PerformanceMetricDto";
import { PerformanceMetricsService } from "./performancemetrics.service";

export class PerformanceMetricsResolver {
  constructor(protected readonly service: PerformanceMetricsService) {}

  @graphql.Mutation(() => PerformanceMetricDto)
  async AddPerformanceMetric(
    @graphql.Args()
    args: AddPerformanceMetricInput
  ): Promise<PerformanceMetricDto> {
    return this.service.AddPerformanceMetric(args);
  }

  @graphql.Query(() => [PerformanceMetricDto])
  async GetPerformanceMetrics(
    @graphql.Args()
    args: PerformanceMetricDto
  ): Promise<PerformanceMetricDto[]> {
    return this.service.GetPerformanceMetrics(args);
  }
}
