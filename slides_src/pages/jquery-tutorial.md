---
layout: cover
transition: fade
---

# JQuery Tutorial

---

- Code นี้ไม่ทำงานเพราะ $('#app') หาไม่พบ

<Sandpack
theme="light" 
template="vite" 
:files="{
        '/index.js': ``,
        '/index.html': `
<!DOCTYPE html>
<html lang='en'>
<head>
	<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
	<meta name='description' content='' />
	<meta name='author' content='' />
	<meta name='viewport' content='user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width' />
	<title></title>
    <script src='https://code.jquery.com/jquery-3.7.1.min.js'></script>
    <script>
            console.log($('#app'))
            $('#app').text('After DOM Loaded')
    </script>
	</head>
<body>
<div id='app'>
</div>
</body>
</html>`
      }"
:options="{
    showConsole: true,
    activeFile: '/index.html',
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

- แก้โดย ready() to wait HTML DOM loaded

<Sandpack
theme="light" 
template="vite" 
:files="{
        '/index.js': ``,
        '/index.html': `
<!DOCTYPE html>
<html lang='en'>
<head>
	<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
	<meta name='description' content='' />
	<meta name='author' content='' />
	<meta name='viewport' content='user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width' />
	<title></title>
    <script src='https://code.jquery.com/jquery-3.7.1.min.js'></script>
    <script>
        $(document).ready(function(){
            $('#app').text('After DOM Loaded')
        })
    </script>
	</head>
<body>
<div id='app'>
</div>
</body>
</html>`
      }"
:options="{
    showConsole: true,
    activeFile: '/index.html',
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

- หรือใช้แบบนี้แทนก็ได้

```js 
$(function(){

  // jQuery methods go here...

});
```

---

- ตัวอย่าง

<Sandpack
theme="light" 
template="vite" 
:files="{
        '/index.js': ``,
        '/index.html': `
<!DOCTYPE html>
<html lang='en'>
<head>
	<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
	<meta name='description' content='' />
	<meta name='author' content='' />
	<meta name='viewport' content='user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width' />
	<title></title>
    <script src='https://code.jquery.com/jquery-3.7.1.min.js'></script>
    <script>
$(function(){
            $('#app').text('After DOM Loaded')
});
    </script>
	</head>
<body>
<div id='app'>
</div>
</body>
</html>`
      }"
:options="{
    showConsole: true,
    activeFile: '/index.html',
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
layout: full
---

   <iframe src="https://codesandbox.io/embed/86ry26?view=editor+%2B+preview&expanddevtools=1"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="jquery"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>