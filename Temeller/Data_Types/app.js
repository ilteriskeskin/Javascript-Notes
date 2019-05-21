// Değişken oluşturma

var a = 20;
var b = 10;
var c = 30;

console.log(a, b, c);

// Primitive (İlkel) ve Referance Veri Tipleri

var a = 10; // Number veri tipi
var b = 3.14; // Number veri tipi
console.log(typeof a);
console.log(typeof b);

var name = "İlteriş"; // String veri tipi
console.log(name)
console.log(typeof name);

var a = true; // Boolean veri tipi
console.log(a);
console.log(typeof a);

var a = null; // Null veri tipi
console.log(a);
console.log(typeof a);

var d; // Undefined veri tipi
console.log(d);
console.log(typeof d);

var numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(typeof numbers);

var person = { 
    name: "Ali İlteriş",
    age: 21,
}

console.log(person);
console.log(typeof person);

var date = new Date();
console.log(date);
console.log(typeof date);

var merhaba = function(){
    console.log('Merhaba');
}

merhaba();
console.log(typeof merhaba);