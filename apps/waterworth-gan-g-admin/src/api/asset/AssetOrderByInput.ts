import { SortOrder } from "../../util/SortOrder";

export type AssetOrderByInput = {
  assetType?: SortOrder;
  assignedTo?: SortOrder;
  condition?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
