// app
import React from 'react';  
import {RouteHandler} from 'react-router';

export default React.createClass({
	render(){
		return(
			<div ><RouteHandler key={name}/></div>
		);
	},
    contextTypes: {
      router: React.PropTypes.func
    }
});
