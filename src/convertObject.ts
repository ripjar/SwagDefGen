import anyConversion, { AnyYaml } from "./anyConversion";
import { ConvertOptions } from "./interface/ConvertOptions";

export interface ObjectYaml {
  type: "object";
  example?:  Record<string, any>
  properties: Record<string, AnyYaml>;
}

export default function convertObject(
  obj: Record<string, any>,
  options: ConvertOptions,
): ObjectYaml {
  const result = Object.keys(obj).reduce((prev, cur) => {
    return { ...prev, [cur]: anyConversion(obj[cur], options) };
  }, {} as Record<string, AnyYaml>);
  return {
    type: "object",
    ...(options.requestExamples ? { example: obj } : {}),
    properties: result,
  };
}
