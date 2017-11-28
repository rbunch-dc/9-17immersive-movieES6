// The very first thing in most components, is to import react
import React, { Component } from 'react';

// I am a presentational component.
// I could have been in app.js, but it's cleaner if I'm ove rhere.
class Poster extends Component{
	render(){
		var title = this.props.movie.title;
		var imagePath = `http://image.tmdb.org/t/p/w300${this.props.movie.poster_path}`;		
		var moviePath = `http://www.themoviedb.org/movie/${this.props.movie.id}`
		return(
			<div className="col-sm-3 text-center">
					<a href={moviePath}><img src={imagePath} /></a>
				<div className="col-sm-12">
					{title}
				</div>

			</div>
		)
	}
}

export default Poster;