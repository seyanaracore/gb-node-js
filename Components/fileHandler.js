import fs from "fs";
import { Transform } from "stream";
import getRegExp from "./getRegExp.js";

const fileHandler = (path, stringsList) => {
	const patternsList = stringsList.map((string) => getRegExp(string));
	const readStream = fs.createReadStream(path);
	const transformStream = getTransformStream(patternsList)

	// const { filePath, fileFormat } = decomposePath(path)
	// const newFilePath = `${filePath}-${stringsList.join("_")}.${fileFormat}`

	// const writeStream = fs.createWriteStream(newFilePath, "utf-8")
	readStream.pipe(transformStream).pipe(process.stdout)
	// writeStream.end()
};

const decomposePath = (path) => {
	const decomposedPath = path.split(".")
	const fileFormat = decomposedPath.at(-1)
	const filePath = decomposedPath.slice(0, decomposedPath.length - 1)
	return { fileFormat, filePath }
}

const getTransformStream = (patternsList) => {
	return new Transform({
		transform(chunk, encoding, callback) {
			const chunkString = chunk.toString()
			let transformedChunk = ""

			patternsList.forEach((pattern) => {
				transformedChunk += chunkString.match(pattern).join("")
			})

			this.push(transformedChunk);
			callback();
		}
	})
}

export default fileHandler;