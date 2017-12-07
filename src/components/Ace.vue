<template lang='pug'>
.sql
    .old.fl
        .textLeft sql语句：
        pre#editor.word.textLeft {{ sqlStr }}
    .fl
        button(@click='formatSql') 转换
</template>

<script>
import sqlFormatter from 'sql-formatter'
let ace = window.ace

export default {
    name: '',
    data () {
        return {
            sqlStr: 'select * from user where uid = 1 ;'
        }
    },
    mounted () {
        /*
        ace.require('ace/ext/old_ie')
        ace.require('ace/ext/language_tools')
        */
        var editor = ace.edit('editor')
        editor.$blockScrolling = Infinity
        editor.setFontSize(16)
        editor.setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: true
        })
        // editor.setTheme('ace/theme/monokai')
        var SqlMode = ace.require('ace/mode/sql').Mode
        editor.session.setMode(new SqlMode())
    },
    methods: {
        formatSql () {
            let ace = window.ace
            var editor = ace.edit('editor')
            var code = editor.getValue()
            editor.setValue(sqlFormatter.format(code))
        }
    }
}
</script>

<style lang='stylus'>
.sql
    .old
        width 815px
    .word
        border 1px solid gray
        height 500px
    .fl
        float left
    .textLeft
        text-align left
</style>
