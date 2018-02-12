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
      data: {}
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
        data: data
      })
    })
  }

  changeHandler = (event) =>
  this.setState({ [event.target.name]: event.target.value })

  render() {
    return (
      <div>
        <Header changeHandler = {this.changeHandler} searchMovies = {this.searchMovies} filterText = {this.state.filterText}></Header>
        <Main isData = {this.state.isData} data = {this.state.data}></Main>
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
