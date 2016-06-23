import React, { Component } from 'react';

class Header extends Component {

  render(){
    let columnCount = this.props.columnCount;

    let header = [];

    header.push(<th key="0"></th>);

    for (var i = 1; i <= columnCount; i++){
      header.push(<th key={i}>{i}</th>);
    }

    return (
      <thead>
        <tr>
          {header}
        </tr>
      </thead>
    );
  }
}

export default Header;
