<template lang='pug'>
.ace
    button(@click='formatSql') 格式化
    div 请输入sql：
    pre#editor {{ strSql }}
</template>

<script>
let ace = window.ace

export default {
    name: '',
    data () {
        return {
            // strSql: ''
            strSql: "SELECT t1.*,\n       t2.*,\n       t3.LEVEL,\n       t4.*\nFROM\n  (SELECT UID\n   FROM temp_mp.temp_uid) t1\nLEFT JOIN\n  (SELECT dt,\n          UID,\n          nick,\n          sum(click_play_num) c,\n          sum(click_show_num) s,\n          sum(play_duration) pd,\n          sum(duration) dur,\n          sum(play_num_no_brush) AS nobrush\n   FROM dm_mp.dm_mp_sdk_user_revenue_sharing\n   WHERE dt BETWEEN 20171127 AND 20171203\n   GROUP BY dt,\n            UID,\n            nick) t2 ON t1.uid = t2.UID\nLEFT JOIN\n  (SELECT dt,\n          eventparams['owner'] AS OWNER,\n          eventparams['owner_level'] AS LEVEL\n   FROM dwmf_bobo.dwm_bobo_sdk_all_new\n   WHERE dt BETWEEN 20171127 AND 20171203\n   GROUP BY dt,\n            eventparams['owner'],eventparams['owner_level']) t3 ON t2.UID = t3.OWNER\nAND t2.dt = t3.dt\nLEFT JOIN\n  (SELECT dt,\n          UID,\n          sum(balance) AS balan\n   FROM dm_mp.dm_mp_sdk_user_mpc_detail\n   WHERE dt BETWEEN 20171127 AND 20171203\n   GROUP BY dt,\n            UID) t4 ON t3.OWNER = t4.uid\nAND t3.dt = t4.dt"
            // strSql: 'select * from user where uid =1;'
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
            editor.setValue(this.handleSqlStr(code))
        },
        handleSqlStr (sqlStr) {
            console.log(sqlStr)
            let handledStr = sqlStr
            handledStr = handledStr.replace(/from/g, '\n    from')
            handledStr = handledStr.replace(/FROM/g, '\nFROM')
            handledStr = handledStr.replace(/where/g, '\n    where')
            handledStr = handledStr.replace(/WHERE/g, '\nWHERE')
            handledStr = handledStr.replace(/limit/g, '\nlimit')
            return handledStr
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
        width 90%
        margin-right: 15px;
        height 400px
        border 1px solid gray
</style>
