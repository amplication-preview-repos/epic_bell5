import { ApplicantWhereUniqueInput } from "../applicant/ApplicantWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type InterviewWhereInput = {
  applicant?: ApplicantWhereUniqueInput;
  date?: DateTimeNullableFilter;
  feedback?: StringNullableFilter;
  id?: StringFilter;
  interviewer?: StringNullableFilter;
  status?: "Option1";
  time?: DateTimeNullableFilter;
};
