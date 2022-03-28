import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const checkArgs = () => {
   const options = yargs(hideBin(process.argv))
      .usage("Usage: -p <path>")
      .option("p", {
         alias: "path",
         describe: "Path to file",
         type: "string",
         demandOption: false,
      })
      .usage("Usage: -i <ip1, ip2>")
      .option("s", {
         alias: "strings",
         describe: "Words list for search",
         type: "array",
         demandOption: false,
      }).argv;
   const { strings, path } = options;

   return { strings, path };
};

console.log(checkArgs());
