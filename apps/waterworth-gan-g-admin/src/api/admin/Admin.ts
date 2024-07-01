export type Admin = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  permissions?: Array<"Option1">;
  role?: "Option1" | null;
  updatedAt: Date;
};
