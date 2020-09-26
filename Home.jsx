 import React,{PureComponent,Fragment} from 'react';
import ReactDOM from 'react-dom';

import Navbar from './Navbar'


class Home extends PureComponent {


state={
  options: [
      {
        name: 'Select…',
        value: null,
      },
      {
        name: 'A',
        value: "quis ut nam facilis et officia qui",
      },
      {
        name: 'B',
        value: "fugiat veniam minus",
      },
      {
        name: 'C',
        value: "et porro tempora",
      },
    ],
    value: '?',
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {


    const { options, value } = this.state;

    return (
    <>
<Navbar />





      <Fragment>
        <select onChange={this.handleChange} value={value}>
          {options.map(item => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p> 
        {value}</p>
      </Fragment>
      </>

    );
  }
    }
    
   export default Home