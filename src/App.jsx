import React from 'react';
import ScriptTag from 'react-script-tag'

class App extends React.Component {
  render() {
    return (<ScriptTag type='text/jsx' src='../public/index.html' />)
  }
}

export default App;
