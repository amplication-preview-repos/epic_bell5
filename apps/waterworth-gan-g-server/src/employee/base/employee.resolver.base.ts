/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Employee } from "./Employee";
import { EmployeeCountArgs } from "./EmployeeCountArgs";
import { EmployeeFindManyArgs } from "./EmployeeFindManyArgs";
import { EmployeeFindUniqueArgs } from "./EmployeeFindUniqueArgs";
import { CreateEmployeeArgs } from "./CreateEmployeeArgs";
import { UpdateEmployeeArgs } from "./UpdateEmployeeArgs";
import { DeleteEmployeeArgs } from "./DeleteEmployeeArgs";
import { LeaveRequestFindManyArgs } from "../../leaveRequest/base/LeaveRequestFindManyArgs";
import { LeaveRequest } from "../../leaveRequest/base/LeaveRequest";
import { PerformanceMetricFindManyArgs } from "../../performanceMetric/base/PerformanceMetricFindManyArgs";
import { PerformanceMetric } from "../../performanceMetric/base/PerformanceMetric";
import { Department } from "../../department/base/Department";
import { EmployeeService } from "../employee.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Employee)
export class EmployeeResolverBase {
  constructor(
    protected readonly service: EmployeeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "read",
    possession: "any",
  })
  async _employeesMeta(
    @graphql.Args() args: EmployeeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Employee])
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "read",
    possession: "any",
  })
  async employees(
    @graphql.Args() args: EmployeeFindManyArgs
  ): Promise<Employee[]> {
    return this.service.employees(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Employee, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "read",
    possession: "own",
  })
  async employee(
    @graphql.Args() args: EmployeeFindUniqueArgs
  ): Promise<Employee | null> {
    const result = await this.service.employee(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Employee)
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "create",
    possession: "any",
  })
  async createEmployee(
    @graphql.Args() args: CreateEmployeeArgs
  ): Promise<Employee> {
    return await this.service.createEmployee({
      ...args,
      data: {
        ...args.data,

        department: args.data.department
          ? {
              connect: args.data.department,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Employee)
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async updateEmployee(
    @graphql.Args() args: UpdateEmployeeArgs
  ): Promise<Employee | null> {
    try {
      return await this.service.updateEmployee({
        ...args,
        data: {
          ...args.data,

          department: args.data.department
            ? {
                connect: args.data.department,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Employee)
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "delete",
    possession: "any",
  })
  async deleteEmployee(
    @graphql.Args() args: DeleteEmployeeArgs
  ): Promise<Employee | null> {
    try {
      return await this.service.deleteEmployee(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [LeaveRequest], { name: "leaveRequests" })
  @nestAccessControl.UseRoles({
    resource: "LeaveRequest",
    action: "read",
    possession: "any",
  })
  async findLeaveRequests(
    @graphql.Parent() parent: Employee,
    @graphql.Args() args: LeaveRequestFindManyArgs
  ): Promise<LeaveRequest[]> {
    const results = await this.service.findLeaveRequests(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [PerformanceMetric], {
    name: "performanceMetrics",
  })
  @nestAccessControl.UseRoles({
    resource: "PerformanceMetric",
    action: "read",
    possession: "any",
  })
  async findPerformanceMetrics(
    @graphql.Parent() parent: Employee,
    @graphql.Args() args: PerformanceMetricFindManyArgs
  ): Promise<PerformanceMetric[]> {
    const results = await this.service.findPerformanceMetrics(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Department, {
    nullable: true,
    name: "department",
  })
  @nestAccessControl.UseRoles({
    resource: "Department",
    action: "read",
    possession: "any",
  })
  async getDepartment(
    @graphql.Parent() parent: Employee
  ): Promise<Department | null> {
    const result = await this.service.getDepartment(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
