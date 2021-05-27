import React from 'react'
import AuditionsContainer from './containers/AuditionsContainer'
import Navigation from './components/Navigation'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Navigation/>
        <AuditionsContainer/>
      </div>
    );
  }
  
}

export default App;
