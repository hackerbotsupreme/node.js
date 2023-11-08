import React, { Suspense, useState } from "react";
import ReactDOM from 'react-dom';
import Clock from 'react-live-clock';
import './index.css'
const App = () => {
  return (
    <React.Fragment >
      <h1> my name</h1>
      <div><Clock format="HH:mm:ss" interval={1000} ticking={true} /></div>
    </React.Fragment>
  );
}

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>, document.getElementById('root')
);