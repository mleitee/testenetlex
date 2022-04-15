module.exports = {
    wordFrequency: function(doc, word){
        const result = doc.match(new RegExp(word, "gi"))
        if (result){
           return result.length
        }
        return 0  
    },
    

    wordSentences: function(doc, word){
        const result = []
        const caracteresList = ['.', ":", ";","\n"]
        const numberList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
        const lettersList = doc.slice("")
        for(let j = 0; j < lettersList.length; j++) {
            if(lettersList[j].toLowerCase() !== word[0].toLowerCase()){
                continue 
            }
            let match = true
            if(word.length + j > doc.length) {
                continue
            }
            for (let i = 0; i < word.length; i++) {
                if(lettersList[i + j].toLowerCase() !== word[i].toLowerCase()){
                    match = false
                }
            }
            if(word.length + j + 1 > doc.length) {
                continue
            }
            if(!match){
                continue
            }
            if((lettersList[j + word.length] === " " || caracteresList.includes(lettersList[j + word.length]))) {
               let letter = " "
               let finalI = j
               let begginI = j - 1
               while(!letter.match(/^[A-Z]*$/) || caracteresList.includes(doc[begginI]))  {
                letter = doc[begginI]
                begginI = begginI - 1  
               } 
               while(!caracteresList.includes(letter)) {
                finalI = finalI + 1 
                letter = lettersList[finalI] 
                console.log("fafaf" + begginI + letter + j)
               }
               const phrase = doc.substring(begginI, finalI + 1)
               result.push(phrase)
               j = finalI
            }
        }
        return result
    },

    topWords: function(doc, count, minWordLength){
        const wordCountArray = []
        const wordArray = this.stringToWordsArray(doc)
        wordArray.forEach(word => {
            if (word.length>=minWordLength){
                const index = wordCountArray.findIndex(wordCount => wordCount.word.toLowerCase()===word.toLowerCase())
                if (index >= 0) {
                    wordCountArray[index].count+= 1
                }
                else{
                    const result1 = {word:element.toLowerCase(), count:1}
                    wordCountArray.push(result1)
                }
                
            }
        });
        const sortedArray = bubbleSort(word1)
        const xf = sortedarray.slice(0,count)
        return xf

    },

    stringToWordsArray: function(doc) {
        return doc.match(/[a-zÀ-ú]+/gmui);
    }
}

function bubbleSort(array) {
    var done = false;
    while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
    if (array[i - 1].count < array[i].count) {
    done = false;
    var tmp = array[i - 1];
    array[i - 1] = array[i];
    array[i] = tmp;
    }
    }
    }
    
    return array;
    }

    // numberList.includes(letter) || caracteresList.includes(letter) || letter === " " || letter === letter.toUpperCase()