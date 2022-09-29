export default function format(value: string, yaml: boolean) {
  /*
	Convert JSON to YAML if yaml checkbox is checked
	Global variables updated:
	NONE
	*/
  if (yaml) {
    return value
      .replace(/[{},"]+/g, "")
      .replace(/\t/g, "  ")
      .replace(/(^ *\n)/gm, "");
  } else {
    return value;
  }
}
