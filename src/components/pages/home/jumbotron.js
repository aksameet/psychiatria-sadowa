import React, { Component } from 'react';
import Images from '../../../assets/img.js';

class Jumbotron extends Component {
    render() {
        return (
            <section className="jumbotron mb-0">
                <div className="jumbotron-container p-5">
                    <div className="logo-img">
                        <img src={Images.logo_white_big} alt="Uniwersytet SWSP"/>
                    </div>
                    <h1 className="jumbotron-heading">Standaryzacja procedur w systemie psychiatrii sądowej</h1>
                    <div className="notation">
                        <hr/>
                        <p>Projekt nr <b>WP/2018/B/46</b> finansowany ze środków</p>
                        <p>Uniwersytetu SWPS w Warszawie </p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Jumbotron;