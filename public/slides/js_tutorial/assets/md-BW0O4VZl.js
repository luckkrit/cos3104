import{r as s,o as i,c as l,k as m,e as t,l as c,q as d,s as p,I as n}from"./modules/vue-oDt4sZP3.js";import{I as h}from"./slidev/default-C4PzV3xY.js";import{u as y,f as u}from"./slidev/context-tzb2KkSk.js";import"./index-D7pdBhEF.js";import"./monaco/bundled-types-DTCytUM-.js";import"./modules/file-saver-BirHVELW.js";import"./modules/shiki-Bz_n3rKE.js";const T={__name:"javascript-tutorial.md__slidev_49",setup(g){const{$slidev:f,$nav:S,$clicksContext:o,$clicks:v,$page:_,$renderContext:P,$frontmatter:a}=y();return o.setup(),(b,e)=>{const r=s("Sandpack");return i(),l(h,d(p(n(u)(n(a),48))),{default:m(()=>[e[0]||(e[0]=t("ul",null,[t("li",null,"Adding a Property to an Object")],-1)),c(r,{theme:"light",template:"vanilla",files:{"/index.js":`function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nationality = 'English';
  this.toString = function(){
    return this.firstName + ' ' + this.lastName + ' ' + this.age + ' '+ this.eyeColor + ' ' + this.nationality + ' ' + this.car
  }
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
document.getElementById('app').innerHTML += myFather.toString() + '<br/>'
document.getElementById('app').innerHTML += myMother.toString() + '<br/>'
document.getElementById('app').innerHTML += mySister.toString() + '<br/>'
document.getElementById('app').innerHTML += mySelf.toString() + '<br/>'
`,"/index.html":`
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
</html>`},options:{showConsole:!0,editorHeight:430,editorWidthPercentage:40},"custom-setup":{dependencies:{jquery:"latest"}}})]),_:1},16)}}};export{T as default};
