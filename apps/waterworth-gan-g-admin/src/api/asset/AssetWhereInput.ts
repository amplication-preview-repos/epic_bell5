import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AssetWhereInput = {
  assetType?: StringNullableFilter;
  assignedTo?: StringNullableFilter;
  condition?: StringNullableFilter;
  id?: StringFilter;
  status?: "Option1";
};
