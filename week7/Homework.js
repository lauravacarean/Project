// min array cu while
/* var myArray = [22, 3, 23, 2, 5, 11];
console.log(myArray);
var min = myArray[0];
var i = 1;
while (i <= myArray.length) {
  if (myArray[i] < min) {
    min = myArray[i];
  }
  i++;
}
console.log(min); */

// min array cu for
/* var myArray = [22, 3, 23, 2, 5, 11];
console.log(myArray);
var min = myArray[0];
for (var i = 1; i <= myArray.length; i++) {
  if (myArray[i] < min) {
    min = myArray[i];
  }
}
console.log(min); */

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
  de: "Hallo Welt"
};
console.log(Dictionary.it); */

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
/* var myArray = [22, 3, 23, 2, 5, 11];
function minimum() {
  var min = myArray[0];
  for (var i = 1; i <= myArray.length; i++) {
    if (myArray[i] < min) {
      min = myArray[i];
    }
  }
  return min;
}
console.log(minimum(myArray)); */

//3. Prim

function prime(nr) {
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
console.log(prime(21));
console.log(prime(23));