import React from 'react';
import './styles.css';

export default React.createClass({
    render() {
        return(
            <div className="detal">
            <div className="section01">接受预定中，10:30开始送餐</div>
            <div className="item section02">
                <div className="itemshelf">
                    <div className="shelfinfo01">快用微信拼单</div>
                    <div className="shelfinfo03">和你的小伙伴一起来订餐吧</div>
                </div>
                <div className="buybtn">
                    <p><img className="weixin" />微信拼单</p>
                </div>
            </div> 
            <img className="shopcover" />

            <div className="darktitle">新品/促销</div>
            <div className="item style2">
                <div className="itemshelf">
                    <div className="shelfinfo01">大排</div>
                    <div className="shelfinfo03">25元五香大排套餐</div>
                    <div className="shelfinfo02 staring"><img />&nbsp;月售6630份</div>
                </div>
                <div className="buybtn">
                    <p >￥25</p>
                    <span className="minusorder">
                        <img className="numbg" /><span className="thisordernum">0</span>
                        <span className="minus" >－</span>
                    </span> 
                </div>
            </div> 
            <div className="darktitle">商务套餐</div>
            <div className="item style2">
                <div className="itemshelf">
                    <div className="shelfinfo01">20元</div>
                    <div className="shelfinfo03">20元商务套餐</div>
                    <div className="shelfinfo02 staring"><img />&nbsp;月售14438份</div>
                </div>
                <div className="buybtn"><p >￥20</p>
                    <span className="minusorder">
                        <img className="numbg" /><span className="thisordernum">0</span>
                        <span className="minus" >－</span>
                    </span>
                </div>
            </div>
            <div className="item style2">
                <div className="itemshelf">
                    <div className="shelfinfo01">卤肉</div>
                    <div className="shelfinfo03">20元香菇卤肉套餐</div>
                    <div className="shelfinfo02 staring"><img />&nbsp;月售9587份</div>
                </div>
                <div className="buybtn"><p >￥20</p>
                    <span className="minusorder">
                        <img className="numbg" /><span className="thisordernum">0</span>
                        <span className="minus" >－</span>
                    </span>
                </div>
            </div>  
            <div className="darktitle">精品商务套餐</div>
            <div className="item style2">
                <div className="itemshelf">
                    <div className="shelfinfo01">30元</div>
                    <div className="shelfinfo03">30元商务套餐</div>
                    <div className="shelfinfo02 staring"><img / >&nbsp;月售2602份</div>
                </div>
                <div className="buybtn"><p >￥30</p>
                    <span className="minusorder">
                        <img className="numbg" /><span className="thisordernum">0</span>
                        <span className="minus" >－</span>
                    </span>
                </div>
            </div>
            <div className="item style2">
                <div className="itemshelf">
                    <div className="shelfinfo01">排骨</div>
                    <div className="shelfinfo03">30元红烧排骨套餐</div>
                    <div className="shelfinfo02 staring"><img />&nbsp;月售2122份</div>
                </div>
                <div className="buybtn"><p >￥30</p>
                    <span className="minusorder">
                        <img className="numbg" /><span className="thisordernum">0</span>
                        <span className="minus" >－</span>
                    </span>
                </div>
            </div> 
            <div className="h50"></div>
            <div className="bottom">
                <img />
                <span className="buyinfo" id="buyinfo"><span id="buynum">1</span>份 ￥<span id="totalcash">10</span></span>
                <span id="minbuy">￥0元起送</span>
                <span id="buyit" >去结算</span>
            </div>
            </div>
        );
    }
    
});