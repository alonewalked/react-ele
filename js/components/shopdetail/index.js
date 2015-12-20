import React from 'react';
import './styles.css';

export default React.createClass({
    render() {
        return(
            <div className="shopdetal">
            <div className="item isoarea">
                <div className="itemlogo userlogo"><img /></div>
                <div className="itemshelf">
                    <div className="shelfinfo01">【连锁】丽华快餐</div>
                    <div className="shelfinfo02 staring"><img />（5171）</div>
                </div>
                <div className="collect" >收藏</div>
            </div>
            <div className="section1con isoarea2">
                <div className="row">
                    <div className="col">
                        <div className="title"><strong>4.62</strong></div>
                        <div className="subtitle">用户评分</div>
                    </div>
                    <div className="col">
                        <div className="title"><strong>34</strong></div>
                        <div className="subtitle">送达/分钟</div>
                    </div>
                    <div className="col">
                        <div className="title"><strong>0</strong></div>
                        <div className="subtitle">起送价/元</div>
                    </div>
                    <div className="col">
                        <div className="title"><strong>3</strong></div>
                        <div className="subtitle">配送费/元</div>
                    </div>
                </div>
            </div> 
            <div className="cardtitle isoarea">
                餐厅公告
            </div>
            <div className="cardcon isoarea2"> 1、本店推荐您在饿了么网上订餐——饭口较忙，电话常占线，本店优先配送网络订单2、首次订餐用户，饿了么客服会对您的订单进行电话确认（来电区号为021），请确保您的电话开机及铃声状态以便送餐员能联系上您3、外卖制作+配送都需要耗费时间，希望大家提前进行预订外卖，避开高峰拥堵，提前预定午餐晚餐。另外，满减活动与满50元免送餐费的活动不能同时享受！感谢您的关注！
            </div> 
            
            <div className="cardtitle isoarea">
                餐厅活动
            </div>
            <div className="cardcon isoarea2">
                <span className="jian">减</span>满20减13元
            </div> 
            
            <div className="cardtitle isoarea">
                餐厅支持
            </div>
            <div className="cardcon isoarea2 support">
                <div><span className="ticket">票</span>支持开发票，请在下单时填好发票抬头</div>
                <div><span className="pei">配</span>改餐厅订餐需要支付配送费3元</div>
            </div>

            <div className="cardtitle isoarea">
                餐厅简介
            </div>
            <div className="cardcon isoarea2 desc">
                <div><span className="zhongshi">中式</span></div>
                丽华快餐五月一日起：北京市五环以内,一份起送(不含南四环的地区)，单笔消费金额在50元以内，网络订餐收取3元送餐费，公司承诺，四环以内半小时送到，四环至五环之间45分钟送到，超时免收送餐费；五环外1小时以上送到，另外南四环外和五环外部分区域统一收6元送餐费！
            </div>

            <div className="cardtitle isoarea">
                营业时间
            </div>
            <div className="cardcon isoarea2">
                10:30:00-13:45:00&nbsp;&nbsp;17:00:00-19:30:00
            </div>

            <div className="cardtitle isoarea">
                餐厅地址
            </div>
            <div className="cardcon isoarea2">
                北京市朝阳区望京花家地西里
            </div>

            <div className="h10"></div>
            </div>
        );
    }
});