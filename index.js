import * as fs from "fs";
import { fileName, findingIps } from "./Utils/constants.js";

const logReadStream = fs.createReadStream(fileName, "utf-8");

const logWriteStreams = findingIps.map((ip) => {
   return {
      ip,
      writeStream: fs.createWriteStream(ip + "_requests.log", {
         flags: "a",
         encoding: "utf8",
      }),
   };
});

const getRegExp = (startWord) => new RegExp(`${startWord}.*\n`, "g");

logReadStream.on("data", (chunk) => {
   const chunkString = chunk.toString();

   logWriteStreams.forEach((stream) => {
      const regExp = getRegExp(stream.ip);
      const handledString = chunkString.match(regExp).join("");
      stream.writeStream.write(handledString);
   });
});
