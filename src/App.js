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
    this.handleSubmit = this.handleSubmit.bind(this);
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
      });
    });
  }

  robsMethod(){
    console.log("Robs method ran")
  }

  handleSubmit(event){
    event.preventDefault();
    var value = document.getElementById('searchTerm').value;
    document.getElementById('searchTerm').value = "";
    var url = 'https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query='+value
    $.getJSON(url,(movieSearchData)=>{
      // We have the new movies. Update State.
      this.setState({
        // this will cause a re-render
        movies: movieSearchData.results
      })
    });
    
  }

  render() {
    // var postersArray = [];

    // First time through (when the component mounts), this.state.movies
    // will be an empty array.
    // AFTER the component mounts, this.state.movies contains...

    // this.state.movies.map((movie,index)=>{
    //   postersArray.push(<Poster key={index} id={movie.id} title={movie.title} poster={movie.poster_path} />)
    //   const thisMovie = {
    //     title: movie.title,
    //     link: movie.id,

    //   }
    //   postersArray.push(<Poster key={index} movie={movie} />)
    //   return null;
    // });

    var postersArray = this.state.movies.map((movie,index)=>{
      return(<Poster key={index} movie={movie} />)
    });

    console.log(postersArray)
    return (
      <div className="App">
        <h1>This the movie app... again.</h1>
        <div className="col-sm-12 text-center">
          <form onSubmit={this.handleSubmit}>
            <input id="searchTerm" type="text" placeholder="Movie Title" />
            <button type="submit" className="btn btn-primary">Search</button>
          </form>
        </div>
        {postersArray}
      </div>
    );
  }
}

export default App;

// var x = {name:"Jason"};
// export {x};