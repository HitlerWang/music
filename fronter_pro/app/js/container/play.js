/**
 * Created by wangshan on 17/6/7.
 */
var React = require('react');
var Play_left = require('../compnent/play_left');
var Play_right = require('../compnent/play_right')
module.exports = React.createClass({
    render:function () {
        return <div id="bottom_play">
            <Play_left/>
            <Play_right/>

        </div>
    }

})