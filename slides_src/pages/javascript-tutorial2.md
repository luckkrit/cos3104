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

- Convert array to string จะทำการใส่ `,` พร้อมแปลงเป็น string ให้โดยอัตโนมัติ เมื่อเรียกใช้ toString()

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

---

- Length of array

```js {monaco-run}
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size)

```

- toString() convert array object to string

```js {monaco-run}
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString())
```

---

- Access array using at()

```js {monaco-run}
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);
console.log(fruit)

fruit = fruits[2];
console.log(fruit)
```

---

- join() convert array to string with separator

```js {monaco-run}
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let join = fruits.join(' * ')
console.log(join)
```

- pop() เอาออก ส่วน push() เอาเข้า array

```js {monaco-run}
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop(); // return fruit that was removed
console.log(fruit)
console.log(fruits)

let length = fruits.push("Kiwi");
console.log(length)
console.log(fruits)
```

---

- shift() เอา item ออก คล้าย pop() 

```js {monaco-run}

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.shift();
console.log(fruit)
console.log(fruits)

```

- unshift() เอา item เข้า คล้าย push()

```js {monaco-run}
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.unshift("Lemon");

console.log(length)
console.log(fruits)
```

---

- เปลี่ยนค่าใน array

```js {monaco-run}
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";

console.log(fruits)
```

- หรือใช้ length เพื่อเพิ่มค่าใน array

```js {monaco-run}
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";

console.log(fruits)
```

---

- ใช้ delete เพื่อลบ item ใน array ทำให้เกิด undefined

```js {monaco-run}
const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];

console.log(fruits)

console.log(fruits[0]) // the effect of using delete causes undefined left in array
```

---

- merge array ได้ array ใหม่ ที่มีสมาชิกร่วมกัน

```js {monaco-run}
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myGirls)
console.log(myBoys)
console.log(myChildren)
```

- หรือรวมกันมากกว่า 2 array

```js {monaco-run}
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
console.log(myChildren)
```

---

- รวมกันกับ value อะไรก็ได้

```js {monaco-run}
const arr1 = ["Emil", "Tobias", "Linus"];
const myChildren = arr1.concat("Peter"); 
console.log(myChildren)

```

---

- copyWithin() คือ Copy to index 2, all elements from index 0:

```js {monaco-run}
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);
console.log(fruits)
```

- อีกตัวอย่าง คือ Copy to index 2, the elements from index 0 to 3:

```js {monaco-run}
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.copyWithin(2, 0, 3);
console.log(fruits)
```

---

- flat array

```js {monaco-run}
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr)
```

- flat map

```js {monaco-run}
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap(x => [x, x * 10]);

console.log(newArr)
```

---

- Splicing and Slicing Arrays

  - The splice() method adds new items to an array.

  - The slice() method slices out a piece of an array.

```js {monaco-run}
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits)
```

- How to use?
  - The first parameter (2) defines the position where new elements should be added (spliced in).

  - The second parameter (0) defines how many elements should be removed.

  - The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

  - The splice() method returns an array with the deleted items:

---

```js {monaco-run}
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits)
```

- ใช้ splice ลบ item ออกจาก array ซึ่งข้อดีคือไม่มี undefined เกิดขึ้นเหมือน delete

```js {monaco-run}
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
console.log(fruits)
```

- How to ?

  - The first parameter (0) defines the position where new elements should be added (spliced in).

  - The second parameter (1) defines how many elements should be removed.

  - The rest of the parameters are omitted. No new elements will be added.

---

- toSpliced() คือ return array ใหม่ ไม่กระเทือน array เดิม

```js {monaco-run}
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
console.log(months)
console.log(spliced)
```

---

- slice()

```js {monaco-run}
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(3);
console.log(fruits)
console.log(citrus) // รสเปรี้ยว
```

- มี 2 parameter

```js {monaco-run}
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3); // [1,2]
console.log(citrus)
```

---

- indexOf() หาตำแหน่งของสิ่งที่จะค้น
  - The indexOf() method searches an array for an element value and returns its position.
  - If the item is present more than once, it returns the position of the first occurrence.
  - Array.indexOf() returns -1 if the item is not found.

