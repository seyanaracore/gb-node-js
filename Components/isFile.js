import { lstatSync } from "fs"

export const isFile = (filePath) => {
	if (filePath) return lstatSync(filePath).isFile();
};