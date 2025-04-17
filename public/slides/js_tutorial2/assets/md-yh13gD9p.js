import{r as s,o as r,c,k as m,e,l,q as p,s as u,I as n}from"./modules/vue-wP01RIp5.js";import{I as d}from"./slidev/default-DkSUTuy3.js";import{u as h,f}from"./slidev/context-DEZ5V9ny.js";import"./index-CZpm5sSH.js";import"./monaco/bundled-types-Vaxz-4xS.js";import"./modules/file-saver-BirHVELW.js";import"./modules/shiki-C5V0c2xj.js";const w={__name:"javascript-tutorial2.md__slidev_38",setup(y){const{$slidev:v,$nav:x,$clicksContext:o,$clicks:_,$page:b,$renderContext:g,$frontmatter:i}=h();return o.setup(),(k,t)=>{const a=s("Sandpack");return r(),c(d,p(u(n(f)(n(i),37))),{default:m(()=>[t[0]||(t[0]=e("ul",null,[e("li",null,"Example Sort")],-1)),l(a,{theme:"light",template:"vite",files:{"/index.js":`const points = [40, 100, 1, 5, 25, 10];
document.getElementById('app').innerHTML = points;
function myFunction1() {
  points.sort();
  document.getElementById('app').innerHTML = points;
}
function myFunction2() {
  points.sort(function(a, b){return a - b});
  document.getElementById('app').innerHTML = points;
}`,"/index.html":`<!DOCTYPE html>
<html lang='en'>
<head>
	<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
	<meta name='description' content='' />
	<meta name='author' content='' />
	<meta name='viewport' content='user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width' />
	<title></title>
	</head>
<body>
<button onclick='myFunction1()'>Sort Alphabetically</button>
<button onclick='myFunction2()'>Sort Numerically</button>
    <div id='app'></div>
    <script src='/index.js'><\/script>
</body>
</html>`},options:{showConsole:!0,editorHeight:400,editorWidthPercentage:40},"custom-setup":{dependencies:{jquery:"latest"}}})]),_:1},16)}}};export{w as default};
