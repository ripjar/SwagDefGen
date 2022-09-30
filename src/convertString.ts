import { ConvertOptions } from "./interface/ConvertOptions";

export interface StringYaml {
  type: "string";
  format?: "date" | "date-time";
  example?: string;
  description?: string;
}

//date is ISO8601 format - https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14
export default function convertString(str: string, options: ConvertOptions): StringYaml {
  const regxDate = /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  const regxDateTime =
    /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]).([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]{1,2})?(Z|(\+|\-)([0-1][0-9]|2[0-3]):[0-5][0-9])$/;

  const isDate = regxDate.test(str);
  const isDateTime = regxDateTime.test(str);
  return {
    type: "string",
    ...(isDate ? { format: "date" } : {}),
    ...(isDateTime ? { format: "date-time" } : {}),
    ...(options.requestExamples ? { example: str } : {}),
    ...(options.addDescription ? { description: "" } : {}),
  };
}
