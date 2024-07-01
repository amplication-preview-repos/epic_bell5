import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  outlookEventId?: SortOrder;
  participants?: SortOrder;
  time?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
