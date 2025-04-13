---
layout: cover
transition: fade
---

# Javascript Tutorial2

---

# Array

- แบบ 1

```js {monaco-run}
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars)
```

- แบบ 2

```js {monaco-run}
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
console.log(cars)
```

---

- แบบ 3

```js {monaco-run}
const cars = new Array("Saab", "Volvo", "BMW");
console.log(cars)
```

---

- Access array

```js {monaco-run}
const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];
console.log(car)

cars[0] = "Opel";
car = cars[0]
console.log(car)

car = cars[cars.length-1]
console.log(car)
```

---

- Convert array to string

```js {monaco-run}
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString()) 
```

---

- Array type is object

```js {monaco-run}
const a = []
console.log(typeof a)
```

- Elements of array can be any type

```js {monaco-run}
const person = ["John", "Doe", 46];
console.log(person)

```

---

- Length of array

```js {monaco-run}
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
console.log(length)
```

---

- Loop an array

- แบบ 1

```js {monaco-run}

const fruits = ["Banana", "Orange", "Apple", "Mango"];
for(let i=0;i<fruits.length;i++){
  console.log(fruits[i])
}
```

---


- แบบ 2

```js {monaco-run}
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.forEach(function(fruit){
  console.log(fruit)
})

```

---

- Check if variable is array

- แบบ 1

```js {monaco-run}
const fruits = ["Banana", "Orange", "Apple"];
let t = Array.isArray(fruits);
console.log(t)

```

- แบบ 2

```js {monaco-run}
const fruits = ["Banana", "Orange", "Apple"];

let t = (fruits instanceof Array);
console.log(t)
```

---

- Nested Array

```js
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}
```

---

- Loop nested array

```js {monaco-run}
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}
let x = ''
for (let i in myObj.cars) {
  x += "<h1>" + myObj.cars[i].name + "</h1>";
  for (let j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j];
  }
}

console.log(x)

```