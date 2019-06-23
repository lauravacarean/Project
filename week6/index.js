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
}

//Factorial
var fact = 1;
for (var n = 0; n < 5; n++) {
  console.log((fact = fact * (n + 1)));
} */

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

var x = prompt("Cate grade sunt afara?", "");
var y = prompt("Grade Celsius sau Fahrenheit?", "Raspundeti cu C sau F", "");

var x = Number(x);

if (y == "C" || y == "c") {
  x = (x * 9) / 5 + 32;
  alert(x + "°F");
} else {
  x = ((x - 32) * 5) / 9;
  alert(x + "°C");
}
