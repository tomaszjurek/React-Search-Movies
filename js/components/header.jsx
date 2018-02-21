import React from 'react';

class Header extends React.Component {

  render() {
    return (
        <div className = "row header">
          <div className = "col">
            <input name = "filterText" value = {this.props.filterText} onChange = {this.props.changeHandler} onKeyPress = {this.props.handleKeyPress} type = "text"
              placeholder = {this.props.langText.searchTitles}/>
            <button className = "btn" onClick = {this.props.searchMovies} type = "button">{this.props.langText.search}</button>
          </div>
          <select name = "lang" value = {this.props.lang} onChange = {this.props.selectChange}>
            <option value = "0">en</option>
            <option value = "1">pl</option>
            <option value = "2">de</option>
          </select>
          <button className = "btn" onClick = {this.props.sortingMovies} type = "button">{this.props.langText.sorting}</button>
        </div>
    )
  }
}

export default Header;
