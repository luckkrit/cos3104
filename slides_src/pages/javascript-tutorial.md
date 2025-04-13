---
layout: cover
---

# Javascript Tutorial

---

# JavaScript

- ตัวโค๊ดของ JavaScript จะอยู่ใน tag ที่ชื่อว่า `script` จะอยู่ใน ส่วนของ `head`  หรือ `body` ของ `html` ก็ได้

```html
<!DOCTYPE html>
<html>
<head>
<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>
<body>

<h2>Demo JavaScript in Head</h2>

<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>
</body>
</html>
```

---

- ส่วน body
```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>

<h2>Demo JavaScript in Head</h2>

<p id="demo2">A Paragraph</p>
<button type="button" onclick="myFunction2()">Try it</button>
<script>
function myFunction2() {
  document.getElementById("demo2").innerHTML = "Paragraph changed.";
}
</script>
</body>
</html>

```
---

- การอ้างอิงไฟล์ JavaScript ที่ชื่อว่า `myScript.js` อันนี้จะไม่มี path แสดงว่าจะค้นหาจากในโฟลเดอร์เดียวกัน

```html
<!DOCTYPE html>
<html>
<head>
<script src="myScript.js"></script>
</head>
<body>
<h2>Demo JavaScript in Head</h2>
<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>
</body>
</html>
```

- `myScript.js`

```js
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
```

---

- การอ้างอิงไฟล์ผ่าน URL

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://www.w3schools.com/js/myScript.js"></script>
</head>
<body>
<h2>Demo JavaScript in Head</h2>
<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>
</body>
</html>
```

---

- การอ้างอิงไฟล์แบบ path

```html
<!DOCTYPE html>
<html>
<head>
<script src="/js/myScript.js"></script>
</head>
<body>
<h2>Demo JavaScript in Head</h2>
<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>
</body>
</html>
```

---
layout: section
---

# Output การแสดงผล

---

- แสดงผลลัพธ์ไปยัง `HTML Element` โดยใช้ `innerHTML` หรือ `innerText`
- `innerHTML` จะแสดงผลลัพธ์เป็น `HTML Element` อีกที ดังนั้น `h2` จึงเรียกว่า `child` ส่วน `p` เป็น `parent`

```html
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My First Paragraph</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "<h2>Hello World</h2>";
</script>

</body>
</html>
```


---

- `innerText` จะแสดงผลลัพธ์เป็น `text`

```html
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My First Paragraph</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerText = "Hello World";
</script>

</body>
</html>
```

---

- ใช้ `document.write()`

```html
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
document.write(5 + 6);
</script>

</body>
</html>
```

---

- ใช้ `window.alert()` หรือ `alert()`

```html
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
window.alert(5 + 6);
</script>

</body>
</html>
```

---

- ใช้ `console.log()`

```html
<!DOCTYPE html>
<html>
<body>

<script>
console.log(5 + 6);
</script>

</body>
</html>
```

---

- การ `print` เพื่อพิมพ์ผ่านเครื่อง `Printer` หรือบันทึกเป็น `pdf`

```html
<!DOCTYPE html>
<html>
<body>

<button onclick="window.print()">Print this page</button>

</body>
</html>
```

---
layout: section
---

# Statement

---

- การประกาศตัวแปร (แบบเก่า)

- global variable

```js {monaco-run}
var a = 0;
function myFunction(){
    console.log(a)
}
myFunction()
console.log(a)
```

---

- local variable (ใช้ได้แค่ภายใน function)

```js {monaco-run}
function myFunction(){
    var a = 0;
}
myFunction()
console.log(a)
```

---

- การประกาศตัวแปรสมัยใหม่ 

- global variable

```js {monaco-run}

let a = 0;
function myFunction(){
    console.log(a)
}
myFunction()

```

---

- local variable

```js {monaco-run}
function myFunction(){
    let a = 0;
}
myFunction()
console.log(a)
```

---

- การใช้ const

```js {monaco-run}
const a = 0;
a = 2;

```

---

# ข้อเสียของการใช้ var

```js {monaco-run}
var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here x is 2
```

---

# ถ้าใช้ let จะแก้ปัญหานี้ได้ 

```js {monaco-run}

let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

// Here x is 10
```

---

# แต่ถ้าประกาศ let ซ้ำใน scope เดียวกันจะมีปัญหา

```js {monaco-run}

