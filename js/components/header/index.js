import React from 'react'; 
import './styles.css';

export default React.createClass({
    render(){
        return (
            <div className="header" id="topbar" > 
                <div className="left"  >
                    <img src={'http://i.imgur.com/eBVJgTQ.png'} className="logoleft" /><img src={'http://i.imgur.com/dQQZU9m.png' } className="logo" />
                </div>
                <div className="center" >
                    <span>花园路</span>
                    <img src={'http://i.imgur.com/npEw7U5.png'} />
                </div>
                <div className="right" ><img src={'http://i.imgur.com/kvklooa.png'} /></div>
            </div>
        );
    }
});