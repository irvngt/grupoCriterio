import React from 'react';
import Index from './pages/index';

export default class App extends React.Component{
  render(){
    return(
      <div id="wrapper">
        <div id="binder">
          <Index />
        </div>
      </div>
    )
  }
}
