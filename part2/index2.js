const getLastWordLength = (str) => {
    const allWords = str.trim().split(' ');
    const lastWord = allWords.at(-1);
    return lastWord.length;
};