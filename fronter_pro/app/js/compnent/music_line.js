/**
 * Created by wangshan on 17/6/7.
 */
var React  = require('react')

module.exports = React.createClass({

    render: function () {
        return <div className="line_div">
            <i className="checkbox"></i>
            <ul className="line">
                <li className="right_box">
                    <input type="checkbox" className="real_checkbox"/>
                </li>
                <li className="music_name">{this.props.name}</li>
                <li className="person">{this.props.person}</li>
                <li className="run_time">{this.props.run_time}</li>
            </ul>
        </div>
    }
})