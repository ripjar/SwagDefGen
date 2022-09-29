import { ConvertOptions } from "./interface/ConvertOptions";

export interface NumberYaml {
  type: "number";
  example?: number;
  description?: string;
}

export default function convertNumber(_num: number, options: ConvertOptions): NumberYaml {
  /* 
  Append to 'outSwagger' string with Swagger schema attributes relative to given number
  Global variables updated: 
  -outSwagger
  */
  //   const result: ConvertIntermediate[] = [];

  //   if (num % 1 === 0 && !options.noInt) {
  //     result.push({ indent, value: "type: integer" });
  //     if (num < 2147483647 && num > -2147483647) {
  //       result.push({ indent, value: "format: int32" });
  //       outSwagger += indentator + '"format": ""';
  //     } else if (Number.isSafeInteger(num)) {
  //       outSwagger += indentator + '"format": "int64"';
  //     } else {
  //       outSwagger += indentator + '"format": "unsafe"';
  //     }
  //   } else {
  //     outSwagger += indentator + '"type": "number"';
  //   }
  //   if (options.requestExamples) {
  //     //Log example if checkbox is checked
  //     outSwagger += "," + indentator + '"example": "' + num + '"';
  //   }

  return {
    type: "number",
    ...(options.requestExamples ? { example: 1 } : {}),
    ...(options.addDescription ? { description: "" } : {}),
  };
}
