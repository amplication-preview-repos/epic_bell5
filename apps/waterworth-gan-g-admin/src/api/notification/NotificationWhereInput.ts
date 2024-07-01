import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type NotificationWhereInput = {
  dateSent?: DateTimeNullableFilter;
  id?: StringFilter;
  isRead?: BooleanNullableFilter;
  message?: StringNullableFilter;
  recipient?: StringNullableFilter;
  typeField?: "Option1";
};
