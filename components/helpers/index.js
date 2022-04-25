import { format, parseISO } from "date-fns";

export const formatGraphCMSDate = (date) => format(parseISO(date, 'yyyy/MM/dd'), 'dd/MM/yyyy')