```js {monaco-run}
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple");
console.log(position)

position = fruits.indexOf('Apple', 1) // 2nd parameter for start search index
console.log(position)
```

---

- lastIndexOf() คล้าย indexOf()

```js {monaco-run}
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.lastIndexOf("Apple");

console.log(position)

position = fruits.lastIndexOf("Apple", -1) // 2nd parameter for start search index from end of array
console.log(position)
```

---

- includes() สำหรับบอกว่า มีสิ่งที่ค้นหาอยู่ใน array หรือไม่

```js {monaco-run}
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let found = fruits.includes("Mango"); // is true
console.log(found)

found = fruits.includes("Bird"); // is true
console.log(found)
```

---

- find() สำหรับค้นหาโดยจะต้องระบุ function สำหรับค้นหาให้
- Note that the function takes 3 arguments:
  - The item value
  - The item index
  - The array itself
```js {monaco-run}
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log(first)
```

---

- findIndex() สำหรับค้นหา index โดยจะต้องระบุ function สำหรับค้นหา
- Note that the function takes 3 arguments:
  - The item value
  - The item index
  - The array itself
```js {monaco-run}
const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(first)
```

---

- findLast() : start from the end of an array and return the value of the first element that satisfies a condition

```js {monaco-run}
const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);
console.log(high)
```

---

- findLastIndex() : คล้าย findLast() แต่ return ตำแหน่งออกมาแทน

```js {monaco-run}
const temp = [27, 28, 30, 40, 42, 35, 30];
let pos = temp.findLastIndex(x => x > 40);

console.log(pos)

```

---

- sort() จากน้อยไปมาก

```js {monaco-run}
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits)
```

- reverse() ไม่ได้เรียงน้อยไปมากหรือมากไปน้อย แค่เรียงสลับจากหลังไปหน้า

```js {monaco-run}
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
console.log(fruits)
```

- เอามาใช้ร่วมกันจะได้เรียงจากมากไปน้อย

```js {monaco-run}
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();
console.log(fruits)
```

---

- toSorted() ข้อดีคือไม่เปลี่ยนแปลงตัว array โดยตรง

```js {monaco-run}
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
console.log(sorted)
console.log(months) // unchanged
```

- toReversed() จะเรียงหลับหลังไปหน้า โดยไม่เปลี่ยนแปลงตัว array โดยตรง

```js {monaco-run}
const months = ["Jan", "Feb", "Mar", "Apr"];
const reversed = months.toReversed();
console.log(reversed)
console.log(months) // unchanged
```

---

- sort() จะเรียงค่าได้ถูกต้องสำหรับ string แต่ number จะต้องใช้ function เข้าช่วย
- น้อยไปมาก

```js {monaco-run}
const points = [40, 100, 1, 5, 25, 10];
const sorted = points.toSorted()
console.log(sorted)
points.sort(function(a, b){return a - b});
console.log(points)
```

- มากไปน้อย

```js {monaco-run}
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
console.log(points)
```

---

- compare() function
  - If the result is negative, a is sorted before b.

  - If the result is positive, b is sorted before a.

  - If the result is 0, no changes are done with the sort order of the two values.

```js
function(a, b){return a - b}
```

---

- Example Sort

<Sandpack
theme="light" 
template="vite" 
:files="{
        '/index.js': `const points = [40, 100, 1, 5, 25, 10];
document.getElementById('app').innerHTML = points;
function myFunction1() {
  points.sort();
  document.getElementById('app').innerHTML = points;
}
function myFunction2() {
  points.sort(function(a, b){return a - b});
  document.getElementById('app').innerHTML = points;
}`,
        '/index.html': `<!DOCTYPE html>
<html lang='en'>
<head>
	<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
	<meta name='description' content='' />
	<meta name='author' content='' />
	<meta name='viewport' content='user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width' />
	<title></title>
	</head>
<body>
    <div id='app'></div>
    <script src='/index.js'></script>
</body>
</html>`}"
:options="{
    showConsole: true,
     editorHeight: 400,
        editorWidthPercentage: 40,
      }"
      :custom-setup="{
        dependencies: {
          'jquery': 'latest',
        },
      }"
/>


