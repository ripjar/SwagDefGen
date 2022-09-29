export default function convertNumber(num: number) {
  /* 
  Append to 'outSwagger' string with Swagger schema attributes relative to given number
  Global variables updated: 
  -outSwagger
  */

  if (num % 1 === 0 && !document.getElementById("noInt").checked) {
    outSwagger += indentator + '"type": "integer",';
    if (num < 2147483647 && num > -2147483647) {
      outSwagger += indentator + '"format": "int32"';
    } else if (Number.isSafeInteger(num)) {
      outSwagger += indentator + '"format": "int64"';
    } else {
      outSwagger += indentator + '"format": "unsafe"';
    }
  } else {
    outSwagger += indentator + '"type": "number"';
  }
  if (document.getElementById("requestExamples").checked) {
    //Log example if checkbox is checked
    outSwagger += "," + indentator + '"example": "' + num + '"';
  }
}
