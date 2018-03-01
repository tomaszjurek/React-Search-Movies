import React from 'react';

class Main extends React.Component {
  constructor(props) {
  super(props);
}

  render() {
    return this.props.isData ? (
        <div className = "content container">
          {
            this.props.datas.map((element,index) => {
              return (
                <div className = "movie" key = {element.id} onClick = {() => this.props.showDetails(element.id,index)}>
                  <div className = "row">
                    <div className = "col-xl-2 col-md-3 col-sm-4 col-xs-4">
                      <img className = "poster img-thumbnail" src = {element.poster_path !== null ? ('https://image.tmdb.org/t/p/w200' + element.poster_path) : ('./img/no_image.png')}></img>
                    </div>
                    <div className = "col-xl-9 col-md-8 col-sm-7 col-xs-7">
                      <h1 className = "title">{this.props.type !== "tv" ? element.title : element.name}</h1>
                      { element.overview !== "" ? (
                      <p className = "overview">{element.overview}</p>) : (
                      <p className = "overview">{this.props.langText.noData}</p>)}
                    </div>
                  </div>
                    <div className = "row details">
                      { element.release_date !== undefined &&
                      <p><strong>{this.props.langText.releaseDate} </strong>{element.release_date}</p>}
                      <p><strong>{this.props.langText.popularity} </strong>{element.popularity.toFixed(1)}</p>
                      <p><strong>{this.props.langText.voteCount} </strong>{element.vote_count}</p>
                      <p><strong>{this.props.langText.voteAverage}</strong>{element.vote_average}</p>
                    </div>
                    <div>
                      { element.genres !== undefined &&
                      <div className = "more-details">
                      <ul><strong>{this.props.langText.genres}</strong> {element.genres.map((genre, index) =>
                        <li key={genre.id}>{index >= 1 ? `, ${genre.name}` : genre.name}</li>)}
                      </ul>

                      <ul><strong>{this.props.langText.productionCompanies}</strong> {element.production_companies.map((company, index) =>
                        <li key={company.id}>{index >= 1 ? `, ${company.name}` : company.name}</li>)}
                      </ul>

                      { element.production_countries !== undefined &&
                      <ul><strong>{this.props.langText.productionCountries}</strong> {element.production_countries.map((country, index) =>
                          <li key={country.iso_3166_1}>{index >= 1 ? `, ${country.name}` : country.name}</li>)}
                      </ul>
                      }

                      { element.episode_run_time !== undefined &&
                        <ul><strong>{this.props.langText.runTime}</strong>{element.episode_run_time + " min"}</ul>
                      }

                      { element.number_of_seasons !== undefined &&
                        <ul><strong>{this.props.langText.seasonsNumber}</strong>{element.number_of_seasons}</ul>
                      }

                      { element.number_of_episodes !== undefined &&
                        <ul><strong>{this.props.langText.episodesNumber}</strong>{element.number_of_episodes}</ul>
                      }

                      { element.status !== undefined &&
                        <ul><strong>{this.props.langText.status}</strong>{element.status}</ul>
                      }

                      <ul><strong>IMDB:</strong> <a href={element.imdb_link}>{this.props.langText.imdb}</a></ul>

                    </div>
                      }
                    </div>
                </div>
              )
            })
          }
          {this.props.isMoreData ? <h2>{this.props.langText.moreLoad}</h2> : <h2>{this.props.langText.noMoreLoad}</h2>}
      </div>
    ) : (<h3 className = "welcome-text">{this.props.langText.welcome}</h3>)
  }
}

export default Main;
