export interface ConvertOptions {
  nullValue?: "string" | "number" | "boolean" | "integer" | "null";
  /** convert integer to number */
  intToNumber?: boolean;
  /** ouput as yaml */
  yamlOutput?: boolean;

  requestExamples?: boolean;
  addDescription?: boolean;
  noInt?: boolean;
}
