/**
 * Created by wangshan on 17/6/7.
 */
var React = require('react');
var Play = require('./play');
var Center = require('./center');
module.exports = React.createClass({
    render:function () {
        return <div>
            <Center/>
            <Play/>
        </div>
    }
})