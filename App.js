import React from "react";
import "./styles.css";

const apiURL = "https://api.randomuser.me/";

class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      person: null,
      loading: true,
    }
  }

  async componentDidMount()
  {
    const response = await fetch(apiURL);
    const jsonData = await response.json();

    this.setState({person : jsonData.results[0], loading : false});
    
    // debug
    //console.log(jsonData);
    //console.log(this.state.person.name.first);
  }

  render()
  {
    return (
      <div className="App">
        {((this.state.loading) || (this.state.person === null)) ? <div><h5>Please wait while app is loading</h5></div> : <div>Hello from API {this.state.person.name.first} {this.state.person.name.last}</div>}

      </div>
    );
  }
}

export default App;
