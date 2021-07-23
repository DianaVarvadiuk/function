//function 1
function getMaxDigit (number) {
    const arr = number.toString().split(' ');
  return Math.max(...arr);
  }
  //function 2
function power(base, exp) {
    let result = 1;
    for (let i = 0; i < exp; i++ ) {
        result *= base;
    }
 return(result);
}
//funcion 3
function formattingName(str) {
    return str[0].toUpperCase() + str.slice(1); 
  }
  //function 4
  function sumPaymentOfTax(salery) {
      const tax = 19.5;
      const sum = salery - (salery * tax) / 100;
      return sum;
  }
  //function 5
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
 // function 6
  function  repetitionLetter(letter, line) {
    let count = 0;
   for (let i = 0; i < line.length; i++ ) {
        if(line[i] === letter) {
          count++;
        }
       }
    return count;
     }
     //function 7
  function convertCurrency(str) {
    if ( str.endsWith('$')) {
      const uaCurrency = str.slice(0, str.length - 1)
      return (uaCurrency * 25) + 'UAH'
    } else if ( str.endsWith('UAH')) {
      const dolarCurrency = str.slice(0, str.length - 3)
      return (dolarCurrency / 25) + "$";
    } else {
      return "Eror";
    }
  }
     //function 8
      function getRandomPassword(length=8) {
      let password = " ";
      for( i = 0; i < length; i++) {
        password += Math.floor(Math.random() * length);
      } 
      return password;
      }
      //function 9
       function deleteLetters(letter, word) {
        const result = word.replaceAll(letter,'');
        return result;
       }
       //function 10
      function isPalyndrom(string) {
      const wordRevarse = string.split('').reverse().join('');
      return wordRevarse === string;
        }
      //function 11
      function deleteDuplicateLetter(str) {
        str = str.toLowerCase();
      let result = " ";
      for ( i = 0; i < str.length; i ++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
          result += str[i];
        }
     }
      return result;
      }
     document.writeln(`<p> Function #1 - Gets any number and outputs the largest digit in that number:${getMaxDigit(9, 385)}</p>`);  
     document.writeln(`<p> Function #2 - Сalculates the degree of number::${power(2,10)}</p>`);
     document.writeln(`<p> Function #3 - Formats the name, makes the first letter of the capital :${formattingName('vlad')}</p>`);
     document.writeln(` <p> Function #4 - Calculates the amount remaining after paying the payroll tax:${sumPaymentOfTax(1000)}</p>`);
     document.writeln(` <p> Function #5 - Returns a random integer in the range N to M  : ${getRandomInt(2,10)} </p>`);
     document.writeln(`<p> Function #6 - Counts how many times a particular letter is repeated in a word:${repetitionLetter('а','Асталависта')}</p>`);
     document.writeln(`<p> Function #7 - convertCurrency:${convertCurrency('100$')}</p>`);
     document.writeln(` <p> Function #8 - Random password generation (numbers only) :${getRandomPassword(8)}</p>`);
     document.writeln(`<p> Function #9 - deleteLetters :${ deleteLetters('b','blablabla')}</p>`);
     document.writeln(`<p> Function #10 - deleteLetters :${ isPalyndrom('мадам')}</p>`);
     document.writeln(`<p> Function #11 - Remove letters that occur more than 1 time from the sentence :${ deleteDuplicateLetter('Бісквіт був дуже ніжний')} </p> `) ;