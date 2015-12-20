import React, { Component } from 'react';
import './style.css'; 

export default React.createClass({
    render(){
        return(
            <div className="fixslide">
            <div className="fixslide item login"  id="topbar">
                <div className="fixslide itemlogo userlogo">
                    <img src={'http://i.imgur.com/2Sqfgp8.png'}/>
                </div>
                <div className="fixslide itemshelf">
                    <div className="fixslide shelfinfo01">个人中心</div>
                    <div className="fixslide shelfinfo02">登陆可享更多特权</div>
                </div>
            </div>
            <div className="fixslide item" >
                <div className="fixslide itemlogo"><img src={'http://i.imgur.com/lLpulUD.png'}/></div>
                <div className="itemshelf">
                    <div className="fixslide shelfinfo01">我要订餐</div> 
                </div>
            </div>
            <div className="fixslide item" >
                <div className="fixslide itemlogo"><img src={'http://i.imgur.com/N1TRms2.png'}/></div>
                <div className="fixslide itemshelf">
                    <div className="fixslide shelfinfo01">饿单中心</div> 
                </div>
            </div>
            <div className="fixslide item" >
                <div className="fixslide itemlogo"><img src={'http://i.imgur.com/Qq6Cr8O.png'} /></div>
                <div className="fixslide itemshelf">
                    <div className="fixslide shelfinfo01">礼品中心</div>
                </div>
            </div>
            <div className="fixslide item" >
                <div className="fixslide itemlogo"><img src={'http://i.imgur.com/wMIAqBH.png'}/></div>
                <div className="fixslide itemshelf">
                    <div className="fixslide shelfinfo01">邀请好友</div>
                </div>
            </div>
            <div className="fixslide item" >
                <div className="fixslide itemlogo"><img src={'http://i.imgur.com/SFMvplU.png'}/></div>
                <div className="fixslide itemshelf">
                    <div className="fixslide shelfinfo01">关于我们</div>
                </div>
            </div> 
            <div className="fixslide item foodphone" >
                <div className="fixslide itemlogo"><img /></div>
                <div className="fixslide itemshelf">
                    <div className="fixslide shelfinfo01">美食相机</div>
                </div>
            </div>
            </div> 
        );
    } 
}); 