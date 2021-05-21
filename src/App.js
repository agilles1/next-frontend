import React from 'react'
import AuditionsContainer from './containers/AuditionsContainer'

class App extends React.Component {

  // componentDidMount(){
  //   fetch('http://localhost:3000/api/v1/auditions')
  //   .then(res => res.json())
  //   .then(data => console.log(data[0].instrument))
  // }


  render() {
    return (
      <div className="App">
        <AuditionsContainer />
      </div>
    );
  }
  
}

export default App;
