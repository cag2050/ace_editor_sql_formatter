<template lang='pug'>
.ace
    button(@click='formatSql') 格式化
    div 请输入sql：
    pre#editor select * from user where uid =1;
</template>

<script>
export default {
    name: '',
    data () {
        return {
        }
    },
    mounted () {
        let ace = window.ace
        ace.require('ace/ext/old_ie')
        ace.require('ace/ext/language_tools')
        ace.require('ace/ext/language_tools')
        var editor = ace.edit('editor')
        editor.$blockScrolling = Infinity
        editor.setFontSize(16)
        // editor.session.setMode('ace/mode/c_cpp')
        editor.setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: true,
            wrap: 'free'
        })
        editor.setTheme('ace/theme/monokai')
        /*
        var SqlMode = ace.require('ace/mode/sql').Mode
        editor.session.setMode(new SqlMode())
        */
    },
    methods: {
        formatSql () {
            let ace = window.ace
            var editor = ace.edit('editor')
            editor.setOption('wrap', 'free')
            editor.session.setUseWrapMode(true)
            var SqlMode = ace.require('ace/mode/sql').Mode
            console.log(new SqlMode())
            editor.session.setMode(new SqlMode())
            /*
            var code = editor.getValue()
            editor.setValue(code + '1111')
            */
        }
    }

}
</script>

<style lang='stylus'>
.ace
    text-align left
    button
        font-size 16px
    #editor
        width 600px
        height 400px
        border 1px solid gray
        position absolute
</style>
