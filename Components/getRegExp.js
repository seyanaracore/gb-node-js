const getRegExp = (wordInLine) => {
   return new RegExp(`${wordInLine}.*\n`, "g");
};

export default getRegExp;
