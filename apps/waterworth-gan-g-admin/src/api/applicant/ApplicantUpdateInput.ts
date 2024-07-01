import { InterviewUpdateManyWithoutApplicantsInput } from "./InterviewUpdateManyWithoutApplicantsInput";
import { JobPostingWhereUniqueInput } from "../jobPosting/JobPostingWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ApplicantUpdateInput = {
  appliedDate?: Date | null;
  email?: string | null;
  firstName?: string | null;
  interviews?: InterviewUpdateManyWithoutApplicantsInput;
  jobPosting?: JobPostingWhereUniqueInput | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  resume?: InputJsonValue;
  status?: "Option1" | null;
};
