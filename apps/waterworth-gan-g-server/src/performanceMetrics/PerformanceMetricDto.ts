import { ArgsType, ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
@ObjectType("PerformanceMetricDtoObject")
class PerformanceMetricDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    employeeId!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    metricType!: string;

    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    callsMade!: number;

    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    emailsSent!: number;

    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    meetingsBooked!: number;

    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    conversionRate!: number;

    @Field(() => Date)
    @Type(() => Date)
    recordedDate!: Date;

    @Field(() => String, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => String
    })
    @Type(() => String)
    id?: string;

    @Field(() => Date, {
        nullable: true
    })
    @Type(() => Date)
    createdAt?: Date;

    @Field(() => Date, {
        nullable: true
    })
    @Type(() => Date)
    updatedAt?: Date;
}

export { PerformanceMetricDto as PerformanceMetricDto };