/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ApplicantWhereUniqueInput } from "../../applicant/base/ApplicantWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  MaxLength,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumInterviewStatus } from "./EnumInterviewStatus";

@InputType()
class InterviewUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ApplicantWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ApplicantWhereUniqueInput)
  @IsOptional()
  @Field(() => ApplicantWhereUniqueInput, {
    nullable: true,
  })
  applicant?: ApplicantWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  feedback?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  interviewer?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumInterviewStatus,
  })
  @IsEnum(EnumInterviewStatus)
  @IsOptional()
  @Field(() => EnumInterviewStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  time?: Date | null;
}

export { InterviewUpdateInput as InterviewUpdateInput };
