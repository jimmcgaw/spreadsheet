import React, { Component } from 'react';

import Row from './Row';

let tableStyles = {
  borderCollapse: 'collapse'
};

class Body extends Component {

  render(){
    let rowCount = this.props.rowCount;
    let columnCount = this.props.columnCount;

    let sheet = [];
    for (var j = 1; j <= rowCount; j++){
      let key = "row" + j.toString()
      sheet.push(<Row rowKey={j} key={j} columnCount={columnCount} />);
    }

    return (
      <tbody>
        {sheet}
      </tbody>
    );
  }
}


export default Body;
