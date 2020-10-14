const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    // split expr into 10 bits pieces
    arr = expr.match(/.{1,10}/g);

    
    arr.forEach(function(item, index){
        this[index] = item
          .replace(/^0+/, "") // delete zeros 
          .replace(/\*+/, "") // replace asterisks with spaces
          .replace(/10/g, ".") // replace 10s with dots and 11s with dashes
          .replace(/11/g, "-");
    }, arr);
    
    // decode 
    arr.forEach(function(item, index){
        this[index] = MORSE_TABLE[arr[index]] || " "; // put space if no letters found in MORSE_TABLE;
    }, arr);
      
    return arr.join('');

}

module.exports = {
    decode
}