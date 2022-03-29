import checkArgs from "./Components/checkArgs.js";
import { askPath, askPattern } from "./Components/userDialog.js";

let { strings, path } = checkArgs();

if (!path) path = await askPath();
if (!strings) strings = await askPattern();
console.log(strings)
// console.log(path, strings)
