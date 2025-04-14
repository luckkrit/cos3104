import{r as s,o as r,c as i,k as l,e as m,l as c,q as p,s as d,I as t}from"./modules/vue-oDt4sZP3.js";import{I as h}from"./slidev/default-CpHmAiHn.js";import{u,f as y}from"./slidev/context-CMuO678y.js";import"./index-CkE0Kkcc.js";import"./monaco/bundled-types-DTCytUM-.js";import"./modules/file-saver-BirHVELW.js";import"./modules/shiki-Bz_n3rKE.js";const T={__name:"javascript-tutorial.md__slidev_47",setup(g){const{$slidev:f,$nav:v,$clicksContext:n,$clicks:_,$page:C,$renderContext:S,$frontmatter:o}=u();return n.setup(),(x,e)=>{const a=s("Sandpack");return r(),i(h,p(d(t(y)(t(o),46))),{default:l(()=>[e[0]||(e[0]=m("h1",null,"Object Constructor",-1)),c(a,{theme:"light",template:"vanilla",files:{"/index.js":`function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.toString = function(){
    return this.firstName + ' ' + this.lastName + ' ' + this.age + ' '+ this.eyeColor
  }
}
const myFather = new Person('John', 'Doe', 50, 'blue');
const myMother = new Person('Sally', 'Rally', 48, 'green');
const mySister = new Person('Anna', 'Rally', 18, 'green');
const mySelf = new Person('Johnny', 'Rally', 22, 'green');
console.log(myFather)
console.log(myMother)
console.log(mySister)
console.log(mySelf)
document.getElementById('app').innerHTML += myFather + '<br/>'
document.getElementById('app').innerHTML += myMother + '<br/>'
document.getElementById('app').innerHTML += mySister + '<br/>'
document.getElementById('app').innerHTML += mySelf + '<br/>'
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
