---
layout: cover
transition: fade
---

# Javascript Tutorial3

---

# For loop

```js {monaco-run}
for(let i=0;i<5;i++){
  console.log(i)
}
```

---

# While loop

```js {monaco-run}
let i=0;
while(i<5){
  console.log(i)
  i++;
}

```

---

# Do While loop

```js {monaco-run}
let i=0;
do {
  console.log(i)
  i++;
}while(i<5);

```

---

# If - Else If - Else

```js {monaco-run}
let i=0;
if(i==0){
  console.log("i==0")
}else{
  console.log("i!=0")
}

```

```js {monaco-run}
let i = 55
if(i>=40 && i < 50){
  console.log('C')
}else if(i>=50 && i < 60){
  console.log('B')
} else if(i>= 60) {
  console.log('A')
} else {
  console.log('Invalid')
}
```

---

# Switch Case

```js {monaco-run}
let status = 'normal'
switch(status){
  case 'normal':
    console.log('Normal');
    break;
  default:
      console.log('Unknown');
      break;
}

```

---

# For in loop

- Loop over object

```js {monaco-run}
const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}
console.log(text)
```

- Loop over array

```js {monaco-run}
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}
console.log(txt)
```

---

# For of loop

- The JavaScript for of statement loops through the values of an ***iterable object***.
    - It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

- Loop over array

```js {monaco-run}
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}
console.log(text)
```

---

- Loop over 

```js {monaco-run}
let language = "JavaScript";

let text = "";
for (let x of language) {
text += x;
}
console.log(text)
```

- Cannot loop over object

```js {monaco-run}

const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x of person) {
  text += person[x];
}
console.log(text)

```

---

# Iterables

- Iterables are iterable objects (like Arrays).
- Iterables can be accessed with simple and efficient code.
- Iterables can be iterated over with for..of loops

- Ex1

```js {monaco-run}
const name = "Krit";

for (const x of name) {
  console.log(x)
}

```

---

- Ex2

```js {monaco-run}
const letters = ["a","b","c"];

for (const x of letters) {
  console.log(x)
}
```

- Ex3 : iterate over Set

```js {monaco-run}
const letters = new Set(["a","b","c"]);

for (const x of letters) {
    console.log(x)
}
```

---

- Ex4: iterate over Map

```js {monaco-run}
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

for (const x of fruits) {
  console.log(x[0]+' '+x[1])
}
```

---

# The iterator protocol defines how to produce a sequence of values from an object.

- An object becomes an iterator when it implements a next() method.

- The next() method must return an object with two properties:
  - value (the next value)
  - done (true or false)
---

- Ex5: iterator over Object

```js {monaco-run}
// Create an Object
myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 30) {done = true}
      console.log('now '+n+' done = '+done)
      return {value:n, done:done};
    }
  };
}

for (const num of myNumbers) {
  console.log(num)
}
```

---

# Set

- A JavaScript Set is a collection of unique values.
- Each value can only occur once in a Set.
- The values can be of any type, primitive values or objects.

```js {monaco-run}
// Create a Set
const letters = new Set();

// Create Variables
const a = "a";
const b = "b";
const c = "c";

// Add Variables to the Set
letters.add(a);
letters.add(b);
letters.add(c);

console.log(letters)
```

---

- Ex1 : For Of

```js {monaco-run}
// Create a Set
const letters = new Set(["a","b","c"]);

// List all Elements
let text = "";
for (const x of letters) {
  text += x;
}
console.log(text)
```

- Ex2 : has()

```js {monaco-run}
// Create a Set
const letters = new Set(["a","b","c"]);

// Does the Set contain "d"?
let answer = letters.has("d");
console.log(answer)

```

---

- Ex3 : For Each

```js {monaco-run}
// Create a Set
const letters = new Set(["a","b","c"]);

// List all entries
let text = "";
letters.forEach (function(value) {
  text += value;
})
```

- Ex4: values() returns an Iterator object with the values in a Set

```js {monaco-run}
// Create a Set
const letters = new Set(["a","b","c"]);

// Get all Values
const myIterator = letters.values();

// List all Values
let text = "";
for (const entry of myIterator) {
  text += entry;
}
```

---

# Map

- Ex1 : get() return the value of key

```js {monaco-run}
// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

const apples = fruits.get("apples");
console.log(apples)
```

- Ex2 : set() add/change elements to the map

```js {monaco-run}
// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

console.log(fruits)

fruits.set("apples", 100);
console.log(fruits)
```

---

- Ex3 : size property return size of map

```js {monaco-run}
// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

console.log(fruits.size)

```

---

- Ex4 : delete() remove element from the map

```js {monaco-run}

// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

console.log(fruits.size)

fruits.delete("apples")
console.log(fruits)
```

---

- Ex5 : clear() clear the map

```js {monaco-run}
// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

console.log(fruits.size)

fruits.clear()
console.log(fruits)

```

---

- Ex6 : has() returns true if a key exits in a map

```js {monaco-run}

const fruits = new Map();
// Create a Map

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

if(fruits.has("apples")){
  fruits.delete("apples")
}
console.log(fruits)
```

---

- Ex7 : forEach()

```js {monaco-run}
// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
// List all entries
let text = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value;
})
console.log(text)
```

---

- Ex8 : entries() 

```js {monaco-run}

// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
// List all entries
let text = "";
for (const x of fruits.entries()) {
  text += x;
}
console.log(text)
```

---

- Ex9 : keys()

```js {monaco-run}

// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
// List all keys
let text = "";
for (const x of fruits.keys()) {
  text += x;
}
console.log(text)
```

---

- Ex10 : values()

```js {monaco-run}

// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
// List all keys
let text = "";
for (const x of fruits.keys()) {
  text += x;
}
console.log(text)
```

---

- Ex11 : use object as key

```js {monaco-run}
// Create Objects
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a Map
const fruits = new Map();

// Add new Elements to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);

console.log(fruits)
console.log(fruits.get(apples))
const apples2 = {name: 'Apples'}
console.log(fruits.get(apples2))
```