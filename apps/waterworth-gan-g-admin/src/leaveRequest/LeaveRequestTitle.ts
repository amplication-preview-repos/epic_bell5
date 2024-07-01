import { LeaveRequest as TLeaveRequest } from "../api/leaveRequest/LeaveRequest";

export const LEAVEREQUEST_TITLE_FIELD = "manager";

export const LeaveRequestTitle = (record: TLeaveRequest): string => {
  return record.manager?.toString() || String(record.id);
};