let x = 10;

let x = 2;
```

---

# Hoisting

- การใช้งานตัวแปรก่อนที่จะมีการประกาศตัวแปร จะใช้ได้เฉพาะกับพวก var

```js {monaco-run}
carName = "Volvo";
var carName;
```

---

# Data type

```js {monaco-run}
// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

```

---

# Functions

- ตัวแปร value จะได้ผลลัพธ์ของฟังก์ชั่น toCelsius

```js {monaco-run}
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius(70);
console.log(value)
```

---

- ตัวแปร f แทนฟังก์ชั่น object

```js {monaco-run}


function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let f = toCelsius;
console.log(f)

```

---

# Object

- Object literal คือมี list ของ name:value ที่อยู่ในปีกกา `{}`

```js {monaco-run}

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

console.log(person)
```

---

- เพิ่ม Properties หรือ attribute ทีหลังได้

```js {monaco-run}
// Create an Object
const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

console.log(person)
```

---

- ใช้ `new Object`

```js {monaco-run}

// Create an Object
const person = new Object();

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

console.log(person)

```


---

# Accessing JavaScript Properties

```js {monaco-run}
const person = new Object();

// objectName.property
let age = person.age;

//objectName["property"]
let age2 = person["age"];

//objectName[expression]
const x = 'age';
let age3 = person[x];

```


---

# การเพิ่ม - ลบ Properties

- การเพิ่ม แบบ 1

```js {monaco-run}


const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

person.skin ='black'
console.log(person)

```

---

- การเพิ่มแบบ 2

```js {monaco-run}

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

person['skin'] = 'black'
console.log(person)

```

---

- การลบ แบบ 1

```js {monaco-run}
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

delete person.age;

console.log(person)
```

---

- การลบ แบบ 2

```js {monaco-run}

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

delete person["age"];
console.log(person)
```

---

# Nested Object

```js {monaco-run}
myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}

console.log(myObj.myCars.car2)
console.log(myObj.myCars["car2"])
console.log(myObj["myCars"]["car2"])

let p1 = "myCars";
let p2 = "car2";
console.log(myObj[p1][p2])

```


---

# Javascript Object Method


```js {monaco-run}
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName())
```

---

- การเพิ่มฟังก์ชั่นใน Object


```js {monaco-run}
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
};
person.name = function () {
  return (this.firstName + " " + this.lastName).toUpperCase();
};

console.log(person.name())

```

---

# การ display object

<Sandpack
theme="light" 
template="vanilla" 
:files="{
        '/index.js': `const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};
document.getElementById('app')
.innerHTML = person;
`,
        '/index.html': `
<!DOCTYPE html>
<html lang='en'>
<head>
	<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
	<meta name='description' content='' />
	<meta name='author' content='' />
	<meta name='viewport' content='user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width' />
	<title></title>
	</head>
<body>
<div id='app'>
</div>
</body>
</html>`
      }"
:options="{
    showConsole: true,
     editorHeight: 430,
        editorWidthPercentage: 40,
      }"
      :custom-setup="{
        dependencies: {
          'jquery': 'latest',
        }
      }"
/>

---


<Sandpack
theme="light" 
template="vanilla" 
:files="{
        '/index.js': `const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};
document.getElementById('app')
.innerHTML = person.name + ',' + person.age + ',' + person.city;
`,
        '/index.html': `
<!DOCTYPE html>
<html lang='en'>
<head>
	<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
	<meta name='description' content='' />
	<meta name='author' content='' />
	<meta name='viewport' content='user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width' />
	<title></title>
	</head>
<body>
<div id='app'>
</div>
</body>
</html>`
      }"
:options="{
    showConsole: true,
     editorHeight: 430,
        editorWidthPercentage: 40,
      }"
      :custom-setup="{
        dependencies: {
          'jquery': 'latest',
        }
      }"
/>

---

- For each loop


<Sandpack
theme="light" 
template="vanilla" 
:files="{
        '/index.js': `const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};
let text = '';
for (let x in person) {
  text += person[x] + ' ';
};
document.getElementById('app')
.innerHTML = text;
`,
        '/index.html': `
<!DOCTYPE html>
<html lang='en'>
<head>
	<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
	<meta name='description' content='' />
	<meta name='author' content='' />
	<meta name='viewport' content='user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width' />
	<title></title>
	</head>
