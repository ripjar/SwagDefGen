import { ConvertOptions } from "./interface/ConvertOptions";

export interface NullYaml {
  type: Required<ConvertOptions["nullValue"]>;
  format: "nullable";
}

export default function convertNull(_value: null, options: ConvertOptions): NullYaml {
  return {
    type: options.nullValue,
    format: "nullable",
  };
}
