import * as fs from "fs";
import { Stream } from "stream";
import { fileName, findingIps } from "./Utils/constants.js";

const logReadStream = fs.createReadStream(fileName, "utf-8");

const logWriteStreams = findingIps.map((ip) => {
   return {
      ip,
      stream: fs.createWriteStream(ip + "_requests.log", {
         flags: "a",
         encoding: "utf8",
      }),
   };
});

const filterStream = new Stream.Transform({
   transform(chunk, encoding, callback) {
      logWriteStreams.some((streamEl) => {
         if (chunk.toString().includes(streamEl.ip)) {
            this.push(chunk);
            writeToFile(streamEl.stream, chunk);
            return true;
         }
      });

      callback();
   },
});

const writeToFile = (stream, chunk) => {
   stream.write(chunk, (err) => {
      console.log(err);
   });
};

logReadStream.pipe(filterStream).pipe(process.stdout);
// console.log(logWriteStreams);
