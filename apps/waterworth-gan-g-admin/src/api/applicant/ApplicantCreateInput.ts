import { InterviewCreateNestedManyWithoutApplicantsInput } from "./InterviewCreateNestedManyWithoutApplicantsInput";
import { JobPostingWhereUniqueInput } from "../jobPosting/JobPostingWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ApplicantCreateInput = {
  appliedDate?: Date | null;
  email?: string | null;
  firstName?: string | null;
  interviews?: InterviewCreateNestedManyWithoutApplicantsInput;
  jobPosting?: JobPostingWhereUniqueInput | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  resume?: InputJsonValue;
  status?: "Option1" | null;
};
