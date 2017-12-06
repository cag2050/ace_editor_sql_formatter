<template lang='pug'>
div.ace
    pre#editor select * from user;
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
        var editor = ace.edit('editor')
        editor.$blockScrolling = Infinity
        editor.setFontSize(16)
        editor.session.setMode('ace/mode/c_cpp')
        editor.setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: true
        })
        editor.setTheme('ace/theme/monokai')
    }
}
</script>

<style lang='stylus'>
.ace
    #editor
        width 600px
        height 400px
        border 1px solid gray
        position absolute
</style>
