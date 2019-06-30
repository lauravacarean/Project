//1. Creati un array cu 50 elemente;
var myArray = [];
for (var i = 1; i <= 50; i++) {
  myArray.push(i);
}
console.log(myArray);

//2. Afisati primele 10 elemente;
var firstTen = myArray.slice(0,10);
console.log(firstTen);

//3. Adaugati la finalul array-ului un obiect;
myArray.push({ nume: "Vacarean", prenume: "Laura" });
console.log(myArray);

//4. Creati un nou array cu 5 elemente si uniti-l cu myArray;

var arrayFive = [101, 102, 103, 104, 105];
myArray = myArray.concat(arrayFive);
console.log(myArray);

//5. Introduceti un element nou la pozitia a 2a.

myArray.splice(2, 0, "ElementNou");
console.log(myArray);

//6 Truncate

function truncate(x, y) {
  var string = x;
  var result = x.substring(0, y);
  return result;
}
console.log(truncate("ABCDEFGHIJ", 4));
console.log(truncate("ABCDEFGHIJ", 8));
console.log(truncate("ABCDEFGHIJ", 13));

//7. String to Array

function splitWords(x) {
  var result = x.split(" ");
  return result;
}
console.log(splitWords("Ana are mere"));
