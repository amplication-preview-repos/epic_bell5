import { JsonValue } from "type-fest";

export type Document = {
  createdAt: Date;
  description: string | null;
  file: JsonValue;
  id: string;
  owner: string | null;
  title: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
  uploadDate: Date | null;
};
