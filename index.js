import checkArgs from "./Components/checkArgs.js";
import fileHandler from "./Components/fileHandler.js";
import { isFile } from "./Components/isFile.js";
import { askPath, askPattern } from "./Components/userDialog.js";

let { strings, path } = checkArgs();

if (!path) path = await askPath()
isFile(path)
if (!strings) strings = await askPattern();

fileHandler(path, strings)
