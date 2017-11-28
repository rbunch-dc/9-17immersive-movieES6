// The very first thing in most components, is to import react
import React, { Component } from 'react';

// I am a presentational component.
// I could have been in app.js, but it's cleaner if I'm ove rhere.
class Poster extends Component{
	render(){
		var imagePath = `http://image.tmdb.org/t/p/w300${this.props.poster}`;		
		return(
			<div className="col-sm-3">
				<img src={imagePath} />
			</div>
		)
	}
}

export default Poster;