<body>
<div id='app'>
</div>
</body>
</html>`
      }"
:options="{
    showConsole: true,
     editorHeight: 430,
        editorWidthPercentage: 40,
      }"
      :custom-setup="{
        dependencies: {
          'jquery': 'latest',
        }
      }"
/>

---

- Object.values()


<Sandpack
theme="light" 
template="vanilla" 
:files="{
        '/index.js': `const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};
const myArray = Object.values(person);
document.getElementById('app')
.innerHTML = myArray;
`,
        '/index.html': `
<!DOCTYPE html>
<html lang='en'>
<head>
	<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
	<meta name='description' content='' />
	<meta name='author' content='' />
	<meta name='viewport' content='user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width' />
	<title></title>
	</head>
<body>
<div id='app'>
</div>
</body>
</html>`
      }"
:options="{
    showConsole: true,
     editorHeight: 430,
        editorWidthPercentage: 40,
      }"
      :custom-setup="{
        dependencies: {
          'jquery': 'latest',
        }
      }"
/>


---

- Object.entries()


<Sandpack
theme="light" 
template="vanilla" 
:files="{
        '/index.js': `const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};
const myArray = Object.entries(person);
document.getElementById('app')
.innerHTML = myArray;
console.log(myArray)
`,
        '/index.html': `
<!DOCTYPE html>
<html lang='en'>
<head>
	<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
	<meta name='description' content='' />
	<meta name='author' content='' />
	<meta name='viewport' content='user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width' />
	<title></title>
	</head>
<body>
<div id='app'>
</div>
</body>
</html>`
      }"
:options="{
    showConsole: true,
     editorHeight: 430,
        editorWidthPercentage: 40,
      }"
      :custom-setup="{
        dependencies: {
          'jquery': 'latest',
        }
      }"
/>

---


<Sandpack
theme="light" 
template="vanilla" 
:files="{
        '/index.js': `const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};
let text = '';
for (let [key, value] of Object.entries(person)) {
  text += key + ': ' + value + '<br>';
}
document.getElementById('app')
.innerHTML = text;
console.log(text)
`,
        '/index.html': `
<!DOCTYPE html>
<html lang='en'>
<head>
	<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
	<meta name='description' content='' />
	<meta name='author' content='' />
	<meta name='viewport' content='user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width' />
	<title></title>
	</head>
<body>
<div id='app'>
</div>
</body>
</html>`
      }"
:options="{
    showConsole: true,
     editorHeight: 430,
        editorWidthPercentage: 40,
      }"
      :custom-setup="{
        dependencies: {
          'jquery': 'latest',
        }
      }"
/>

---

- JSON.stringify() แปลง Object javascript เป็น string ของ json


<Sandpack
theme="light" 
template="vanilla" 
:files="{
        '/index.js': `const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};
let text = JSON.stringify(person)
document.getElementById('app')
.innerHTML = text;
console.log(text)
`,
        '/index.html': `
<!DOCTYPE html>
<html lang='en'>
<head>
	<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
	<meta name='description' content='' />
	<meta name='author' content='' />
	<meta name='viewport' content='user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width' />
	<title></title>
	</head>
<body>
<div id='app'>
</div>
</body>
</html>`
      }"
:options="{
    showConsole: true,
     editorHeight: 430,
        editorWidthPercentage: 40,
      }"
      :custom-setup="{
        dependencies: {
          'jquery': 'latest',
        }
      }"
/>


---

- JSON.parse() แปลง JSON ที่เป็น string ให้กลายเป็น JavascriptObject


<Sandpack
theme="light" 
template="vanilla" 
:files="{
        '/index.js': `const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};
let text = JSON.stringify(person)
document.getElementById('app')
.innerHTML = text;
console.log(text)
const person2 = JSON.parse(text)
console.log(person2)
`,
        '/index.html': `
<!DOCTYPE html>
<html lang='en'>
<head>
	<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
	<meta name='description' content='' />
	<meta name='author' content='' />
	<meta name='viewport' content='user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width' />
	<title></title>
	</head>
