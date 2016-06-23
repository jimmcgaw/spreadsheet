import React, { Component } from 'react';

class Cell extends Component {
  render(){
    if (this.props.isGhost){
      return (
        <td>{this.props.rowKey}</td>
      );
    } else {
      return (
        <td>
          <input type="text" id={this.props.id} />
        </td>
      );
    }
  }
}

export default Cell;
