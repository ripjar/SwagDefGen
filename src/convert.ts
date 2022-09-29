export interface ConvertOptions{

}

export function convert(jsonString:string, options:ConvertOptions) {
  "use strict";
  // ---- Global variables ----
  var inJSON, outSwagger, tabCount, indentator;

  // ---- Functions definitions ----




  


  // ---- Execution begins here ----
  inJSON = document.getElementById("JSON").value;
  try {
    inJSON = JSON.parse(inJSON);
  } catch (e) {
    alert("Your JSON is invalid!\n(" + e + ")");
    return;
  }

  //For recursive functions to keep track of the tab spacing
  tabCount = 0;
  indentator = "\n";
  // ---- Begin definitions ----
  outSwagger = '"definitions": {';
  changeIndentation(1);
  //For each object inside the JSON
  for (var obj in inJSON) {
    // ---- Begin schema scope ----
    outSwagger += indentator + '"' + obj + '": {';
    conversorSelection(inJSON[obj]);
    outSwagger += indentator + "},";
    // ---- End schema scope ----
  }
  //Remove last comma
  outSwagger = outSwagger.substring(0, outSwagger.length - 1);
  // ---- End definitions ----
  changeIndentation(tabCount - 1);
  outSwagger += indentator + "}";

  document.getElementById("Swagger").value = format(
    outSwagger,
    document.getElementById("yamlOut").checked
  );
}
