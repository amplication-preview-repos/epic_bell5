import { SortOrder } from "../../util/SortOrder";

export type InterviewOrderByInput = {
  applicantId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  feedback?: SortOrder;
  id?: SortOrder;
  interviewer?: SortOrder;
  status?: SortOrder;
  time?: SortOrder;
  updatedAt?: SortOrder;
};
