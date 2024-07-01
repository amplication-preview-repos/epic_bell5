import { SortOrder } from "../../util/SortOrder";

export type ApplicantOrderByInput = {
  appliedDate?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  jobPostingId?: SortOrder;
  lastName?: SortOrder;
  phoneNumber?: SortOrder;
  resume?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
