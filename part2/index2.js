const getLastWordLength = (str) => {
    let allWords = str.trim().split(' ');
    let lastWord = allWords.at(-1);
    return lastWord.length;
};