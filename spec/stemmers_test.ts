import {
  LancasterStemmer,
  PorterStemmer,
  PorterStemmerRu,
} from '../lib/natural'

// Lancaster stemmers
console.log(LancasterStemmer.stem('words'))

// Porter stemmers
console.log(PorterStemmer.stem('words')) // stem a single word
console.log(PorterStemmerRu.stem('падший'))
