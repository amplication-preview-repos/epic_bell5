import { ApplicantWhereUniqueInput } from "../applicant/ApplicantWhereUniqueInput";

export type InterviewUpdateInput = {
  applicant?: ApplicantWhereUniqueInput | null;
  date?: Date | null;
  feedback?: string | null;
  interviewer?: string | null;
  status?: "Option1" | null;
  time?: Date | null;
};
