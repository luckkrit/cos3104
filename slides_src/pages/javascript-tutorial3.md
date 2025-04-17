---
layout: cover
transition: fade
---

# Javascript Tutorial3

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