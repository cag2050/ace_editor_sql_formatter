# ace_demo

* ace 结合 sql-formatter，实现sql的录入和格式化。

* ace官方地址：https://github.com/ajaxorg/ace  
sql-formatter官方地址：https://github.com/zeroturnaround/sql-formatter
* 参考：
1. https://yq.aliyun.com/articles/65260
1. http://blog.csdn.net/sd4015700/article/details/49910353

* ace editor 术语：

术语 | 含义
--- | ---
snippet | 代码片段（在自动补全时使用）
gutter | 行数所在的位置

* 以下部分是设置输入代码提示的，如果不需要可以不用引用ext-language_tools.js。
```
    ace.require("ace/ext/language_tools");
    editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
    });
```
*
```
editor.getValue();//获取内容
editor.setValue(value);//设置内容
```
* 
```
    <!--编辑器的最主要文件-->
    <script src="http://cdn.bootcss.com/ace/1.2.9/ace.js"></script>
    <!--用来提供代码提示和自动补全的插件-->
    <script src="http://cdn.bootcss.com/ace/1.2.9/ext-language_tools.js"></script>
    <!--兼容旧版本IE-->
    <script src="http://cdn.bootcss.com/ace/1.2.9/ext-old_ie.js"></script>
    <!--编辑器的主题插件-->
    <script src="http://cdn.bootcss.com/ace/1.2.9/theme-monokai.js"></script>
    <!--sql模式-->
    <script src="https://cdn.bootcss.com/ace/1.2.9/mode-sql.js"></script>
```

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
