import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import Home from './Home';
import Students from './Students';
import Notfound from './notfound';
import Campus from './Campus'
import addNewCampus from './addNewCampus';
import addNewStudent from './Student-component/addNewStudent';
import deletestudent from './Student-component/deletestudent';
import editstudent from './Student-component/editstudent';




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
				<Route path="/Student-component/addNewStudent" component={addNewStudent} />
				<Route path="/Student-component/deletestudent" component={deletestudent}/>
				<Route path="/addNewCampus" component={addNewCampus} />
				<Route path="/Student-component/editstudent" component ={editstudent}/>

				<Route component={Notfound} />
			</Switch>
		</div>



	</Router>



)


ReactDOM.render(routing, document.getElementById('root'));

