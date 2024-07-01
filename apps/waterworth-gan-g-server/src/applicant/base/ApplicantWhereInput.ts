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
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InterviewListRelationFilter } from "../../interview/base/InterviewListRelationFilter";
import { JobPostingWhereUniqueInput } from "../../jobPosting/base/JobPostingWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { EnumApplicantStatus } from "./EnumApplicantStatus";

@InputType()
class ApplicantWhereInput {
  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  appliedDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  firstName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => InterviewListRelationFilter,
  })
  @ValidateNested()
  @Type(() => InterviewListRelationFilter)
  @IsOptional()
  @Field(() => InterviewListRelationFilter, {
    nullable: true,
  })
  interviews?: InterviewListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => JobPostingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => JobPostingWhereUniqueInput)
  @IsOptional()
  @Field(() => JobPostingWhereUniqueInput, {
    nullable: true,
  })
  jobPosting?: JobPostingWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  lastName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  phoneNumber?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  resume?: JsonFilter;

  @ApiProperty({
    required: false,
    enum: EnumApplicantStatus,
  })
  @IsEnum(EnumApplicantStatus)
  @IsOptional()
  @Field(() => EnumApplicantStatus, {
    nullable: true,
  })
  status?: "Option1";
}

export { ApplicantWhereInput as ApplicantWhereInput };