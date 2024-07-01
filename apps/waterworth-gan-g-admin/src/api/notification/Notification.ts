export type Notification = {
  createdAt: Date;
  dateSent: Date | null;
  id: string;
  isRead: boolean | null;
  message: string | null;
  recipient: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
