export type Asset = {
  assetType: string | null;
  assignedTo: string | null;
  condition: string | null;
  createdAt: Date;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
};
