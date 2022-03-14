import * as fs from "fs";
import { Stream } from "stream";
import { fileName, findingIps } from "./Utils/constants.js";

const logReadStream = fs.createReadStream(fileName, "utf-8");

const logWriteStreams = findingIps.map(ip => fs.createWriteStream(ip + "",r)

const filterStream = new Stream.Transform({
   transform(chunk, encoding, callback) {
      findingIps.some((ip) => {
         if (chunk.toString().includes(ip)) {
            this.push(chunk);
            return true;
         }
      });

      callback();
   },
});

logReadStream.pipe(filterStream).pipe(process.stdout);
