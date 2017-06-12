/**
 * Created by wangshan on 17/6/7.
 */

var React  = require('react');
var Line = require('./music_line');
var musics = [
    {
        name:'歌曲',
        person:'歌手',
        run_time:'时间'
    },
    {
        name:'小幸运',
        person:'张小凤',
        run_time:'03:27'
    }
]
module.exports = React.createClass({

    getInitialState:function () {
        return {}
    },
    get_data:function (musics) {
        var datas=[]
        musics.map((item,index)=>{datas.push(<Line name={item.name} person={item.person} run_time={item.run_time}/>)})
        return datas
    },
    render: function () {
        var lists=this.get_data(musics)
        return <div id="music_list">
            {lists}
        </div>
    }
})
