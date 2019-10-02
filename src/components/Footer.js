import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <footer className="py-4 bg-blue color-light">
                <div className="container">
                    <div className="data">
                        <p>© Michał Nowopolski, 2019, wszystkie prawa zastrzeżone.</p>
                        <p><Link to='/polityka_prywatnosci'>Polityka Prywatności</Link></p>
                    </div>
                    <div className="dev">
                        <button onClick="location.href='mailto:michalnowopolski@gmail.com';">
                            <div className="svg-footer">
                            </div></button>
                    </div>
                </div>
            </footer>
        )
    }
}
