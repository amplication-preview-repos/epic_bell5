import { Applicant } from "../applicant/Applicant";
import { Department } from "../department/Department";

export type JobPosting = {
  applicants?: Array<Applicant>;
  closeDate: Date | null;
  createdAt: Date;
  department?: Department | null;
  description: string | null;
  id: string;
  postedDate: Date | null;
  requirements: string | null;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
