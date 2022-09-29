//date is ISO8601 format - https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14
export default function convertString(str: string) {
  /* 
  Append to 'outSwagger' string with Swagger schema attributes relative to given string
  Global variables updated: 
  -outSwagger
  */

  let regxDate = /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
    regxDateTime =
      /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]).([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]{1,2})?(Z|(\+|\-)([0-1][0-9]|2[0-3]):[0-5][0-9])$/;

  outSwagger += indentator + '"type": "string"';
  if (regxDateTime.test(str)) {
    outSwagger += ",";
    outSwagger += indentator + '"format": "date-time"';
  } else if (regxDate.test(str)) {
    outSwagger += ",";
    outSwagger += indentator + '"format": "date"';
  }
  if (document.getElementById("requestExamples").checked) {
    //Log example if checkbox is checked
    outSwagger += "," + indentator + '"example": "' + str + '"';
  }
}
