import React from 'react'
import AuditionsContainer from './containers/AuditionsContainer'
import { Route } from 'react-router'


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Route render={(routerProps) => <AuditionsContainer {...routerProps}/>} />
      </div>
    );
  }
  
}

export default App;
