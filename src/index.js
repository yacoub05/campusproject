import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import Home from './Home';
import Students from './Students';
import Notfound from './notfound';
import Campus from './Campus'
import addNewStudent from './addNewStudent';




const routing = (

	<Router>

		<div>

			<ul>
				<li><Link to="Home">Home</Link></li>
				<li><Link to="Campus">Campuses</Link></li>
				<li><Link to="Students">Students</Link></li>

			</ul>

			<Switch>
				<Route exact path="/Home" component={Home} />
				<Route path="/Campus" component={Campus} />
				<Route path="/Students" component={Students} />
				<Route path="/addNewStudent" component={addNewStudent} />

				<Route component={Notfound} />
			</Switch>
		</div>



	</Router>



)


ReactDOM.render(routing, document.getElementById('root'));

