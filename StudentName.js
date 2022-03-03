"use strict";

/*1. Dada una cadena de texto (string) separe y muestre en consola los caracteres de forma desordenada uno por línea, 1 caracter a la vez.*/

let testWord = "esternocleidomastoideo";
function wordCutter(word) {
  let separateString = word.split("");
  console.log(separateString.sort(() => Math.random() - 2));
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
  let results = myArray.filter((myArray) => {
    return myArray.toUpperCase().startsWith(targetWord.toUpperCase());
  });
  console.log(results);
}

let a = wordSearcherIgnoreCase(testTargetWordC, testWordsList);
//console.log(a);
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

  let organice = myArray.sort((a, b) => a.length - b.length);
  console.log(organice);
  let sum = 0;
  if (organice) {
    return myArray.length[0], sum += myArray.length;
  }
  console.log(myArray);
  /*
  let longestWord = "";
  let shortestWord = "";
  let sum = 0;
  let arrayLength = getArray.length;

  getArray.forEach((word) => {
    if (word.length > longestWord.length || word.length < shortestWord.length) {
      longestWord = word;
      shortestWord = word;
    }
    sum += word.length;
  });
  console.log(sum / getArray.length);
  return { longestWord };
  // return shortestWord;
  */
}

let result = wordLengthClassifier(testSampleList);
console.log(result);

/*4. Dado un string retorna si este es o no un palíndromo. No debe diferenciar entre mayúsculas y minúsculas*/

let onVerificationWordA = "reconocer";
let onVerificationWordB = "querer";
let onVerificationWordC = "Gomosos";
let onVerificationWordD = "Somos";

function palindromeVerifier(word) {
  const reversed = word.split("").reverse().join("");
  console.log(reversed);
  return reversed === word ? "Is palindrome" : "It is not palindrome";
}

console.log(palindromeVerifier(onVerificationWordA));
// :)

/*5. Dado un objeto que contiene una lista de palabras contar el
número de letras vocales y consonantes y retornarlo en un arreglo de 2 posiciones.*/
let containerTestObject = {
  list: ["Cumbamba", "Oreja", "Nariz", "Ojo", "Lengua", "Diente"],
};
function lettersCounter(objectContainer) {
  // :)
}

/*6. Dado 2 arreglos de strings retornar un arreglo con todos los strings.*/
let wordArrayA = ["hola", "¿", "cómo", "estás", "?"];
let wordArrayB = ["te", "ves", "igual", "te", "ves", "igual"];

function arrayJoiner(listA, listB) {
  console.log(...listA, ...listB);
  // :)
}
arrayJoiner(wordArrayA, wordArrayB);

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
  // :)
}

/*8. Dado un objeto que contiene 2 arreglos, retornar un objeto con 1
arreglo que contiene las palabras sin vocales.*/

let testObjMultiContainer = {
  listA: ["piraña", "cachama", "tilapia", "trucha", "carpa", "salmón"],
  listB: ["rinoceronte", "elefante", "jirafa", "tigre", "gacela", "ñú"],
};

function vocalsRemoverFromObject(objectMultiContainer) {
  // :)
}
//console.log(vocalsRemoverFromObject(testObjMultiContainer));

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
  // :)
}

/*10. Dada una lista de palabras verificar si alguna de las palabras es la
versión al revés de alguna de las palabras de una segunda lista,
debe contar las identificadas y retornar un objeto con ese conteo.*/

let testListA = ["amor", "sabor", "calor", "firma", "mara"];
let testListB = ["roma", "robar", "portar", "arma", "mora"];

function doubleListVerifier(listA, listB) {
  // :)
}
