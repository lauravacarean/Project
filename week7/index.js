/* var age = 15;
if (age < 15) {
  alert("Discount 25%");
} else if (age >= 15 && age <= 25) {
  alert(" Discount 10%");
} else alert("Discount 0"); */

/* var age = 17;
switch (age) {
  case 15:
    alert("Discount 25%");
    break;
  case 16:
    alert("Discount 20%");
    break;5641
  case 17:
    alert("Discount 15%");
    break;
  case 18:
    alert("Discount 10%");
} */

/* var age = 16;
if (age === 15) {
  alert("Discount 25%");
} else if (age === 16) {
  alert("Discount 20%");
} else if (age === 17) {+6
  alert("Discount 15%");
} else if (age === 18) {
  alert("Discount 10%");
}
 */
/* for (var i=0; i<100; i++) {
  console.log(i+1)
} */
/* for (var i=0; i<100; i+=2) {
  console.log(i+2)
} */
/* var i=0;
while (i<100){
  console.log(i+1);
  i++;
} */
/* var i=0;
while (i<100){
  console.log(i+2);
  i+=2;
} */

//Suma
/* var sum = 0;
for (var i = 0; i < 5; i++) {
  console.log((sum = sum + (i + 1)));
} */

//Factorial
/* var fact = 1;
var n = prompt("");
var n = Number(n);
for (var i = 0; i < n; i++) {
  fact = fact * (i + 1);
}
alert(fact); */
//CMMDC

/* var x = prompt("");
var y = prompt("");
var x = Number(x);
var y = Number(y);
while (x != 0 && x != y) {
  if (x > y) {
    x = x - y;
  } else {
    y = y - x;
  }
}
console.log(x); */

//°C to °F
/* T(°F) = T(°C) × 9/5 + 32
or
T(°C) = (T(°F) - 32) × 5/9*/

/* var x = prompt("Cate grade sunt afara?", "");
var y = prompt("Grade Celsius sau Fahrenheit?", "Raspundeti cu C sau F", "");

var x = Number(x);

if (y == "C" || y == "c") {
  x = (x * 9) / 5 + 32;
  alert(x + "°F");
} else {
  x = ((x - 32) * 5) / 9;
  alert(x + "°C");
}
 */
//do while 1-100
/* var i = 1;
do {
  console.log(i);
  i++;
} while (i <= 100);
 */
/* 
var myArray = [1, "Ana", true, { nr: 3, ce: "mere" }, undefined, null, prompt];
console.log(myArray);
console.log(typeof myArray[0]);
console.log(typeof myArray[1]);
console.log(typeof myArray[2]);
console.log(typeof myArray[3]);
console.log(typeof myArray[4]);
console.log(typeof myArray[5]);
console.log(typeof myArray[6]); */

/* var numbers = [11, 10, 7, 3, 22];
var min = Infinity;
for (var i = 1; i < numbers.length; i++);
{
  if (numbers[i] < min) {
    min = numbers[i];
  }
}
console.log("min=", min); */

/* var array = ["a cute feline", "man's best friend", "milk","mustar de tecuci"];
var dictionary = {
  cat: "a cute feline",
  dog: "man's best friend",
  cow: "milk",
  "mustar de tecuci":10
};
console.log(array[2]);
console.log(dictionary.cat);
console.log(dictionary["cat"]) */
/* 
function scadere(x, y) {
  console.log(x - y);
}
scadere(6, 3);

function add (a,b) {
    const sum = a+b;
    console.log("sum=", sum);
}
add (6,3); */

/* var myArray = [22, 3, 23, 2, 5, 11];
console.log(myArray);

var min = myArray[0]; */

// min array cu while
/* var i = 1;
while (i<=myArray.length) {
    if(myArray[i]<min) {min=myArray[i]}
    i++;
}
console.log (min)
 */
// min array cu for
/* var myArray = [22, 3, 23, 2, 5, 11];
console.log(myArray);
var min = myArray[0]
for (var i = 1; i <= myArray.length; i++) {
  if (myArray[i] < min) { min = myArray[i] }
}
console.log(min) */

//28.06.2019

// 1. Hello World

/* function hello() {
  console.log(" Hello World");
}
hello();

var Dictionary = {
  default: "Hello World",
  en: "Hello World",
  it: "Ciao mondo",
  es: "Hola Mundo",
  de: "Hallo Welt",
};
console.log(Dictionary.it) */

/* function helloWorldInLang(language) {
  switch (language) {
    case "en":
      console.log("Hello World!");
      break;
    case "it":
      console.log("Ciao Mondo!");
      break;
    case "es":
      console.log("Hola Mundo!");
      break;
    case "de":
      console.log("Hallo Welt!");
      break;
    default:
      console.log("Hello World!");
  }
};

helloWorldInLang("es");
helloWorldInLang(); */

//2. Functie min din array
/* var myArray = [22, 3, 23, 2, 5, 11]
function minimum() {
  var min = myArray[0]
  for (var i = 1; i <= myArray.length; i++) {
    if (myArray[i] < min) { min = myArray[i] }
  }
  return min;
}
console.log(minimum(myArray)); */

//3. Prim

/* function prime(nr) {
  if (nr === 1) {
    return false;
  } else if (nr === 2) {
    return true;
  } else {
    for (var i = 2; i < nr; i++) {
      if (nr % i === 0) {
        return false;
      }
    }
    return true;
  }
}
console.log(prime(2));
console.log(prime(4));

//functie care primeste ca argumente un sir de caractere si un numar si
//returneaza sirul de caractere repetat de cate ori se specifica numarul.
function repeat(a, b) {
  var repeatString = "";
  while (b > 0) {
    repeatString += a;
    b--;
  }
  return repeatString;
}
console.log(repeat("ana", 4));

//Scrieti o functe care accepta ca argument venitul anual al unui angajat in dolari si
//calculeaza taxa corespunzatoare fol urm criterii:
// daca angajatul castiga anual o suma<30000-taxa 0
//50-99 - 35
// 1000 - 40%

function taxe(n) {
  var taxa;
  if (n <= 30000) { return "Taxa este de 0%";}
  if (n > 30001 && n<50000) {
    taxa= n*0.15;
    return "Taxa este de 15%" + taxa;}
  if (n >=50001 && n<=99999) {return "Taxa este de 35%";} 
  return calculateTax(n, 40)
}

console.log(taxe(35000));
console.log(taxe(999999));
console.log(taxe(35000));


function calculateTax(n,tax){
  return "Taxa este "+ tax
}

var cantareti = [
  "Dua Lipa",
  "Gabriel Cotabita",
  "Nu am",
  "The Weeknd",
  "Elena Gheorghe",
  "Cantaret 3",
  "Cantaret 4",
]
console.log(cantareti);
console.log(cantareti.indexOf("Gabriel Cotabita"));
console.log(cantareti)


const result =  cantareti.findIndex(function(element)
{return element.name === "Gabriel Cotabita"

});

console.log("Result= ", result);
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const result3 = numbers.filter(function(element) {
  return element % 2 === 0;});
console.log("Result3 = ", result3);
