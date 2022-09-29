export default function changeIndentation(count: number) {
  /* 
	Assign 'indentator' a string beginning with newline and followed by 'count' tabs
	Updates variable 'tabCount' with the number of tabs used
	Global variables updated: 
	-identator 
	-tabcount
	*/

  let i;
  if (count >= tabCount) {
    i = tabCount;
  } else {
    i = 0;
    indentator = "\n";
  }
  for (; i < count; i++) {
    indentator += "\t";
  }
  //Update tabCount
  tabCount = count;
}
