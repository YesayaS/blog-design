import he from "he";
import { DateTime } from "luxon";

export const decode = (text: string) => he.decode(text);

export const formatISODate = (ISOdate: string) =>
  DateTime.fromISO(ISOdate).toFormat("dd MMM, yyyy");
