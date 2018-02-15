import React from 'react';

class Main extends React.Component {

  render() {
    return this.props.isData ? (
        <div className = "content container">
          {
            this.props.data.map((element,e,index) => {
              return (
                <div className = "movie" key = {element.id} onClick = {() => this.props.showDetails(element.id,e)}>
                  <div className = "row">
                    <div className = "col col-xl-3">
                      <img className = "poster" src = {'https://image.tmdb.org/t/p/w200' + element.poster_path}></img>
                    </div>
                    <div className = "col col-xl-9">
                      <h1 className = "title">{element.title}</h1>
                      <p className = "overview">{element.overview}</p>
                    </div>
                  </div>
                  {
                    <div className = "row details justify-content-center" style = {{display: this.props.show ? "flex" : "none"}}>
                      <span><strong>Popularity:</strong> {element.popularity}</span>
                      <span><strong>Vote average:</strong>{element.vote_average}</span>
                    </div>
                  }
                </div>
              )
            })
          }
      </div>
    ) : (<div>Null</div>)
  }
}

export default Main;
