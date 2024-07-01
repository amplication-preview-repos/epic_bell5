import { InputJsonValue } from "../../types";

export type DocumentUpdateInput = {
  description?: string | null;
  file?: InputJsonValue;
  owner?: string | null;
  title?: string | null;
  typeField?: "Option1" | null;
  uploadDate?: Date | null;
};
