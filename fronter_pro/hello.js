/**
 * Created by wangshan on 17/6/3.
 */
var i =1;
var myStyle={
    fontSize:10,
    color:'#FF0000'
};
var arr=[
    <h1 style={myStyle}>Hzhagnsdfsdf</h1>,
    <h2 style={myStyle}>Hzhagnsdfsdf</h2>,
    <h3 style={myStyle}>Hzhagnsdfsdf</h3>

];
var Child=React.createClass({

    render:function () {
        return <input type="checkbox"/>
    }
});
var HelloMessage=React.createClass({
    getInitialState:function () {
        return {liked:true}
    },
    OnClick:function (event) {
        this.setState({liked:!this.state.liked});
    },
    render:function () {
        var text=this.state.liked ? '西航':'不喜欢';
        return (<p onClick={this.OnClick}>you are {text} me</p>)
    }

});
var Tile = React.createClass({
    getInitialState:function () {
      return {click:0}
    },
    propTypes:{
        title:React.PropTypes.string.isRequired,
    },
    OnClick:function () {
        this.setState(function (state) {
            return {click:state.click+1};
        });

    },
    render:function () {
        return <h1 onClick={this.OnClick}>点击次数{this.state.click}</h1>;
    }

});
var  Tiop=React.createClass({
    getInitialState:function () {
        return {opacity:1.0};
    },
    componentDidMount:function () {
        this.timer=setInterval(function () {
            var opacity=this.state.opacity;
            opacity-=0.5;
            if(opacity<0.1){
                opacity=1.0;
            }
            this.setState({
                opacity:opacity
            });
        }.bind(this),100);
    },
    render:function () {
        return <div style={{opacity:this.state.opacity}}>hello work{this.props.title}</div>
    }

});
var Chang_sta = React.createClass({
    getInitialState:function () {
        return {value:'wangshan'};
    },
    on_change:function (event) {
        this.setState({value:event.target.value});
    },
    render:function () {
        var value=this.state.value;
        return <div>
            <input type="text" value={value} onChange={this.on_change}/>
            <h1>{value}</h1>
        </div>;
    }

});
ReactDOM.render(
  <Tile title='sdfds' />,
    document.getElementById('app')
);