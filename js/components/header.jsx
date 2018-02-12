import React from 'react';

class Header extends React.Component {

  render() {
    return (
        <div className = "header">
          <div className = "input-group">
            <input className = "form-control" name = "filterText" value = {this.props.filterText} onChange = {this.props.changeHandler} type = "text"
              placeholder ="Search title..."/>
            <button className = "btn" onClick = {this.props.searchMovies} type = "button">Search</button>
          </div>
        </div>
    )
  }
}

export default Header;
