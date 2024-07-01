import { SortOrder } from "../../util/SortOrder";

export type LeaveRequestOrderByInput = {
  comments?: SortOrder;
  createdAt?: SortOrder;
  employeeId?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  manager?: SortOrder;
  startDate?: SortOrder;
  status?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
