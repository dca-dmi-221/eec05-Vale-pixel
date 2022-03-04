"use strict";

/*1. Dada una cadena de texto (string) separe y muestre en consola los caracteres de forma desordenada uno por línea, 1 caracter a la vez.*/

let testWord = "esternocleidomastoideo";
function wordCutter(word) {
  let splitString = word.split("");
  console.log(splitString.sort(() => Math.random() - 2));
}
// :)
wordCutter(testWord);

/*2. Dado un string buscar en un listado e indicar si se encuentra o no
ahí contenido, debe soportar mayúsculas y minúsculas sin importar
la variación, es lo mismo Carro, CARRO o carro.*/

let testTargetWordA = "Sabrosura";
let testTargetWordB = "Sazón";
let testTargetWordC = "Tempurado";
let testWordsList = [
  "Sabr0sura",
  "Gozadera",
  "ritmo",
  "TEMPURADO",
  "SAZON",
  "Chevere",
  "Meneo",
];

// pruebe para cada palabra A, B y C
function wordSearcherIgnoreCase(targetWord, wordsList) {
  const myArray = Array.from(wordsList);
  let word = myArray.filter((myArray) => {
    return myArray.toUpperCase().startsWith(targetWord.toUpperCase());
  });
  return word ? word + " is in the array" : word + " is not in the array";
}

let testA = wordSearcherIgnoreCase(testTargetWordA, testWordsList);
let testB = wordSearcherIgnoreCase(testTargetWordB, testWordsList);
let testC = wordSearcherIgnoreCase(testTargetWordC, testWordsList);

console.log({ word1: testA, word2: testB, word3: testC });
/*3. Dado un arreglo de strings, retornar la palabra más larga,
la más corta y el tamaño promedio, el arreglo debe ser
entregado por parámetro y puede variar en cantidad de palabras
del arreglo de entrada libremente, debe retornar un objeto
con los valores mencionados*/

let testSampleList = [
  "Capitan",
  "Comandante",
  "Teniente",
  "Cabo",
  "Brigadier",
  "Coronel",
  "Zar",
];

function wordLengthClassifier(wordsList) {
  const myArray = Array.from(wordsList);
  const organiced = myArray.sort((a, b) => a.length - b.length);
  let sumWords = 0;
  myArray.forEach((word) => {
    sumWords += word.length;
  });
  return {
    longestWord: organiced[0],
    shortestWord: organiced[organiced.length - 1],
    media: sumWords / organiced.length,
  };
}
let result3 = wordLengthClassifier(testSampleList);
console.log(result3);

/*4. Dado un string retorna si este es o no un palíndromo. No debe diferenciar entre mayúsculas y minúsculas*/

let onVerificationWordA = "reconocer";
let onVerificationWordB = "querer";
let onVerificationWordC = "Gomosos";
let onVerificationWordD = "Somos";

function palindromeVerifier(word) {
  const reversed = word.split("").reverse().join("");
  return reversed.toUpperCase() === word.toUpperCase()
    ? word + " is palindrome"
    : word + " is not palindrome";
}
let result4 = palindromeVerifier(onVerificationWordA);
console.log(result4);

// :)

/*5. Dado un objeto que contiene una lista de palabras contar el
número de letras vocales y consonantes y retornarlo en un arreglo de 2 posiciones.*/
let containerTestObject = {
  list: ["Cumbamba", "Oreja", "Nariz", "Ojo", "Lengua", "Diente"],
};
function lettersCounter(objectContainer) {
  const myString = objectContainer.toString();
  const consonantCounter = myString.match(/[^aeiou]+/g).length;
  const vowelCounter = myString.match(/[aeiou]+/g).length;

  return {
    vowels: consonantCounter,
    consonants: vowelCounter,
  };
}
let result5 = lettersCounter(containerTestObject);
console.log(result5);

// :)

/*6. Dado 2 arreglos de strings retornar un arreglo con todos los strings.*/
let wordArrayA = ["hola", "¿", "cómo", "estás", "?"];
let wordArrayB = ["te", "ves", "igual", "te", "ves", "igual"];

