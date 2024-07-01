import { Module } from "@nestjs/common";
import { PerformanceMetricsService } from "./performancemetrics.service";
import { PerformanceMetricsController } from "./performancemetrics.controller";
import { PerformanceMetricsResolver } from "./performancemetrics.resolver";

@Module({
  controllers: [PerformanceMetricsController],
  providers: [PerformanceMetricsService, PerformanceMetricsResolver],
  exports: [PerformanceMetricsService],
})
export class PerformanceMetricsModule {}
