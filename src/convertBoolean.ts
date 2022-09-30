import { ConvertOptions } from "./interface/ConvertOptions";

export interface BooleanYaml {
  type: "boolean";
  example?: boolean;
  description?: string;
}

export default function convertBoolean(value: boolean, options: ConvertOptions): BooleanYaml {
  return {
    type: "boolean",
    ...(options.requestExamples ? { example: value } : {}),
    ...(options.addDescription ? { description: "" } : {}),
  };
}
