import { SortOrder } from "../../util/SortOrder";

export type JobPostingOrderByInput = {
  closeDate?: SortOrder;
  createdAt?: SortOrder;
  departmentId?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  postedDate?: SortOrder;
  requirements?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
