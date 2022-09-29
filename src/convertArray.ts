export default function convertArray(obj: any[]) {
  /* 
    Append to 'outSwagger' string with Swagger schema attributes relative to given array
    Global variables updated: 
    -outSwagger
    */

  outSwagger += indentator + '"type": "array",';
  // ---- Begin items scope ----
  outSwagger += indentator + '"items": {';
  conversorSelection(obj);
  outSwagger += indentator + "}";
  // ---- End items scope ----
}
