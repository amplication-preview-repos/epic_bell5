import { Employee } from "../employee/Employee";
import { JobPosting } from "../jobPosting/JobPosting";

export type Department = {
  createdAt: Date;
  description: string | null;
  employees?: Array<Employee>;
  id: string;
  jobPostings?: Array<JobPosting>;
  name: string | null;
  updatedAt: Date;
};
