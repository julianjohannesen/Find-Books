import React from 'react'
import ReactDOM from 'react-dom'
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './styles/index.scss'
import App from './components/App'
//import About from './components/About';
//import NoMatch from './components/NoMatch';
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

//      <Router>
//         <Switch>
//             <Route exact path="/" component={App} /> 
//             <Route path="/about" component={About} /> 
//             <Route component={NoMatch} />
//         </Switch>
//      </Router>
