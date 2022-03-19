const mongoose = require('mongoose');

//mongoose.set('useFindAndModify', false);

const schema = {
    word: { type: String, required: true }    
}


const word_schema = new mongoose.Schema(schema);
const Word = mongoose.model('word', word_schema);
module.exports = Word;