import{r as i,o as s,c,k as m,e,g as l,l as p,q as d,s as u,I as n}from"./modules/vue-oDt4sZP3.js";import{I as h}from"./slidev/default-C4PzV3xY.js";import{u as y,f as v}from"./slidev/context-tzb2KkSk.js";import"./index-D7pdBhEF.js";import"./monaco/bundled-types-DTCytUM-.js";import"./modules/file-saver-BirHVELW.js";import"./modules/shiki-Bz_n3rKE.js";const F={__name:"javascript-tutorial.md__slidev_6",setup(b){const{$slidev:f,$nav:g,$clicksContext:o,$clicks:C,$page:k,$renderContext:_,$frontmatter:a}=y();return o.setup(),(j,t)=>{const r=i("Sandpack");return s(),c(h,d(u(n(v)(n(a),5))),{default:m(()=>[t[0]||(t[0]=e("ul",null,[e("li",null,"การอ้างอิงไฟล์แบบ path")],-1)),l(` 

<CodeBlockWrapper v-bind="{}" :ranges='[]'>

\`\`\`html
<!DOCTYPE html>
<html>
<head>
<script src="/js/myScript.js"><\/script>
</head>
<body>
<h2>Demo JavaScript in Head</h2>
<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>
</body>
</html>
\`\`\`

</CodeBlockWrapper>
`),p(r,{theme:"light",template:"vite",files:{"/js/myScript.js":{code:`function myFunction() {
  document.getElementById('demo').innerHTML = 'Paragraph changed.';
}`,readOnly:!0},"/index.html":{code:`<!DOCTYPE html>
<html lang='en'>
<head>
	<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
	<meta name='description' content='' />
	<meta name='author' content='' />
	<meta name='viewport' content='user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width' />
	<title></title>
<script src='/js/myScript.js'><\/script>
	</head>
<body>
    <p id='demo'>A paragraph</p>
		<button onClick='myFunction()'>
		click on me		
    </button>
</body>
</html>
`,readOnly:!0}},options:{showTabs:!0,visibleFiles:["/index.html","/js/myScript.js"],activeFile:"/index.html",showConsole:!0,editorHeight:400,editorWidthPercentage:40},"custom-setup":{dependencies:{jquery:"latest"}}})]),_:1},16)}}};export{F as default};
