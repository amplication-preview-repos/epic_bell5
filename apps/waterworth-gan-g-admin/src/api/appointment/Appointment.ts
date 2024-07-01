export type Appointment = {
  createdAt: Date;
  date: Date | null;
  description: string | null;
  id: string;
  location: string | null;
  outlookEventId: string | null;
  participants?: Array<"Option1">;
  time: Date | null;
  title: string | null;
  updatedAt: Date;
};
