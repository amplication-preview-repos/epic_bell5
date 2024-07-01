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
import { ApplicantCreateNestedManyWithoutJobPostingsInput } from "./ApplicantCreateNestedManyWithoutJobPostingsInput";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  MaxLength,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { DepartmentWhereUniqueInput } from "../../department/base/DepartmentWhereUniqueInput";
import { EnumJobPostingStatus } from "./EnumJobPostingStatus";

@InputType()
class JobPostingCreateInput {
  @ApiProperty({
    required: false,
    type: () => ApplicantCreateNestedManyWithoutJobPostingsInput,
  })
  @ValidateNested()
  @Type(() => ApplicantCreateNestedManyWithoutJobPostingsInput)
  @IsOptional()
  @Field(() => ApplicantCreateNestedManyWithoutJobPostingsInput, {
    nullable: true,
  })
  applicants?: ApplicantCreateNestedManyWithoutJobPostingsInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  closeDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => DepartmentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DepartmentWhereUniqueInput)
  @IsOptional()
  @Field(() => DepartmentWhereUniqueInput, {
    nullable: true,
  })
  department?: DepartmentWhereUniqueInput | null;

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
  description?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  postedDate?: Date | null;

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
  requirements?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumJobPostingStatus,
  })
  @IsEnum(EnumJobPostingStatus)
  @IsOptional()
  @Field(() => EnumJobPostingStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

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
  title?: string | null;
}

export { JobPostingCreateInput as JobPostingCreateInput };