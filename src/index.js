import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import buss from './images/3dbusiness.png'
import reportWebVitals from './reportWebVitals';

const Intro = () =>  (
  <img src={buss} alt="logo de fredthedev"/>
)

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    
    return (
      <div>
           <Intro />
      </div>
      

   
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)


