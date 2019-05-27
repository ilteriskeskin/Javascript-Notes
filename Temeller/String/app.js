let value;

const firstName = "Ali";
const lastName = "İlteriş";

const langs = "Python, C++";

value = firstName + lastName;
console.log(value);

value = firstName + " " + lastName
console.log(value);

value = "Ali İlteriş";
console.log(value);
value = value + "Keskin";
value += "Keskin";
console.log(value);

value = firstName.length;
console.log(value);

value = firstName.concat(" ", lastName, " ", "Keskin");
console.log(value);

value = firstName.toLowerCase();
console.log(value);

value = firstName[0];
console.log(value);
value = firstName[2];
console.log(value);
value = firstName[firstName.length - 1];
console.log(value);

// Index Of

value = firstName.indexOf("l");
console.log(value);

// Char At

value = firstName.charAt(0);
console.log(value);
value = firstName.charAt(firstName.length - 1);
console.log(value);

// Split

value = langs.split(",");
console.log(value);

// Replace

value = langs.replace("C++", "Rust")
console.log(value);

// Includes

value = langs.includes("java");
console.log(value);
value = langs.includes("Python");
console.log(value);