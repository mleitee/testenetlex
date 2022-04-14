module.exports = {
    wordFrequency: function(doc, word){
        const result = doc.match(new RegExp(word, "gi"))
        if (result){
           return result.length
        }
        return 0  
    },
    

    wordSentences: function(doc, word){
        throw new Error("Not implemented exception")
    },

    topWords: function(doc, count, minWordLength){
        const result3 = this.wordFrequency
        if (result3 >= count && minWordLength >= word.length) {
            return word, count
        }
    },

    stringToWordsArray: function(text) {
        return text.match(/[a-zÀ-ú]+/gmui);
    }
}

