import inquirer from "inquirer";
import * as fs from "fs";
import path, { dirname } from "path";

const __dirname = dirname(process.argv[1]);

console.log(__dirname);

const isFile = (fileName) => {
   if (fileName) return fs.lstatSync(fileName).isFile();
};

export const askPath = async () => {
   let list;
   let filePath = __dirname;

   while (!isFile(filePath)) {
      list = fs.readdirSync(filePath);
      const answer = await inquirer.prompt([
         {
            name: "filePath",
            type: "list",
            message: "Path to file:",
            choices: list,
         },
      ]);
      filePath = path.join(filePath, answer.filePath);
   }
   return filePath;
};

export const askPattern = async () => {
   const answer = await inquirer.prompt([
      {
         name: "stringsPattern",
         type: "input",
         message: "Enter strings pattern <str1, str2>:",
      },
   ]);
   return answer.stringsPattern.replace(" ", "").split(",");
};
