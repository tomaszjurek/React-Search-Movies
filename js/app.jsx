import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.jsx';
import Main from './components/main.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isData: false,
      filterText: "",
      datas: null
    };
  }

  searchMovies = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=5f816d92be36940507e6b52e3f14ab84&query=${this.state.filterText}`).then(response =>{
      if(response && response.ok){
        return response.json();
      }else{
        console.log('Błąd połączenia!');
      }
    }).then(data => {
      this.setState({
        isData: true,
        datas: data.results
      })
    })
  }

  showDetails = (id, movieIndex) => {
    console.log(id, movieIndex);
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5f816d92be36940507e6b52e3f14ab84`).then(response =>{
      if(response && response.ok){
        return response.json();
      }else{
        console.log('Błąd połączenia!');
      }
    }).then(data => {
      let datas = this.state.datas;
      datas[movieIndex].genres = data.genres;
      datas[movieIndex].imdb_link = `http://www.imdb.com/title/${id}/mediaviewer/rm1804016896`;
      datas[movieIndex].production_countries = data.production_countries;
      datas[movieIndex].production_companies = data.production_companies;
      this.setState({
        datas
      });
    })
  }


  changeHandler = (event) =>
  this.setState({ [event.target.name]: event.target.value })

  render() {
    return (
      <div>
        <Header changeHandler = {this.changeHandler} searchMovies = {this.searchMovies} filterText = {this.state.filterText}></Header>
        <Main isData = {this.state.isData} datas = {this.state.datas} showDetails = {this.showDetails}></Main>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(
    <App/>,
    document.getElementById('app')
  );
});
