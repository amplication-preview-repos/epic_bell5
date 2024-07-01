import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InterviewListRelationFilter } from "../interview/InterviewListRelationFilter";
import { JobPostingWhereUniqueInput } from "../jobPosting/JobPostingWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";

export type ApplicantWhereInput = {
  appliedDate?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  interviews?: InterviewListRelationFilter;
  jobPosting?: JobPostingWhereUniqueInput;
  lastName?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  resume?: JsonFilter;
  status?: "Option1";
};
