import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import NavBar from './Nav';

import Home from './pages/home/Home';
import Form from './pages/form';
import Cel from './pages/cel';
import Kierownik from './pages/kierownik';
import Polityka from './pages/polityka_prywatnosci';
import Znaczenie from './pages/znaczenie'; 

import Footer from './Footer';
import history from '../history';

const App = () => {
	return (
		<div>
			<Router history={history}>
				<div>
					<NavBar />
					<main>
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/ankieta" exact component={Form} />
							<Route path="/cel_projektu" exact component={Cel} />
							<Route path="/polityka_prywatnosci" exact component={Polityka} />
							<Route path="/kierownik_projektu" exact component={Kierownik} />
							<Route path="/znaczenie_projektu" exact component={Znaczenie} />
						</Switch>
					</main>
					<Footer />
				</div>
			</Router>
		</div>
	);
}

export default App;