import React from 'react';

class Header extends React.Component {

  render() {
    return (
        <div className = "row header justify-content-between">
          <div className = "col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-5 input-group">
            <input className = "form-control" name = "filterText" value = {this.props.filterText} onChange = {this.props.changeHandler} onKeyPress = {this.props.handleKeyPress} type = "text"
              placeholder = {this.props.langText.searchTitles}/>
            <div className = "input-group-btn">
              <select className = "btn btn-default select-type" name = "type" value = {this.props.type} onChange = {this.props.selectType}>
                <option value = "movie">movies</option>
                <option value = "tv">tv series</option>
              </select>
              <button className = "btn btn-default" onClick = {this.props.searchMovies} type = "button">{this.props.langText.search}</button>
            </div>
          </div>
          <div className = "col-xl-5 col-lg-5 col-md-5 col-sm-6 col-xs-4 align-right margin-top-small">
            <select className = "btn btn-default select-style" name = "lang" value = {this.props.lang} onChange = {this.props.selectChange}>
              <option value = "0">english</option>
              <option value = "1">polski</option>
              <option value = "2">deutsch</option>
              <option value = "3">español</option>
            </select>
            <button className = "btn btn-default" onClick = {this.props.sortingMovies} type = "button">{this.props.langText.sorting}</button>
          </div>
        </div>
    )
  }
}
// ./img/poland.png
export default Header;
