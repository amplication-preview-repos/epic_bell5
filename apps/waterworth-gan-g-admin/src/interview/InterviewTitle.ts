import { Interview as TInterview } from "../api/interview/Interview";

export const INTERVIEW_TITLE_FIELD = "interviewer";

export const InterviewTitle = (record: TInterview): string => {
  return record.interviewer?.toString() || String(record.id);
};
