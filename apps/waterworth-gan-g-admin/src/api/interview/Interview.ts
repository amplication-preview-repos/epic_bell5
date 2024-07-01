import { Applicant } from "../applicant/Applicant";

export type Interview = {
  applicant?: Applicant | null;
  createdAt: Date;
  date: Date | null;
  feedback: string | null;
  id: string;
  interviewer: string | null;
  status?: "Option1" | null;
  time: Date | null;
  updatedAt: Date;
};
