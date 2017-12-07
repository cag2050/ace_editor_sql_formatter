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
            // strSql: 'select * from user where uid =1;'
            strSql: 'SELECT t1.*, t2.*, t3.LEVEL, t4.* FROM (SELECT UID FROM temp_mp.temp_uid) t1'
                     /*
                     LEFT JOIN
                       (SELECT dt,
                               UID,
                               nick,
                               sum(click_play_num) c,
                               sum(click_show_num) s,
                               sum(play_duration) pd,
                               sum(duration) dur,
                               sum(play_num_no_brush) AS nobrush
                        FROM dm_mp.dm_mp_sdk_user_revenue_sharing
                        WHERE dt BETWEEN 20171127 AND 20171203
                        GROUP BY dt,
                                 UID,
                                 nick) t2 ON t1.uid = t2.UID
                     LEFT JOIN
                       (SELECT dt,
                               eventparams['owner'] AS OWNER,
                               eventparams['owner_level'] AS LEVEL
                        FROM dwmf_bobo.dwm_bobo_sdk_all_new
                        WHERE dt BETWEEN 20171127 AND 20171203
                        GROUP BY dt,
                                 eventparams['owner'],eventparams['owner_level']) t3 ON t2.UID = t3.OWNER
                     AND t2.dt = t3.dt
                     LEFT JOIN
                       (SELECT dt,
                               UID,
                               sum(balance) AS balan
                        FROM dm_mp.dm_mp_sdk_user_mpc_detail
                        WHERE dt BETWEEN 20171127 AND 20171203
                        GROUP BY dt,
                                 UID) t4 ON t3.OWNER = t4.uid
                     AND t3.dt = t4.dt"
                     */
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
            handledStr = handledStr.replace(/from/g, '\nfrom')
            handledStr = handledStr.replace(/FROM/g, '\t\nFROM')
            handledStr = handledStr.replace(/where/g, '\nwhere')
            handledStr = handledStr.replace(/WHERE/g, '\t\nWHERE')
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
        width 100%
        margin-right: 15px;
        height 400px
        border 1px solid gray
</style>
