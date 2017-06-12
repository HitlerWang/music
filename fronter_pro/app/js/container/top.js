/**
 * Created by wangshan on 17/6/7.
 */
var React = require('react')
module.exports = React.createClass({

    render:function () {
        return <div id="top">
            <a id="home" href="https://y.qq.com/#">QQ音乐</a>
            <div id="right_login">
                <a id="login" href="">登录</a>
                <a id="setting" href="">设置</a>
            </div>
        </div>
    }

})