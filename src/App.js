import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  

  render() {
    return (
      <React.Fragment>
        {/* Logo and Title of website */}
        <div id="nav">
        </div>

        <div className="App">
          
            <div className='fixed-bg bg-1'>
            </div>
            <div className="fixed-bg bg-2"><span className="title1" > </span></div>

            <div className="fixed-bg bg-3"><span className="title2" ></span></div>

          </div>
          

        
      </React.Fragment>
    );
  }
}

// Render the React component inside the 'root' element
export default App;