<body>
<div id='app'>
</div>
</body>
</html>`
      }"
:options="{
    showConsole: true,
     editorHeight: 430,
        editorWidthPercentage: 40,
      }"
      :custom-setup="{
        dependencies: {
          'jquery': 'latest',
        }
      }"
/>


---

# Object Constructor


<Sandpack
theme="light" 
template="vanilla" 
:files="{
        '/index.js': `function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
const myFather = new Person('John', 'Doe', 50, 'blue');
const myMother = new Person('Sally', 'Rally', 48, 'green');
const mySister = new Person('Anna', 'Rally', 18, 'green');
const mySelf = new Person('Johnny', 'Rally', 22, 'green');
console.log(myFather)
console.log(myMother)
console.log(mySister)
console.log(mySelf)
`,
        '/index.html': `
<!DOCTYPE html>
<html lang='en'>
<head>
	<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
	<meta name='description' content='' />
	<meta name='author' content='' />
	<meta name='viewport' content='user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width' />
	<title></title>
	</head>
<body>
<div id='app'>
</div>
</body>
</html>`
      }"
:options="{
    showConsole: true,
     editorHeight: 430,
        editorWidthPercentage: 40,
      }"
      :custom-setup="{
        dependencies: {
          'jquery': 'latest',
        }
      }"
/>

---

- Property Default Values


<Sandpack
theme="light" 
template="vanilla" 
:files="{
        '/index.js': `function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nationality = 'English';
}
const myFather = new Person('John', 'Doe', 50, 'blue');
const myMother = new Person('Sally', 'Rally', 48, 'green');
const mySister = new Person('Anna', 'Rally', 18, 'green');
const mySelf = new Person('Johnny', 'Rally', 22, 'green');
console.log(myFather)
console.log(myMother)
console.log(mySister)
console.log(mySelf)
`,
        '/index.html': `
<!DOCTYPE html>
<html lang='en'>
<head>
	<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
	<meta name='description' content='' />
	<meta name='author' content='' />
	<meta name='viewport' content='user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width' />
	<title></title>
	</head>
<body>
<div id='app'>
</div>
</body>
</html>`
      }"
:options="{
    showConsole: true,
     editorHeight: 430,
        editorWidthPercentage: 40,
      }"
      :custom-setup="{
        dependencies: {
          'jquery': 'latest',
        }
      }"
/>

---

- Adding a Property to an Object

<Sandpack
theme="light" 
template="vanilla" 
:files="{
        '/index.js': `function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nationality = 'English';
}
const myFather = new Person('John', 'Doe', 50, 'blue');
const myMother = new Person('Sally', 'Rally', 48, 'green');
const mySister = new Person('Anna', 'Rally', 18, 'green');
const mySelf = new Person('Johnny', 'Rally', 22, 'green');
// add property to object, myFather
myFather.car = 'Volvo'
console.log(myFather)
console.log(myMother)
console.log(mySister)
console.log(mySelf)
`,
        '/index.html': `
<!DOCTYPE html>
<html lang='en'>
<head>
	<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
	<meta name='description' content='' />
	<meta name='author' content='' />
	<meta name='viewport' content='user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width' />
	<title></title>
	</head>
<body>
<div id='app'>
</div>
</body>
</html>`
      }"
:options="{
    showConsole: true,
     editorHeight: 430,
        editorWidthPercentage: 40,
      }"
      :custom-setup="{
        dependencies: {
          'jquery': 'latest',
        }
      }"
/>


---

- Add property to a constructor by `prototype`


<Sandpack
theme="light" 
template="vanilla" 
:files="{
        '/index.js': `function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nationality = 'English';
}
const myFather = new Person('John', 'Doe', 50, 'blue');
const myMother = new Person('Sally', 'Rally', 48, 'green');
const mySister = new Person('Anna', 'Rally', 18, 'green');
const mySelf = new Person('Johnny', 'Rally', 22, 'green');
// add property to constructor, Person by prototype
Person.prototype.car = 'Unknown car'
console.log(myFather)
console.log(myMother)
console.log(mySister)
console.log(mySelf)
`,
        '/index.html': `
<!DOCTYPE html>
<html lang='en'>
<head>
	<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
	<meta name='description' content='' />
	<meta name='author' content='' />
	<meta name='viewport' content='user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width' />
	<title></title>
	</head>
