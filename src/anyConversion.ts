import convertNull, { NullYaml } from "./converNull";
import convertArray, { ArrayYaml } from "./convertArray";
import convertNumber, { NumberYaml } from "./convertNumber";
import convertObject, { ObjectYaml } from "./convertObject";
import convertString, { StringYaml } from "./convertString";
import { ConvertOptions } from "./interface/ConvertOptions";

export type AnyYaml = ObjectYaml | NumberYaml | StringYaml | NullYaml | ArrayYaml;

export default function anyConversion(v: any, options: ConvertOptions): AnyYaml {
    if (v === null) return convertNull(v, options);
    if (typeof v === "number") return convertNumber(v, options);
    if (typeof v === "string") return convertString(v, options);
    if (Array.isArray(v)) return convertArray(v, options);
    return convertObject(v as Record<string, any>, options);
  }