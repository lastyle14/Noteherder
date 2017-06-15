import React, { Component } from 'react';

import Main from './Main'

class App extends Component {
  constructor() {
    super()

    this.state = {
      notes: {
        'note-1': {
          id: 'note-1',
          title: 'Thoughs on react',
          body: 'React is cool',

        },
        'note-2': {
          id: 'note-2',
          title: 'state and props',
          body: 'wat',
        },
      },
    }
  }

  render() {
    return (
      <div className="App">
        <Main notes={this.state.notes}/>
      </div>
    );
  }
}

export default App;
