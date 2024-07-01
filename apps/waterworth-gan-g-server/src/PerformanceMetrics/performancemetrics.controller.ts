import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PerformanceMetricsService } from "./performancemetrics.service";
import { PerformanceMetricDto } from "../performanceMetrics/PerformanceMetricDto";

@swagger.ApiTags("performanceMetrics")
@common.Controller("performanceMetrics")
export class PerformanceMetricsController {
  constructor(protected readonly service: PerformanceMetricsService) {}

  @common.Post("/performanceMetrics")
  @swagger.ApiOkResponse({
    type: PerformanceMetricDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AddPerformanceMetric(
    @common.Body()
    body: PerformanceMetricDto
  ): Promise<PerformanceMetricDto> {
        return this.service.AddPerformanceMetric(body);
      }

  @common.Get("/performanceMetrics")
  @swagger.ApiOkResponse({
    type: PerformanceMetricDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetPerformanceMetrics(
    @common.Body()
    body: PerformanceMetricDto
  ): Promise<PerformanceMetricDto[]> {
        return this.service.GetPerformanceMetrics(body);
      }
}
