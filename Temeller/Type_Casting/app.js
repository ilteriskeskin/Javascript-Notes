let value;

// Veritiplerini String'e Dönüştürme

value = 123;
console.log(value);
console.log(typeof value);

value = String(value);
console.log(value);
console.log(typeof value);

value = true;
console.log(value);
console.log(typeof value);

value = String(value);
console.log(value);
console.log(typeof value);

// Diğer bir yol

value = 10.21;
value = value.toString();
console.log(value);
console.log(typeof value);

// Veritiplerini Number'a Dönüştürme

value = Number("123");
console.log(value);
console.log(typeof value);

value = Number(null);
console.log(value);
console.log(typeof value);

value = parseFloat("21.213");
console.log(value);
console.log(typeof value);

value = parseInt("21");
console.log(value);
console.log(typeof value);

const a = "Deneme" + 55;
console.log(a);
console.log(typeof a);
