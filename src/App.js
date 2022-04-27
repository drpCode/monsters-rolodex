import {Component} from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      name: {fisrtName: 'Daniel', lastName: 'Ruiz'},
      company: 'Orange Bank'
    };
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name.fisrtName} {this.state.name.lastName}, I work at {this.state.company}</p>
          {/* 
          <button onClick={() => {
            this.setState({name: {fisrtName: 'Alba', lastName: 'Mingo'}});
          }}>Change Name</button>
          */}
          <button onClick={() => {
            this.setState(
              (state,props) => {
                return {name: {fisrtName: 'Alba', lastName: 'Mingo'}};
              }, 
              () => {
                console.log(this.state)
              }
            );
          }}>Change Name</button>

        </header>
      </div>
    );
  }

}

export default App;
