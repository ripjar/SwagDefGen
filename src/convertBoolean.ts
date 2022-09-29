import { ConvertOptions } from "./interface/ConvertOptions";

export interface BooleanYaml {
  type: "boolean";
  example?: boolean;
  description?: string;
}

export default function convertBoolean(_num: boolean, options: ConvertOptions): BooleanYaml {
  return {
    type: "boolean",
    ...(options.requestExamples ? { example: true } : {}),
    ...(options.addDescription ? { description: "" } : {}),
  };
}
