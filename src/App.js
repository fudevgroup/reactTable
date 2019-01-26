import React, { Component } from 'react';
import './App.css';
import {Table} from './_components';
import {tableSchema} from './_constant';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={{color:'#FFF',textShadow:'#00000047 1px 1px 5px'}}>Editable Table</h1>
        <Table schema={tableSchema}/>
      </div>
    );
  }
}

export default App;
