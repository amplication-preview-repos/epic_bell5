export type NotificationCreateInput = {
  dateSent?: Date | null;
  isRead?: boolean | null;
  message?: string | null;
  recipient?: string | null;
  typeField?: "Option1" | null;
};
