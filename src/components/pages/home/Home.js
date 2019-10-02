import React, { Component } from 'react';
import Jumbotron from './jumbotron';
import CelProj from './cel_proj';
import StanWiedzy from './stan_wiedzy';

export default class App extends Component {
	render() {
		return (
			<div>
				<Jumbotron />
				<CelProj />
				<StanWiedzy />
			</div>
		);
	}
}
