import React from 'react';

class Header extends React.Component {

  render() {
    return (
        <div className = "row header justify-content-between">
          <div className = "col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-5 input-group">
            <input className = "form-control" name = "filterText" value = {this.props.filterText} onChange = {this.props.changeHandler} onKeyPress = {this.props.handleKeyPress} type = "text"
              placeholder = {this.props.langText.searchTitles}/>
            <div className = "input-group-btn">
              <button className = "btn btn-default" onClick = {this.props.searchMovies} type = "button">{this.props.langText.search}</button>
            </div>
          </div>
          <div className = "col-xl-4 col-lg-4 col-md-4 col-sm-5 col-xs-3 align-right margin-top-small">
            <select className = "btn btn-default" name = "lang" value = {this.props.lang} onChange = {this.props.selectChange}>
              <option value = "0">en</option>
              <option value = "1">pl</option>
              <option value = "2">de</option>
            </select>
            <button className = "btn btn-default" onClick = {this.props.sortingMovies} type = "button">{this.props.langText.sorting}</button>
          </div>
        </div>
    )
  }
}

export default Header;
