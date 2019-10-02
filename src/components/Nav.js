import React, { Component } from 'react';
import Images from '../assets/img.js';
import { Link } from 'react-router-dom';


export default class NavBar extends Component {

    render() {
		
        return (
			<header>
				<div className="navbar navbar-dark bg-blue shadow-sm">
					<div className="container d-flex justify-content-between">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<Link to='/'className="logo-wrapper">
									<img src={Images.logo_white_small} alt="Uniwersytet SWSP" className="logo-small"/>
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/kierownik_projektu" className="btn btn-blue">
									Kierownik Projektu
									<i className="icon-user"></i>
								</Link>
							</li>
							<li className="nav-item">
							<Link to="/ankieta" className="btn btn-blue"> 
								Formularz badania
								<i className="icon-form"></i>
							</Link>

							</li>
						</ul>
					</div>
				</div>
			</header>
        )
    }
}
