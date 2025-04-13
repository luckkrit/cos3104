<script setup lang="ts">
const html = `<!DOCTYPE html>
<html lang='en'>
<head>
	<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
	<meta name='description' content='' />
	<meta name='author' content='' />
	<meta name='viewport' content='user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width' />
	<title></title>
	</head>
<body>
<button onclick="this.innerHTML = Date()">The time is?</button>
<div id=\'app\'>
</div>
</body>
</html>
`
</script>
<template>

<Sandpack
theme="light" 
template="vanilla" 
:files="{
        '/index.js': ``,
        '/index.html': html
      }"
:options="{
    showConsole: true,
     editorHeight: 400,
        editorWidthPercentage: 40,
      }"
      :custom-setup="{
        dependencies: {
          'jquery': 'latest',
        },
        environment: 'vue-cli'
      }"
/>
</template>