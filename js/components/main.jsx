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
                    <div className = "col col-xl-2 col-md-3 col-sm-4 col-xs-4">
                      <img className = "poster img-thumbnail" src = {element.poster_path !== null ? ('https://image.tmdb.org/t/p/w200' + element.poster_path) : ('./img/no_image.png')}></img>
                    </div>
                    <div className = "col col-xl-10 col-md-9 col-sm-8 col-xs-8">
                      <h1 className = "title">{element.title}</h1>
                      <p className = "overview">{element.overview}</p>
                    </div>
                  </div>
                    <div className = "row details">
                      <p><strong>{this.props.langText.releaseDate} </strong>{element.release_date}</p>
                      <p><strong>{this.props.langText.popularity} </strong>{element.popularity}</p>
                      <p><strong>{this.props.langText.voteCount} </strong>{element.vote_count}</p>
                      <p><strong>{this.props.langText.voteAverage}</strong>{element.vote_average}</p>
                    </div>
                    <div>
                      { element.genres !== undefined &&
                      <div className = "more-details">
                      <ul><strong>{this.props.langText.genres}</strong> {element.genres.map((genre, index) =>
                        <li key={genre.id}>{index >= 1 ? `, ${genre.name}` : genre.name}</li>)}
                      </ul>
                      <ul><strong>{this.props.langText.productionCountries}</strong> {element.production_countries.map((country, index) =>
                        <li key={country.iso_3166_1}>{index >= 1 ? `, ${country.name}` : country.name}</li>)}
                      </ul>
                      <ul><strong>{this.props.langText.productionCompanies}</strong> {element.production_companies.map((company, index) =>
                        <li key={company.id}>{index >= 1 ? `, ${company.name}` : company.name}</li>)}
                      </ul>
                      <ul><strong>IMDB:</strong> <a href={element.imdb_link}>{this.props.langText.imdb}</a></ul>
                    </div>
                      }
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
