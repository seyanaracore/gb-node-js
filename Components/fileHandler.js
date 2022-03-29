import getRegExp from "./getRegExp";

const fileHandler = (path, stringsList) => {
   const patternsList = stringsList.map((string) => getRegExp(string));
};

export default fileHandler;
