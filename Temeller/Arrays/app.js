let value;
const numbers = [12, 23, 54, 2]; // const numbers = new Array(1, 2, 3, 4);
const langs = ['Python', 'C', 'Java', 'Ruby'];
const a = ['Merhaba', 22, null, undefined, 3.14];

// Uzunluk
value = numbers.length;
console.log(value);

// Indexleme
value = numbers[0];
console.log(value);
value = numbers[2];
console.log(value);

// Herhangi bir indexteki değeri değiştirme

numbers[2] = 1000;
value = numbers;
console.log(value);

// Index Of

value = numbers.indexOf(1000);
console.log(value);

// Arrayin sonuna değer ekleme

numbers.push(2500);
console.log(numbers);

// Arrayin başına değer ekleme
numbers.unshift(3000);
console.log(numbers);

// Arrayin sonundan değer silme

numbers.pop();
console.log(numbers);

// Arrayin başından değer silme

numbers.shift();
console.log(numbers);

// Reverse

numbers.reverse();
console.log(numbers);

// Arrayi sıralama

numbers.sort();
console.log(numbers);

value = numbers.sort(function(x,y){
    return x - y;
});
console.log(value);

// Arrayin belirli bir kısmını silme

numbers.splice(0,3);
console.log(numbers);