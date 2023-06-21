import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Student from "./components/student";
import axios from 'axios';

class App extends React.Component {

  state = {
    'active': 'home',

    data: [

    ],

  }

  // Base url
  url = "http://localhost:3000/"


  // Fetch data once the page loads
  componentDidMount() {
    this.fetchData();
  }

  // Fetch featured case data for error validation
  fetchData = async () => {
    try {
      let response = await axios.get(this.url + "profile")
      this.setState({
        data: response.data
      })

    } catch (e) {
      this.setState({
        active: 'errorMessage'
      })

    }

  }

  render() {
    return (
      <React.Fragment>
        {/* Logo and Title of website */}
        <div id="nav"></div>

        <div className="App">
          
          <div className="fixed-bg bg-1"><Student /></div> 
          <div className="fixed-bg bg-2">
            <span className="title1"> </span>
          </div>
          
        </div>
      </React.Fragment>
    );
  }
}

// Render the React component inside the 'root' element
export default App;
