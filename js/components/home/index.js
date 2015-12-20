import './styles.css';
import React from 'react';

import FixedSlide from '../homefixedslide'; 
import Header from '../header'; 
import SlideBody from '../homeslidebody'; 

import SlideOut from '../../lib/slideout';

export default React.createClass({
    componentDidMount(){
        this.props.slider = new SlideOut({
            'panel': this.refs.panel.getDOMNode(),
            'menu': this.refs.menu.getDOMNode(),
            'padding': 256,
            'tolerance': 70
        });
    },
	render(){
		return(
			<div > 
                <div ref="panel" >
                    <Header />
                    <SlideBody />
                </div>
                <FixedSlide ref="menu" />
            </div>
		);
	}
});