<body>
<div id='app'>
</div>
</body>
</html>`
      }"
:options="{
    showConsole: true,
     editorHeight: 430,
        editorWidthPercentage: 40,
      }"
      :custom-setup="{
        dependencies: {
          'jquery': 'latest',
        }
      }"
/>


---

# HTML Events

- ขึ้นต้นด้วย on เช่น onclick, ondbclick

<Ex1/>

---

- ใช้ this ที่หมายถึงตัวมันเอง

<Ex2 />


---

- ใช้ function

<Sandpack
theme="light" 
template="vite" 
:files="{
        '/index.js': `function displayDate(button){
  button.innerHTML = Date()
}
        `,
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
		<button onClick='displayDate(this)'>
		click on me		
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

<!--

```html
<!DOCTYPE html>
<html>
<body>
<h1>JavaScript HTML Events</h1>
<h2>The onclick Attribute</h2>

<p>Click the button to display the date.</p>
<button onclick="displayDate()">The time is?</button>

<script>
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
</script>

<p id="demo"></p>

</body>
</html> 

```
-->

---

# Javascript String

```js {monaco-run}
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length)
```

---

# Escape character

|Code|Result|
|:-:|:-:|
|\\'|'|
|\\"|"|
| \\\ |\\ |


```js {monaco-run}

let text = "We are the so-called \"Vikings\" from the north.";
let text2 = 'It\'s alright.';
let text3 = "The character \\ is called backslash.";

console.log(text)
console.log(text2)
console.log(text3)
```

---

# Template string

```js {monaco-run}
const dog = 'dog'
let text =
`The quick
brown fox
jumps over
the lazy ${dog}`;

console.log(text)
```

---

# Compare string

```js {monaco-run}
const string1 = "fcc"
const string2 = "fcc"
const string3 = "Fcc"

console.log(string1 === string2)
// true

console.log(string1 < string3)
// false
```

---

# Extract string

- The at(position) Method
- The charAt(position) Method
- The charCodeAt(position) Method
- Using property access [] like in arrays


---

- The charAt(position) Method

```js {monaco-run}
let text = "HELLO WORLD";
let char = text.charAt(0);

console.log(char)
```

---

- The charCodeAt(position) Method


```js {monaco-run}
let text = "HELLO WORLD";
let char = text.charCodeAt(0);

console.log(char)
```

---

- The at(position) Method
- Now you can use myString.at(-2) instead of charAt(myString.length-2).

```js {monaco-run}
const name = "Krit Chomaitong";
let letter = name.at(2);

console.log(letter)
```

---

- Using property access [] like in arrays

***Property access might be a little unpredictable:***

***- It makes strings look like arrays (but they are not)***

***- If no character is found, [ ] returns undefined, while charAt() returns an empty string.***

***- It is <u>read only</u>. str[0] = "A" gives no error (but does not work!)***


```js {monaco-run}
const name = "Krit Chomaitong";
let letter = name[2];

console.log(letter)


name[2] = 'A'
console.log(name) // not working
```

---

# Extracting String Parts

- slice(start, end)
- substring(start, end)
- substr(start, length)

---

- slice, The method takes 2 parameters: start position, and end position (end not included).

```js {monaco-run}
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);

console.log(part)

```

---

- slice can omit second parameter

```js {monaco-run}
let text = "Apple, Banana, Kiwi";
let part = text.slice(7);

console.log(part)

```

---

- If a parameter is negative, the position is counted from the end of the string:

```js {monaco-run}

let text = "Apple, Banana, Kiwi";
let part = text.slice(-1);

console.log(part)

part = text.slice(-12);
console.log(part)

```

---

- This example slices out a portion of a string from position -12 to position -6:

```js {monaco-run}
let text = "Apple, Banana, Kiwi";
let part = text.slice(-12, -6);

console.log(part)
```

---

- substring() is similar to slice().

The difference is that start and end values less than 0 are treated as 0 in substring().

```js {monaco-run}
let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);

console.log(part)

part = str.substring(-1, -4)
console.log(part) // empty string


part = str.substring(7)
console.log(part)

```

---

- substr() is similar to slice(). อันนี้ไม่ใช้กันแล้ว (DEPRECATED)

The difference is that the second parameter specifies the length of the extracted part.

```js {monaco-run}
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6);

console.log(part)

```

---

# UPPERCASE กับ LOWER CASE

```js {monaco-run}
let text1 = "Hello World!";
let text2 = text1.toUpperCase();

