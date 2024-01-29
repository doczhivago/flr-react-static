import React from 'react';
import Header from './components/Header/Header';
import Intro from './containers/Intro';

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Header />   
          <Intro /> 
        </div>
    )
  }
}

export default App;
