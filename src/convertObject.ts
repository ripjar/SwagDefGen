import convertNull, { NullYaml } from "./converNull";
import convertNumber, { NumberYaml } from "./convertNumber";
import convertString, { StringYaml } from "./convertString";
import { ConvertOptions } from "./interface/ConvertOptions";

export type AnyYaml = ObjectYaml | NumberYaml | StringYaml | NullYaml;

export interface ObjectYaml {
  type: "object";
  properties: Record<string, AnyYaml>;
}

function conversion(v: any, options: ConvertOptions): AnyYaml {
  if (v === null) return convertNull(v, options);
  if (typeof v === "number") return convertNumber(v, options);
  if (typeof v === "string") return convertString(v, options);
  return convertObject(v as Record<string, any>, options);
}

export default function convertObject(
  obj: Record<string, any>,
  options: ConvertOptions,
): ObjectYaml {
  const result = Object.keys(obj).reduce((prev, cur) => {
    return { ...prev, [cur]: conversion(obj[cur], options) };
  }, {} as Record<string, AnyYaml>);
  return {
    type: "object",
    properties: result,
  };
}
