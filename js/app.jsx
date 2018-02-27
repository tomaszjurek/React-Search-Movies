import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.jsx';
import Main from './components/main.jsx';
import {langText} from "./langText.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isData: false,
      filterText: "",
      datas: null,
      page: 1,
      langText: langText[0],
      type: "movie",
      lang: navigator.language,
      isMoreData: true
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentWillMount() {
  window.addEventListener('scroll', this.handleScroll);
  window.addEventListener('scroll', this.progressBarScroll);
  };

  componentWillUnmount() {
  window.removeEventListener('scroll', this.handleScroll);
  window.removeEventListener('scroll', this.progressBarScroll);
  };

// Scroll methods
  handleScroll() {
    let doc = document.documentElement;
    let offset = doc.scrollTop + window.innerHeight;
    let height = doc.offsetHeight;

    if (this.state.filterText !== "") {
      if (Math.ceil(offset) === height) {
        let page = this.state.page
        page = page + 1
        this.setState({
          page
        })
        this.moreMovies();
      }
    }
  }

  progressBarScroll() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
      height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
      scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
  }

// Event handlers
  changeHandler = (event) =>
  this.setState({ [event.target.name]: event.target.value })

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.searchMovies();
    }
  }

  selectChange = (event) => {
    this.setState({
      langText: langText[event.target.value],
      [event.target.name]: event.target.value,
    }, function() {
      console.log();
        if (this.state.filterText !== "") {
        this.searchMovies()
        }
      });
  }

  selectType = (event) => {
    this.setState({
      type: [event.target.value],
      [event.target.name]: event.target.value,
    }, function() {
        if (this.state.filterText !== "") {
        this.searchMovies()
        }
      });
  }

// Search method
  searchMovies = () => { this.state.filterText !== "" &&
    fetch(`https://api.themoviedb.org/3/search/${this.state.type}?api_key=5f816d92be36940507e6b52e3f14ab84&query=${this.state.filterText}&language=${this.state.langText.apiLang}`).then(response =>{
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
      window.scrollTo(0, 0);
    })
  }

// Load more movies
  moreMovies = () => {
    fetch(`https://api.themoviedb.org/3/search/${this.state.type}?api_key=5f816d92be36940507e6b52e3f14ab84&query=${this.state.filterText}&page=${this.state.page}&language=${this.state.langText.apiLang}`).then(response =>{
      if(response && response.ok){
        return response.json();
      }else{
        console.log('Błąd połączenia!');
      }
    }).then(data => {
      if (data.results.length > 0) {
        let addedDatas = this.state.datas.concat(data.results);
        this.setState({
          datas: addedDatas
        })
      } else {
        this.setState({
          isMoreData: false
        })
        return
      }
    })
  }

// Sort movies
  sortingMovies = (event) => {
    event.preventDefault();
    if (this.state.datas) {
      let datas = this.state.datas.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (b.title < a.title) return 1;
        return 0;
      });
      this.setState({
        datas
      });
      window.scrollTo(0, 0);
    }
  }


// Show details of clicked movie
  showDetails = (id, movieIndex) => {
    fetch(`https://api.themoviedb.org/3/${this.state.type}/${id}?api_key=5f816d92be36940507e6b52e3f14ab84&language=${this.state.langText.apiLang}`).then(response =>{
      if(response && response.ok){
        return response.json();
      }else{
        console.log('Błąd połączenia!');
      }
    }).then(data => {
      let datas = this.state.datas;
      if (this.state.type === "movie") {
        datas[movieIndex].genres = data.genres;
        datas[movieIndex].imdb_link = `http://www.imdb.com/title/${data.imdb_id}/mediaviewer/rm1804016896`;
        datas[movieIndex].production_countries = data.production_countries;
        datas[movieIndex].production_companies = data.production_companies;
        this.setState({
          datas
        });
      } if (this.state.type === "tv") {
          datas[movieIndex].genres = data.genres;
          datas[movieIndex].imdb_link = `http://www.imdb.com/title/${data.imdb_id}/mediaviewer/rm1804016896`;
          datas[movieIndex].production_companies = data.production_companies;
          datas[movieIndex].episode_run_time = data.episode_run_time;
          datas[movieIndex].number_of_episodes = data.number_of_episodes;
          datas[movieIndex].number_of_seasons = data.number_of_seasons;
          datas[movieIndex].status = data.status;
          this.setState({
            datas
          });
      }
    })
  }

  render() {
    return (
      <div>
        <Header changeHandler = {this.changeHandler} searchMovies = {this.searchMovies} filterText = {this.state.filterText} handleKeyPress = {this.handleKeyPress} sortingMovies = {this.sortingMovies} selectChange = {this.selectChange} lang = {this.state.lang} selectType = {this.selectType} type = {this.state.type}  langText = {this.state.langText}></Header>
        <Main isData = {this.state.isData} datas = {this.state.datas} showDetails = {this.showDetails} page = {this.state.page} lang = {this.state.lang} langText = {this.state.langText} type = {this.state.type} isMoreData = {this.state.isMoreData}></Main>
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
