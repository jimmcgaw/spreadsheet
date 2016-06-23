import React, { Component } from 'react';

import Cell from './Cell';

class Row extends Component {

  render(){
    let columnCount = this.props.columnCount;

    let rowTemplate = [];

    rowTemplate.push(<Cell key="0" id="0" isGhost={true} rowKey={this.props.rowKey} />)

    for (var j = 1; j <= columnCount; j++){
      let key = "row" + this.props.rowKey + "cell" + j.toString();
      rowTemplate.push(<Cell key={key} id={key} />);
    }
    rowTemplate.push(<Cell key="-1" id="-1" isGhost={true} />)

    return (
      <tr>
        {rowTemplate}
      </tr>
    );
  }
}


export default Row;
