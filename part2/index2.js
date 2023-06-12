const getLastWordLength = (str) => {
    let allWords = str.trim().split(' ');
    let lastWord = allWords.at(-1);
    return lastWord.length;
};


/* Условия выполняются
getLastWordLength(''); // 0
getLastWordLength('man in BlacK'); // 5
getLastWordLength('hello, world!  '); // 6*/