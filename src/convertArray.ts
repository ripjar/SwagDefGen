import anyConversion, { AnyYaml } from "./anyConversion";
import { ConvertOptions } from "./interface/ConvertOptions";

export interface ArrayYaml {
  type: "array";
  items: AnyYaml;
}

export default function convertArray(arr: any[], options: ConvertOptions): ArrayYaml {
  return {
    type: "array",
    items: arr.length > 0 ? anyConversion(arr[0], options) : { type: "string" },
  };
}
