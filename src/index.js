import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, Link, browserHistory } from 'react-router'


ReactDOM.render(
	<Router history={browserHistory} >
		<Route path='/' component={App}>
			<Route path='/home' component={Home} />
			<Route path='/about' component={About} />
			<Route path='/contact' component={Contact} />
			<Route path='/blog' component={Blog} />
		</Route>
	</Router>
	,document.getElementById('root')
);

