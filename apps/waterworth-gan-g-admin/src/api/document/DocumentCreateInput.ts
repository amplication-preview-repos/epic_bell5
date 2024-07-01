import { InputJsonValue } from "../../types";

export type DocumentCreateInput = {
  description?: string | null;
  file?: InputJsonValue;
  owner?: string | null;
  title?: string | null;
  typeField?: "Option1" | null;
  uploadDate?: Date | null;
};
