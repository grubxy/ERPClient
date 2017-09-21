import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import App from './App';
import LoginForm from './loginLayout.js'
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
		<Router>
			<div>
				<Route path="/login" component={LoginForm}/>
				<Route path="/app" component={App}/>
			</div>
		</Router>, 
	document.getElementById('root')
);
registerServiceWorker();
