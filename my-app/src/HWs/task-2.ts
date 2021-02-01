
type Fn = (array: string[]) => string;

const getItemsString : Fn = function (array) {

    // Write code under this line
    let result = '' ;
    for(let i = 0 ; i < array.length ; i += 1 ) {
      result += (i + 1) + ' - ' + array[i] + '\n';
     
  }
     return result;
}
  
type Fn2 = (message: string, pricePerWord: number) => number;
const calculateEngravingPrice: Fn2 = (message = "", pricePerWord = 0) => pricePerWord = message.split(' ').length * pricePerWord; // Write code in this line


type Fn3 = (string : string) => string;

 const findLongestWord :Fn3  = (string = "") => {
    // Write code under this line
    const array = string.split(' ')
  console.log(array);
  let longestWord = '' ;
 for (let i = 0 ; i < array.length ; i += 1) {

    if (array[i].length > longestWord.length ) {
        longestWord = array[i]
        console.log(array[i].length);
    }
 } 
 return longestWord;
}

type Fn4 = (string: string, maxLength: number) => string;

const formatString: Fn4 = (string, maxLength = 40) => {
    // Write code under this line
    const stringLength = string.length

    if (stringLength > maxLength) { 
        let shortString = string.slice(0, maxLength) + '...' ;
        return shortString ;

    }
    return string;
  }

type Fn5 = (message: string) => boolean;
const checkForSpam : Fn5 = str => { 
let message = str.toLowerCase()

// (message.includes('spam') || message.includes('sale')) ?  true : false;

    if (message.includes('spam') || message.includes('sale') ) {
        return true;
    }
    return false;
}

type Fn6 = (array : number[]) =>number[];

const mapArray: Fn6 = array => {
  const numbers: number[] = new Array(array.length);
  console.log(numbers);
  for (let i = 0; i < array.length; i += 1) {
    // Write code under this line
    numbers[i] = array[i] * 10;
  }
  return numbers;
}

type Fn7 = (array: []) => number[];

const filterArray: Fn7 = array => {
  const numbers: number[] = [];
  for (let i = 0; i < array.length; i += 1) {
    // Write code under this line
    let currentIndex = array[i];
    
    if (Number.isFinite(currentIndex)) {
      numbers.push(currentIndex);
    }
  }
  return numbers;
}

type Fn8 = (a: number[]) => number;

const reduceArray: Fn8 = function(array) {
  let total = 0;
  // Write code under this line
  if (array.length > 0) {
    let number: number;
    for (number of array) {
      total += number;
    }
  }
  return total;
}

type Fn9 = (login: string, minLength?: number, maxLength?: number) => boolean;

const isLoginValid: Fn9 = (login, min = 4, max = 16) => 
((login.length >= min) && (login.length <= max)) ? true : false ;

  // if ((login.length >= min) && (login.length <= max)) {
  //   return true;
  // }
  // return false;

function isLoginUnique (allLogins : string[], login: string) : boolean {
  "use strict";
  // Write code under this line
  for (let i = 0 ; i < allLogins.length ; i += 1) {
    if (allLogins[i] === login ) {
      return false ;
    } 
  }
  return true ;
}

function addLogin(allLogins: string[], login: string) {
  const SUCCESS = "Логин успешно добавлен!";
  const REFUSAL = "Такой логин уже используется!";
  const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
  let message: string = '';
  console.log(login);
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  !isLoginValid(login) ? message = ERROR :
  !isLoginUnique(allLogins, login) ?  message = REFUSAL : 
  (isLoginValid(login) && isLoginUnique(allLogins, login)) ? (allLogins.push(login), message = SUCCESS) : message

  return message;
}

export {getItemsString, calculateEngravingPrice, findLongestWord, formatString, checkForSpam, mapArray, filterArray, reduceArray,isLoginUnique,addLogin}