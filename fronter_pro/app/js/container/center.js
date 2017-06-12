/**
 * Created by wangshan on 17/6/7.
 */
var React  = require('react');
var Handler = require('../compnent/handler');
var MusicList = require('../compnent/music_list');
var Photo = require('../compnent/photo');

module.exports = React.createClass({

    render: function () {
        return <div>
            <Handler/>
            <MusicList/>
            <Photo/>
        </div>
    }
})