function arrayJoiner(listA, listB) {
  console.log(...listA, ...listB);
}
arrayJoiner(wordArrayA, wordArrayB);

// :)

/*7. Dado un arreglo de strings indicar qué posiciones del arreglo
son anagramas de una palabra base (recibida como parámetro), retorne las posiciones en un arreglo.*/

let testWordToExplore = "amar";
let wordsToVerify = [
  "amar",
  "arma",
  "rana",
  "mara",
  "rama",
  "roma",
  "amor",
  "ramon",
  "omar",
];

function anagramVerifier(wordToExplore, listOfWords) {
  let compareWords = listOfWords.filter((words) => {
    return (
      wordToExplore.toLowerCase().split("").sort().join("") ===
      words.toLowerCase().split("").sort().join("")
    );
  });
  return compareWords;
}
let result7 = anagramVerifier(testWordToExplore, wordsToVerify);
console.log(result7);

/*8. Dado un objeto que contiene 2 arreglos, retornar un objeto con 1
arreglo que contiene las palabras sin vocales.*/

let testObjMultiContainer = {
  listA: ["piraña", "cachama", "tilapia", "trucha", "carpa", "salmón"],
  listB: ["rinoceronte", "elefante", "jirafa", "tigre", "gacela", "ñú"],
};

function vocalsRemoverFromObject(objectMultiContainer) {
  //const myString = Array.from(objectMultiContainer);
  const myString = Object.values(objectMultiContainer);
  console.log(myString);
  //const strings = myString.map((string) => string.replace(/[aeiou]/g, ""));
  // return strings;

  /* 
  const consonantCounter = myString.match(/[^aeiou]+/gi).length;
  const vowelCounter = myString.match(/[aeiou]/gi).length;
  return {
    vowels: consonantCounter,
    consonants: vowelCounter,
  };
  strings = strings.map(string => string.replace(/[aeiou]/g, ''));

console.log(strings);*/
  //

  // :)
}
console.log(vocalsRemoverFromObject(testObjMultiContainer));

/*9. Dado un arreglo de palabras reemplazar la última vocal por una x y retornar dicho arreglo.*/

let someWordsToTest = [
  "compañeros",
  "estudiantes",
  "señores",
  "amigos",
  "graduandos",
  "artistas",
  "universitarios",
];

function lastVocalReplacer(words) {
  const replaceVowel = words.map((word) => {
    const a = word.match(/[aeiou](?!.*[aeiou])/i);
    console.log(a)
    return word.replace(/[aeiou]+/g, "x");
  });
  
  return replaceVowel;
  
  /*function endVowel(x){
   const match = x.match(/[aeiou](?!.*[aeiou])/i);
   return match ? match[0] : 'No match';
}

console.log(endVowel('foobar')); */
  // :)
}
console.log(lastVocalReplacer(someWordsToTest));
/*10. Dada una lista de palabras verificar si alguna de las palabras es la
versión al revés de alguna de las palabras de una segunda lista,
debe contar las identificadas y retornar un objeto con ese conteo.*/

let testListA = ["amor", "sabor", "calor", "firma", "mara"];
let testListB = ["roma", "robar", "portar", "arma", "mora"];

function doubleListVerifier(listA, listB) {
  let compareWords = listA.filter((words)=>{
    const reversed = words.split("").reverse();
  return reversed === listB
  })
  return compareWords

  
  
  // :)
}
console.log(doubleListVerifier(testListA, testListB));
/*function palindromeVerifier(word) {
  const reversed = word.split("").reverse().join("");
  return reversed.toUpperCase() === word.toUpperCase()
    ? word + " is palindrome"
    : word + " is not palindrome";
}


let compareWords = listOfWords.filter((words) => {
    return (
      wordToExplore.toLowerCase().split("").sort().join("") ===
      words.toLowerCase().split("").sort().join("")
    );
  });
  return compareWords;
}
 */