import convertArray from "./convertArray";
import convertObject from "./convertObject";
import convertString from "./convertString";

export default function conversorSelection(obj) {
  /* 
    Selects which conversion method to call based on given obj
	Global variables updated: 
    -outSwagger
    */

  changeIndentation(tabCount + 1);
  if (typeof obj === "number") {
    //attribute is a number
    convertNumber(obj);
  } else if (Object.prototype.toString.call(obj) === "[object Array]") {
    //attribute is an array
    convertArray(obj[0]);
  } else if (typeof obj === "object") {
    //attribute is an object
    convertObject(obj);
  } else if (typeof obj === "string") {
    //attribute is a string
    convertString(obj);
  } else if (typeof obj === "boolean") {
    // attribute is a boolean
    outSwagger += indentator + '"type": "boolean"';
  } else {
    // not a valid Swagger type
    alert('Property type "' + typeof obj + '" not valid for Swagger definitions');
  }
  changeIndentation(tabCount - 1);
}
