import React, { Component } from 'react';
import $ from 'jquery';
import Poster from './Poster';

class App extends Component {
  constructor(props){
    // App is a subclass. A subclass of Component
    // Therefore, we MUST incldue a super
    super(props);
    this.state = {
      movies: []
    }
  }

  // I am special too. I AM NOT a nomral method
  // react cares about me.
  // I will run ONE time. BEFORE the first render
  componentWillMount(){
    console.log("The component is about to mount");
  }

  // I am special. I AM NOT a nomral method
  // react cares about me.
  // I will run ONE time. After the first render
  componentDidMount(){
    console.log("The component mounted");
    var url = 'http://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5'
    $.getJSON(url,(movieData)=>{
      console.log(movieData);
      // this.state =  DONT EVER DO THIS. DONT FIGHT THE IRS. DONT WATCH HIGHLANDER
      this.setState({
        movies:movieData.results
      })
    });
  }

  robsMethod(){
    console.log("Robs method ran")
  }

  render() {
    var postersArray = [];

    // First time through (when the component mounts), this.state.movies
    // will be an empty array.
    // AFTER the component mounts, this.state.movies contains...

    this.state.movies.map((movie,index)=>{
      postersArray.push(<Poster key={index} poster={movie.poster_path} />)
    });
    console.log(postersArray)
    return (
      <div className="App">
        <h1>This the movie app... again.</h1>
        {postersArray}
      </div>
    );
  }
}

export default App;

// var x = {name:"Jason"};
// export {x};