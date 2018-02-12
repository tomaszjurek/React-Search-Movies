import React from 'react';

class Main extends React.Component {
  render() {
    return this.props.isData ? (
        <div className="content">
          {
            <div>{this.props.data.results[0].overview}</div>
          }
      </div>
    ) : (<div>Null</div>)
  }
}

export default Main;
