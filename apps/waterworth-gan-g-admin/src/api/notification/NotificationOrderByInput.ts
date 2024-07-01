import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  createdAt?: SortOrder;
  dateSent?: SortOrder;
  id?: SortOrder;
  isRead?: SortOrder;
  message?: SortOrder;
  recipient?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
