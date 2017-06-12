/**
 * Created by wangshan on 17/6/7.
 */
var React = require('react')

module.exports = React.createClass({
    render:function () {
        return <div className="bottom_right">
            <a className="change"></a>
            <a className="love"></a>
            <a className="download_bottom"></a>
            <a className="song_type"></a>
            <a className="volume"></a>
            <div className="real_volume">
                <i className="real_volume_icon"></i>
            </div>
        </div>
    }

})