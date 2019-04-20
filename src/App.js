import React, { Component } from 'react';
import InfoBar from "./components/info-bar/Info-bar.js";
import Nav2 from "./components/nav-bar/Nav2.js";
// import Nav1 from "./components/nav-bar/Nav1.js";
import Check from "./components/check/Check.js";
import './App.css';

class App extends Component {
	constructor()
	{
		super();
		this.state=
					{
						temp:""
					};
	}
	componentDidMount()
	{
		return fetch("https://api.openweathermap.org/data/2.5/weather?lat=26.2183&lon=78.1828&units=metric&appid=2adbb2734e34fe9de06069b58aa331ed")
		.then((response)=>{
			return response.json();
		})
		.then(data=>
		{
			this.setState({temp:data.main.temp});
		})
	}
  render() {
    return (
      <div className="App">
        <InfoBar temp={this.state.temp} />
        <Nav2 />
        <Check />
      </div>
    );
  }
}

export default App;
