import yaml from "js-yaml";
import anyConversion from "./anyConversion";
import { ConvertOptions } from "./interface/ConvertOptions";

export function convert(jsonStr: string, options: ConvertOptions): string {
  try {
    const obj = JSON.parse(jsonStr);
    return yaml.dump(anyConversion(obj, options));
  } catch (e) {
    console.log(e);
    return "";
  }
}
