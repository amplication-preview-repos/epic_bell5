import { JobPosting as TJobPosting } from "../api/jobPosting/JobPosting";

export const JOBPOSTING_TITLE_FIELD = "title";

export const JobPostingTitle = (record: TJobPosting): string => {
  return record.title?.toString() || String(record.id);
};
