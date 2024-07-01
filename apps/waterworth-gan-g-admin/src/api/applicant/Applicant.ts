import { Interview } from "../interview/Interview";
import { JobPosting } from "../jobPosting/JobPosting";
import { JsonValue } from "type-fest";

export type Applicant = {
  appliedDate: Date | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  interviews?: Array<Interview>;
  jobPosting?: JobPosting | null;
  lastName: string | null;
  phoneNumber: string | null;
  resume: JsonValue;
  status?: "Option1" | null;
  updatedAt: Date;
};
