import React, { Component } from 'react';
import Router, { Link } from 'react-router';

export default React.createClass({
    render() {
        return (
            <div className="slidebody">
            <div className="swiper-container">
                <div className="swiper-wrapper"> 
                    <div className="swiper-slide"> 
                        <img /> </div> 
                </div>
                <div className="pagination"></div>
            </div>
            <div className="row section2">
                <div className="col">
                    <div className="item shelf2 favorable" >
                        <div className="itemlogo userlogo"><img  /></div>
                        <div className="itemshelf">
                            <div className="shelfinfo01">优惠活动</div>
                            <div className="shelfinfo02">打折应有尽有</div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="item shelf2 nearby" >
                        <div className="itemlogo userlogo"><img /></div>
                        <div className="itemshelf">
                            <div className="shelfinfo01">附近团购</div>
                            <div className="shelfinfo02">查看附近团购</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h10"></div>
            <div className="section3">
                <Link className="item style1" to="detail" >
                    <div className="itemlogo userlogo"><img /></div>
                    <div className="itemshelf">
                        <div className="shelfinfo01">【连锁】丽华快餐<span className="ticket">票</span><span className="pei">配</span></div>
                        <div className="shelfinfo02 ordering">接受预定中</div>
                        <div className="shelfinfo03">月售37307单 / 0元起送 / 34分钟</div>
                        <div className="shelfinfo04"><span className="jian">减</span>满20元减13元</div>

                    </div>
                </Link>
                <div className="item style2" >
                    <div className="itemlogo userlogo"><img /></div>
                    <div className="itemshelf">
                        <div className="shelfinfo01">【连锁】宏状元<span className="ticket">票</span><span className="pei">配</span></div>
                        <div className="shelfinfo02 staring"><img />（2117）</div>
                        <div className="shelfinfo03">月售754单 / 35元起送 / 45分钟</div>
                        
                    </div>
                </div>
                <div className="item style1" >
                    <div className="itemlogo userlogo"><img /></div>
                    <div className="itemshelf">
                        <div className="shelfinfo01">【连锁】久久丫<span className="fu">付</span><span className="pei">配</span></div>
                        <div className="shelfinfo02 staring"><img />（604）</div>
                        <div className="shelfinfo03">月售753单 / 30元起送 / 45分钟</div>
                        <div className="shelfinfo04"><span className="jian">减</span>满20元减10元，在线支付再减3元</div>

                    </div>
                </div>
                <div className="item style2" >
                    <div className="itemlogo userlogo"><img /></div>
                    <div className="itemshelf">
                        <div className="shelfinfo01">【连锁】米卡米卡蛋糕<span className="ticket">票</span><span className="pei">配</span></div>
                        <div className="shelfinfo02 staring"><img />（2）</div>
                        <div className="shelfinfo03">月售13单 / 99元起送</div>
                        
                    </div>
                </div>
                <div className="item style1" >
                    <div className="itemlogo userlogo"><img /></div>
                    <div className="itemshelf">
                        <div className="shelfinfo01">【连锁】爱鲜蜂<span className="fu">付</span><span className="new">新</span><span className="pei">配</span></div>
                        <div className="shelfinfo02 staring"><img />（115）</div>
                        <div className="shelfinfo03">月售243单 / 50元起送 / 45分钟</div>
                        <div className="shelfinfo04"><span className="jian">减</span>满20元减13元</div>

                    </div>
                </div>
                <div className="item style2" >
                    <div className="itemlogo userlogo"><img /></div>
                    <div className="itemshelf">
                        <div className="shelfinfo01">【连锁】家家送火锅<span className="ticket">票</span><span className="compensate">赔</span></div>
                        <div className="shelfinfo02 staring"><img />（2）</div>
                        <div className="shelfinfo03">月售19单 / 148元起送</div>
                        
                    </div>
                </div>
                <div className="item style1" >
                    <div className="itemlogo userlogo"><img /></div>
                    <div className="itemshelf">
                        <div className="shelfinfo01">【连锁】古特比萨<span className="ticket">票</span></div>
                        <div className="shelfinfo02 staring"><img />（37）</div>
                        <div className="shelfinfo03">月售143单 / 60元起送 / 45分钟</div>
                        <div className="shelfinfo05"><span className="quatity">质</span>餐厅认证</div>
                        <div className="shelfinfo04"><span className="jian">减</span>满20元减13元</div>
                        
                    </div>
                </div>
                <div className="item style2" >
                    <div className="itemlogo userlogo"><img /></div>
                    <div className="itemshelf">
                        <div className="shelfinfo01">拼豆夜宵<span className="ticket">票</span></div>
                        <div className="shelfinfo02 ordering">接受预定中</div>
                        <div className="shelfinfo03">月售597单 / 100元起送 / 41分钟</div>
                    </div>
                </div>
                <div className="item style2" >
                    <div className="itemlogo userlogo"><img /></div>
                    <div className="itemshelf">
                        <div className="shelfinfo01">麻咪麻咪香辣火锅<span className="fu">付</span></div>
                        <div className="shelfinfo02 staring"><img />（924）</div>
                        <div className="shelfinfo03">月售786单 / 50元起送 / 45分钟</div>
                    </div>
                </div>
                <div className="item style2" >
                    <div className="itemlogo userlogo"><img /></div>
                    <div className="itemshelf">
                        <div className="shelfinfo01">麻辣村<span className="fu">付</span><span className="ticket">票</span><span className="pei">配</span></div>
                        <div className="shelfinfo02 staring"><img />（963）</div>
                        <div className="shelfinfo03">月售826单 / 120元起送 / 45分钟</div>
                    </div>
                </div>
                <div className="item style2" >
                    <div className="itemlogo userlogo"><img /></div>
                    <div className="itemshelf">
                        <div className="shelfinfo01">韩国人的餐桌<span className="fu">付</span><span className="compensate">赔</span></div>
                        <div className="shelfinfo02 staring"><img />（237）</div>
                        <div className="shelfinfo03">月售603单 / 100元起送 / 40分钟</div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
});