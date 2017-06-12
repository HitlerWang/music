/**
 * Created by wangshan on 17/6/7.
 */

var React  = require('react');

module.exports = React.createClass({

    render: function () {
        return <div id="handler">
            <a className="collection"><i className="collection_icon"></i>收藏</a>
            <a className="add"><i className="add_icon"></i>添加到</a>
            <a className="download"><i className="download_icon"></i>下载</a>
            <a className="remove"><i className="remove_icon"></i>删除</a>
            <a className="clear"><i className="clear_icon"></i>清空列表</a>
        </div>
    }
})
