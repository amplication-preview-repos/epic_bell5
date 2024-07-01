import { Module } from "@nestjs/common";
import { EmployeeModule } from "./employee/employee.module";
import { DepartmentModule } from "./department/department.module";
import { AdminModule } from "./admin/admin.module";
import { DocumentModule } from "./document/document.module";
import { InterviewModule } from "./interview/interview.module";
import { TaskModule } from "./task/task.module";
import { NotificationModule } from "./notification/notification.module";
import { JobPostingModule } from "./jobPosting/jobPosting.module";
import { AppointmentModule } from "./appointment/appointment.module";
import { PerformanceMetricModule } from "./performanceMetric/performanceMetric.module";
import { LeaveRequestModule } from "./leaveRequest/leaveRequest.module";
import { ApplicantModule } from "./applicant/applicant.module";
import { UserModule } from "./user/user.module";
import { AssetModule } from "./asset/asset.module";
import { PerformanceMetricsModule } from "./PerformanceMetrics/performancemetrics.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    EmployeeModule,
    DepartmentModule,
    AdminModule,
    DocumentModule,
    InterviewModule,
    TaskModule,
    NotificationModule,
    JobPostingModule,
    AppointmentModule,
    PerformanceMetricModule,
    LeaveRequestModule,
    ApplicantModule,
    UserModule,
    AssetModule,
    PerformanceMetricsModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
