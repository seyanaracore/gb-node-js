import fs from "fs";
import getRegExp from "./getRegExp";

const fileHandler = (path, stringsList) => {
   const patternsList = stringsList.map((string) => getRegExp(string));
   const readStream = fs.createReadStream(path);
};

export default fileHandler;

readStream.on("data", (chunk) => {
   const chunkString = chunk.toString();

   logWriteStreams.forEach((stream) => {
      F;
      const regExp = getRegExp(stream.ip);
      const handledString = chunkString.match(regExp).join("");
      stream.writeStream.write(handledString);
   });
});
