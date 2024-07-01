/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  PerformanceMetric as PrismaPerformanceMetric,
  Employee as PrismaEmployee,
} from "@prisma/client";

export class PerformanceMetricServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PerformanceMetricCountArgs, "select">
  ): Promise<number> {
    return this.prisma.performanceMetric.count(args);
  }

  async performanceMetrics(
    args: Prisma.PerformanceMetricFindManyArgs
  ): Promise<PrismaPerformanceMetric[]> {
    return this.prisma.performanceMetric.findMany(args);
  }
  async performanceMetric(
    args: Prisma.PerformanceMetricFindUniqueArgs
  ): Promise<PrismaPerformanceMetric | null> {
    return this.prisma.performanceMetric.findUnique(args);
  }
  async createPerformanceMetric(
    args: Prisma.PerformanceMetricCreateArgs
  ): Promise<PrismaPerformanceMetric> {
    return this.prisma.performanceMetric.create(args);
  }
  async updatePerformanceMetric(
    args: Prisma.PerformanceMetricUpdateArgs
  ): Promise<PrismaPerformanceMetric> {
    return this.prisma.performanceMetric.update(args);
  }
  async deletePerformanceMetric(
    args: Prisma.PerformanceMetricDeleteArgs
  ): Promise<PrismaPerformanceMetric> {
    return this.prisma.performanceMetric.delete(args);
  }

  async getEmployee(parentId: string): Promise<PrismaEmployee | null> {
    return this.prisma.performanceMetric
      .findUnique({
        where: { id: parentId },
      })
      .employee();
  }
}
