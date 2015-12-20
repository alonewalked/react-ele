import React from 'react';
//import './styles.css';

import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import injectTapEventPlugin from 'react-tap-event-plugin';
import SwipeableViews from '../../lib/react-swipeable-views';

import Header from '../header';
import FoodDetail from '../fooddetail';
import ShopDetail from '../shopdetail';

const styles = {
  slideContainer: {
    height: 'auto'
  } 
};

export default React.createClass({
  getInitialState() {
    return {
      index: 0,
    };
  },
  onChangeTabs(value) {
    this.setState({
      index: parseInt(value, 10),
    });
  },
  onChangeIndex(index) {
    this.setState({
      index: index,
    });
  }, 
  render() {
    const {
      index
    } = this.state;
 
    return (
        <div>
            <Header />
            <Tabs onChange={this.onChangeTabs} value={index + ''}>
                <Tab label="菜单分类" value="0" />
                <Tab label="餐厅介绍" value="1" /> 
            </Tabs>
            <SwipeableViews index={index} onChangeIndex={this.onChangeIndex} style={styles.slideContainer}>
            <div  >
              <FoodDetail />
            </div>
            <div >
              <ShopDetail />
            </div> 
           </SwipeableViews>

        </div>
    );
  }
});