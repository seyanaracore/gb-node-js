import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import path, { dirname } from "path";

const __dirname = dirname(process.argv[1]);

const checkArgs = () => {
	const options = yargs(hideBin(process.argv))
		.usage("Usage: -p <path>")
		.option("p", {
			alias: "path",
			describe: "Path to file",
			type: "string",
			demandOption: false,
		})
		.usage("Usage: -i <word1, word2>")
		.option("s", {
			alias: "strings",
			describe: "Words list for search",
			type: "array",
			demandOption: false,
		}).argv;
	const { strings } = options;
	let filePath = options.path && path.join(__dirname, options.path)

	return { strings, path: filePath };
};

export default checkArgs;
