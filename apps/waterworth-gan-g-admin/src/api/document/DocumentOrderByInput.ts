import { SortOrder } from "../../util/SortOrder";

export type DocumentOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  file?: SortOrder;
  id?: SortOrder;
  owner?: SortOrder;
  title?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  uploadDate?: SortOrder;
};
