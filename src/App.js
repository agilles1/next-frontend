import React from 'react'
import AuditionsContainer from './containers/AuditionsContainer'
import { Route} from 'react-router'

class App extends React.Component {

  // componentDidMount(){
  //   fetch('http://localhost:3000/api/v1/auditions')
  //   .then(res => res.json())
  //   .then(data => console.log(data[0].instrument))
  // }


  render() {
    return (
      <div className="App">
        <Route path='/auditions/:id' render={(routerProps) => <AuditionsContainer {...routerProps}/>} />
      </div>
    );
  }
  
}

export default App;
