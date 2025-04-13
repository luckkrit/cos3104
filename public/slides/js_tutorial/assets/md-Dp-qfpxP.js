import{r,o as l,c as i,k as c,e,a6 as m,l as p,q as d,s as u,I as o}from"./modules/vue-BdQgKk4Z.js";import{I as h}from"./slidev/default-CXR_vl1j.js";import{u as y,f}from"./slidev/context-DnIYiTBd.js";import"./index-BQ7sz3S6.js";import"./monaco/bundled-types-CeFFvgin.js";import"./modules/file-saver-BirHVELW.js";import"./modules/shiki-BnbKdv1-.js";const T={__name:"javascript-tutorial.md__slidev_49",setup(g){const{$slidev:v,$nav:P,$clicksContext:n,$clicks:_,$page:x,$renderContext:w,$frontmatter:a}=y();return n.setup(),(C,t)=>{const s=r("Sandpack");return l(),i(h,d(u(o(f)(o(a),48))),{default:c(()=>[t[0]||(t[0]=e("ul",null,[e("li",null,[m("Add property to a constructor by "),e("code",null,"prototype")])],-1)),p(s,{theme:"light",template:"vanilla",files:{"/index.js":`function Person(first, last, age, eye) {
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
