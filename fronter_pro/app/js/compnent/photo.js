/**
 * Created by wangshan on 17/6/7.
 */
var React  = require('react');
var img_path="../../app/img/T002R300x300M000003YUWkT2uQsBR.jpg";
var song_info={
    'name':'小幸运',
    'person':'张小凤',
    'zhuanji':'爱你的人'
}
module.exports = React.createClass({
    render: function () {
        return <div id="photo">
                    <div className="photo_top">
                        <a className="photo_img">
                            <img id="real_photo" src={img_path}/>
                        </a>
                        <div className="song_name_div">
                            歌曲名：
                            <a className="song_name_img">{song_info.name}</a>
                        </div>
                        <div className="song_person_div">
                            歌手名：
                            <a className="song_person_img">{song_info.person}</a>
                        </div>
                        <div className="song_zhuanji_div">
                            专辑名：
                            <a className="song_zhuanji_img">{song_info.zhuanji}</a>
                        </div>
                    </div>
                    <div className="song_lyic_img"></div>
                    <a className="song_lyic_status"></a>
                </div>
    }
})