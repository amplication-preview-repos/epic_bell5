/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { InterviewService } from "../interview.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { InterviewCreateInput } from "./InterviewCreateInput";
import { Interview } from "./Interview";
import { InterviewFindManyArgs } from "./InterviewFindManyArgs";
import { InterviewWhereUniqueInput } from "./InterviewWhereUniqueInput";
import { InterviewUpdateInput } from "./InterviewUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class InterviewControllerBase {
  constructor(
    protected readonly service: InterviewService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Interview })
  @nestAccessControl.UseRoles({
    resource: "Interview",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createInterview(
    @common.Body() data: InterviewCreateInput
  ): Promise<Interview> {
    return await this.service.createInterview({
      data: {
        ...data,

        applicant: data.applicant
          ? {
              connect: data.applicant,
            }
          : undefined,
      },
      select: {
        applicant: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        date: true,
        feedback: true,
        id: true,
        interviewer: true,
        status: true,
        time: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Interview] })
  @ApiNestedQuery(InterviewFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Interview",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async interviews(@common.Req() request: Request): Promise<Interview[]> {
    const args = plainToClass(InterviewFindManyArgs, request.query);
    return this.service.interviews({
      ...args,
      select: {
        applicant: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        date: true,
        feedback: true,
        id: true,
        interviewer: true,
        status: true,
        time: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Interview })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Interview",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async interview(
    @common.Param() params: InterviewWhereUniqueInput
  ): Promise<Interview | null> {
    const result = await this.service.interview({
      where: params,
      select: {
        applicant: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        date: true,
        feedback: true,
        id: true,
        interviewer: true,
        status: true,
        time: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Interview })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Interview",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateInterview(
    @common.Param() params: InterviewWhereUniqueInput,
    @common.Body() data: InterviewUpdateInput
  ): Promise<Interview | null> {
    try {
      return await this.service.updateInterview({
        where: params,
        data: {
          ...data,

          applicant: data.applicant
            ? {
                connect: data.applicant,
              }
            : undefined,
        },
        select: {
          applicant: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          date: true,
          feedback: true,
          id: true,
          interviewer: true,
          status: true,
          time: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Interview })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Interview",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteInterview(
    @common.Param() params: InterviewWhereUniqueInput
  ): Promise<Interview | null> {
    try {
      return await this.service.deleteInterview({
        where: params,
        select: {
          applicant: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          date: true,
          feedback: true,
          id: true,
          interviewer: true,
          status: true,
          time: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}