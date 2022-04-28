### vscode代码片段
#### 设置->首选项->用户代码片段->新建代码片段

```js

{
	// Place your snippets for vue here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	// "Print to console": {
	//     "prefix": "log",
	//     "body": [
	//         "console.log('$1');",
	//         "$2"
	//     ],
	//     "description": "Log output to console"
	// }
	"vue template": {
			"prefix": "v2",
			"body": [
					"<template>",
					"  <div>${TM_FILENAME_BASE}</div>",
					"</template>\n",
					"<script>",
					"export default {",
					"  name: '${TM_FILENAME_BASE}',",    
					"  data() {",
					"    return {\n",
					"    }",
					"  },",
					"  methods: {\n",
					"  }",
					"}",
					"</script>\n",
					"<style lang=\"scss\" scoped>\n",
					"</style>",
					"$2"
			],
			"description": "vue template"
	}
}


```


```js

{
	// Place your 全局 snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and 
	// description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope 
	// is left empty or omitted, the snippet gets applied to all languages. The prefix is what is 
	// used to trigger the snippet and the body will be expanded and inserted. Possible variables are: 
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. 
	// Placeholders with the same ids are connected.
	// Example:
	// "Print to console": {
	// 	"scope": "javascript,typescript",
	// 	"prefix": "log",
	// 	"body": [
	// 		"console.log('$1');",
	// 		"$2"
	// 	],
	// 	"description": "Log output to console"
	// }
	"for add": {
		"prefix": "for",
		"body": [
				"for (let i = 0; i < $0; i++) {",
				"}"
		],
		"description": "for"
}
}

```