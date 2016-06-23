import React, { Component } from 'react';

import Body from './Body';
import Header from './Header';

let tableStyles = {
  borderCollapse: 'collapse'
};

class Spreadsheet extends Component {

  render(){
    let rowCount = this.props.rowCount;
    let columnCount = this.props.columnCount;

    return (
      <div>
        <table style={tableStyles}>
          <Header columnCount={columnCount} />
          <Body rowCount={rowCount} columnCount={columnCount} />
        </table>
        <button onClick={this.props.onAddRow}>Add Row</button>
        <button onClick={this.props.onAddColumn}>Add Column</button>
      </div>
    );
  }
}


export default Spreadsheet;