console.log(text2)

text2 = text1.toLowerCase();  // text2 is text1 converted to lower
console.log(text2)
```

---

# Concat

- concat() joins two or more strings:

```js {monaco-run}
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);

console.log(text3)

let text = "Hello" + " " + "World!";
console.log(text)

text = "Hello".concat(" ", "World!");
console.log(text)

```

---

# Trim

- The trim() method removes whitespace from both sides of a string:

```js {monaco-run}
let text1 = "      Hello World!      ";
let text2 = text1.trim();

console.log(text2)
```

---

- The trimStart() method works like trim(), but removes whitespace only from the start of a string.

```js {monaco-run}
let text1 = "     Hello World!     ";
let text2 = text1.trimStart();

console.log(text2)
```

- The trimEnd() method works like trim(), but removes whitespace only from the end of a string.

```js {monaco-run}
let text1 = "     Hello World!     ";
let text2 = text1.trimEnd();

console.log(text2)
```

---

# Pad

- The padStart() method pads a string from the start.

It pads a string with another string (multiple times) until it reaches a given length.

```js {monaco-run}
// Pad a string with "0" until it reaches the length 4:

let text = "5";
let padded = text.padStart(4,"0");

console.log(padded)


// Pad a string with "x" until it reaches the length 4:
text = "5";
padded = text.padStart(4,"x");

console.log(padded)


```

---

```js {monaco-run}

/**
The padStart() method is a string method.
To pad a number, convert the number to a string first.
See the example below.
 */
let numb = 5;
text = numb.toString();
padded = text.padStart(4,"0");

console.log(padded)
```

---

- The padEnd() method pads a string from the end.

It pads a string with another string (multiple times) until it reaches a given length.

```js {monaco-run}
let text = "5";
let padded = text.padEnd(4,"0");

console.log(padded)

text = "5";
padded = text.padEnd(4,"x");

console.log(padded)
```

---

```js {monaco-run}
/** 
The padEnd() method is a string method.
To pad a number, convert the number to a string first.
See the example below.
*/

let numb = 5;
let text = numb.toString();
let padded = text.padEnd(4,"0");

console.log(padded)

```

---

# Repeat

- The repeat() method returns a string with a number of copies of a string.

- The repeat() method returns a new string.

- The repeat() method does not change the original string.

```js {monaco-run}
let text = "Hello world!";
let result = text.repeat(2);

console.log(result)

text = "Hello world!";
result = text.repeat(4);

console.log(result)
```

---

# Replace

```js {monaco-run}
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

console.log(newText)
```


---

- The replace() method does not change the string it is called on.

- The replace() method returns a new string.

- The replace() method replaces only the first match

- If you want to replace all matches, use a regular expression with the /g flag set. See examples below.


```js {monaco-run}
// By default, the replace() method replaces only the first match:
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

console.log(newText)

// By default, the replace() method replaces only the first match:
text = "Please visit Microsoft!";
newText = text.replace("MICROSOFT", "W3Schools");

console.log(newText)

```

---

- To replace case insensitive, use a regular expression with an /i flag (insensitive): 

```js {monaco-run}
let text = "Please visit Microsoft!";
let newText = text.replace(/MICROSOFT/i, "W3Schools");

console.log(newText)

```

- To replace all matches, use a regular expression with a /g flag (global match):

```js {monaco-run}
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "W3Schools");

console.log(newText)
```

---

- replaceAll

```js {monaco-run}
let text = "Cats Cats cats cats"
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");

console.log(text)
```

- The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.
- If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.

```js {monaco-run}

let text = "Cats Cats cats cats"
text = text.replaceAll(/Cats/g,"Dogs");
text = text.replaceAll(/cats/g,"dogs");

console.log(text)

```

---

# Converting a String to an Array

- split

```js {monaco-run}
let text = "a,b,c";
let s = text.split(",")    // Split on commas
console.log(s)

text = "d e f"
s = text.split(" ")    // Split on spaces
console.log(s)

text = "g|h|i"
s = text.split("|")   
console.log(s)
```

---

```js {monaco-run}
// If the separator is omitted, the returned array will contain the whole string in index [0].
let text = "a,b,c";
s = text.split()
console.log(s)

// If the separator is "", the returned array will be an array of single characters:
s = text.split("")
console.log(s)

```  