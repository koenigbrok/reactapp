import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


var BuckyCoftmponent = createReactClass({
           render: function() {
                return (<h2>This is a hhhh component</h2>);
           }
        });
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
 //<h1>Reacttest</h1>,
<BuckyCoftmponent />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
