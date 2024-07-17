import { format } from "date-fns";

export const formatDate = (date: string | Date): string => {
  return format(date, "dd MMM, yyyy");
};
