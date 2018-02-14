import React from 'react';

class Header extends React.Component {

  render() {
    return (
        <div className = "row header">
          <div className = "col">
            <input name = "filterText" value = {this.props.filterText} onChange = {this.props.changeHandler} type = "text"
              placeholder ="Search title..."/>
            <button className = "btn" onClick = {this.props.searchMovies} type = "button">Search</button>
          </div>
          <div className = "col">Languages</div>
        </div>
    )
  }
}

export default Header;
