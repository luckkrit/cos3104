import{r,o as i,c as l,k as m,e as t,l as c,q as p,s as d,I as o}from"./modules/vue-oDt4sZP3.js";import{I as u}from"./slidev/default-DWqkq2KQ.js";import{u as h,f as x}from"./slidev/context-Bh5kZKI-.js";import"./index-DY2HdXxe.js";import"./monaco/bundled-types-DTCytUM-.js";import"./modules/file-saver-BirHVELW.js";import"./modules/shiki-Bz_n3rKE.js";const P={__name:"javascript-tutorial.md__slidev_46",setup(f){const{$slidev:v,$nav:g,$clicksContext:n,$clicks:_,$page:k,$renderContext:y,$frontmatter:a}=h();return n.setup(),(C,e)=>{const s=r("Sandpack");return i(),l(u,p(d(o(x)(o(a),45))),{default:m(()=>[e[0]||(e[0]=t("ul",null,[t("li",null,"JSON.parse() แปลง JSON ที่เป็น string ให้กลายเป็น JavascriptObject")],-1)),c(s,{theme:"light",template:"vanilla",files:{"/index.js":`const person = {
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
</html>`},options:{showConsole:!0,editorHeight:430,editorWidthPercentage:40},"custom-setup":{dependencies:{jquery:"latest"}}})]),_:1},16)}}};export{P as default};
