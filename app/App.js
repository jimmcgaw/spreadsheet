import React, { Component } from 'react';
import { render } from 'react-dom';

import Spreadsheet from './components/Spreadsheet';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      rowCount: 10,
      columnCount: 5
    };

    this.onAddColumn = this.onAddColumn.bind(this);
    this.onAddRow = this.onAddRow.bind(this);
  }

  onAddColumn(){
    let columnCount = this.state.columnCount;
    this.setState({
      columnCount: columnCount+1
    });
  }

  onAddRow(){
    let rowCount = this.state.rowCount;
    this.setState({
      rowCount: rowCount+1
    });
  }

  render(){
    return (
      <div>
        <Spreadsheet
          rowCount={this.state.rowCount}
          columnCount={this.state.columnCount}
          onAddColumn={this.onAddColumn}
          onAddRow={this.onAddRow} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
