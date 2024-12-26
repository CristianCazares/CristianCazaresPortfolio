import { createHash } from "crypto";

export const hashString = (str: string) => {
  return createHash("sha256").update(str).digest("hex");
};
