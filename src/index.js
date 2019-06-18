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
import	editCampus from './editCampus';

  // this is a chagne! test!
const routing = (

	<Router>

		<div class="container">
			
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<a class="navbar-brand" >BRONX COLLEGE</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav mr-auto">
						<li class="nav-item active">
							<Link to="/"><a class="nav-link" href="#">HOME <span class="sr-only">(current)</span></a> </Link>
						</li>
						<li class="nav-item">
							<Link to="/Campus"><a class="nav-link" href="#">CAMPUS</a> </Link>
						</li>
						<li class="nav-item">
							<Link to="/Students"><a class="nav-link" href="#">STUDENTS</a> </Link>
						</li>

					</ul>
					
  					</div>
				</nav>

		

			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/Campus" component={Campus} />
				<Route path="/addNewCampus" component={addNewCampus} />
				<Route path="/editCampus" component={editCampus} />
				<Route exact path="/Students" component={Students} />
				<Route path="/Student-component/addNewStudent" component={addNewStudent} />
				<Route path="/Student-component/deletestudent" component={deletestudent}/>
				<Route path="/Student-component/editstudent" component ={editstudent}/>
				
				<Route component={Notfound} />
			</Switch>
		</div>

	</Router>



)

ReactDOM.render(routing, document.getElementById('root'));

