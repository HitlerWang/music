/**
 * Created by wangshan on 17/6/7.
 */
var React = require('react')

var now_play={
    'person':'张小凤',
    'name':'小幸运'
};
var now_time = "01:27 / 03:27"

var play_css={
    backgroundImage:url("ba")
}
var pause_css={
    backgroundImage:url("../../app/img/player@2x.png"),
    backgroundPositionX:'-59px',
    backgroundPositionY:'0px',

}

module.exports = React.createClass({
    getInitialState:function () {
        return {play:false}
    },
    Onclick:function () {
        this.setState({play:!this.State.play})
        if(this.state.play==false)
            this.sets
    },
    render:function () {
        return <div id="bottom_left">
                <a className="last_song"></a>
                <a className="play" onClick={this.Onclick}></a>
                <a className="next_song"></a>
                <div className="run_scol">
                    <div className="play_person_top">
                        <a className="now_person">{now_play.person} - </a>
                        <a className="now_name">{now_play.name}</a>
                        <div className="play_time">{now_time}</div>
                    </div>
                    <div className="play_scol">
                        <i className="dot"></i>
                    </div>
                </div>

        </div>
    }

})