export default function convertObject(obj:Record<string,any>) {
    /* 
    Append to 'outSwagger' string with Swagger schema attributes relative to given object
    Global variables updated: 
    -outSwagger
    */

    //Convert null attributes to given type
    if (obj === null) {
      outSwagger +=
        indentator +
        '"type": "' +
        document.getElementById("nullType").value +
        '",';
      outSwagger += indentator + '"format": "nullable"';
      return;
    }
    // ---- Begin properties scope ----
    outSwagger += indentator + '"type": "object",';
    outSwagger += indentator + '"properties": {';
    changeIndentation(tabCount + 1);
    //For each attribute inside that object
    for (var prop in obj) {
      // ---- Begin property type scope ----
      outSwagger += indentator + '"' + prop + '": {';
      conversorSelection(obj[prop]);
      outSwagger += indentator + "},";
      // ---- End property type scope ----
    }

    changeIndentation(tabCount - 1);
    if (Object.keys(obj).length > 0) {
      //At least 1 property inserted
      outSwagger = outSwagger.substring(0, outSwagger.length - 1); //Remove last comma
      outSwagger += indentator + "}";
    } else {
      // No property inserted
      outSwagger += " }";
    }
  }