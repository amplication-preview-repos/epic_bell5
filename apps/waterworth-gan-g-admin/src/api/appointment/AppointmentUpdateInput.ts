export type AppointmentUpdateInput = {
  date?: Date | null;
  description?: string | null;
  location?: string | null;
  outlookEventId?: string | null;
  participants?: Array<"Option1">;
  time?: Date | null;
  title?: string | null;
};
