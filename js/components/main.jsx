import React from 'react';

class Main extends React.Component {

  render() {
    return this.props.isData ? (
        <div className = "content container">
          {
            this.props.datas.map((element,index) => {
              return (
                <div className = "movie" key = {element.id} onClick = {() => this.props.showDetails(element.id,index)}>
                  <div className = "row">
                    <div className = "col col-xl-2">
                      <img className = "poster img-thumbnail" src = {'https://image.tmdb.org/t/p/w200' + element.poster_path}></img>
                    </div>
                    <div className = "col col-xl-10 ">
                      <h1 className = "title">{element.title}</h1>
                      <p className = "overview">{element.overview}</p>
                    </div>
                  </div>
                    <div className = "row details">
                      <p><strong>Release Date: </strong>{element.release_date}</p>
                      <p><strong>Popularity: </strong>{element.popularity}</p>
                      <p><strong>Vote Count: </strong>{element.vote_count}</p>
                      <p><strong>Vote average: </strong>{element.vote_average}</p>
                    </div>
                    <div>
                      {/* { element.genres !== undefined &&
                      <section>
                      <h6>: <ul>{element.genres.map((genre, index) =>
                        <li key={genre.id}><strong>{index===0 ? genre.name : `, ${genre.name}`}</strong></li>)}</ul>
                      </h6>
                      <h6>: <ul>{element.production_countries.map((country, index) =>
                        <li key={country.iso_3166_1}><strong>{index===0 ? country.name : `, ${country.name}`}</strong></li>)}</ul>
                      </h6>
                      <h6>: <ul>{element.production_companies.map((company, index) =>
                        <li key={company.id}><strong>{index===0 ? company.name : `, ${company.name}`}</strong></li>)}</ul>
                      </h6>
                      <h6>IMDB: <a href={element.imdb_link}>
                        {element.imdb_link.split("//")[1]}
                      </a></h6>
                    </section>
                      } */}
                    </div>
                </div>
              )
            })
          }
      </div>
    ) : (null)
  }
}

export default Main;
