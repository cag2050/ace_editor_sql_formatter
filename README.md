# ace_demo

* 官方地址：https://github.com/ajaxorg/ace
* 参考：
1. https://yq.aliyun.com/articles/65260
1. http://blog.csdn.net/sd4015700/article/details/49910353

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
