import React from 'react';
import { Link } from 'react-router-dom';
const Form = () => {
		return (
            <div className="container p-5">
                <Link to='/'className="btn btn-light mb-3">
                    <i className="chevron-left"></i>Strona główna
                </Link>
                <div className="formularz">
                    <div className="login">
                        <h1 className="my-5">Ankieta - logowanie</h1>
                        <form className="form-signin">
                            <div className="form-label-group mb-3">
                                <label for="inputEmail">Email</label>
                                <input type="email" id="inputEmail" className="form-control" placeholder="Email" required autofocus/>
                            </div>

                            <div className="form-label-group mb-3">
                                <label for="inputPassword">Hasło</label>
                                <input type="password" id="inputPassword" className="form-control" placeholder="Hasło" required/>
                            </div>

                            <div className="custom-control custom-checkbox mb-3">
                                <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                <label className="custom-control-label" for="customCheck1">Zapamiętaj mnie</label>
                            </div>
                            <button className="btn btn-blue" type="submit">Zaloguj</button>
                        </form>
                    </div>
                    <div className="first-text">
                        <h1 className="my-5">Ankieta - rejestracja</h1>
                        <form className="needs-validation" novalidate>
                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <label for="validationCustom01">Imię</label>
                                    <input type="text" className="form-control" id="validationCustom01" placeholder="Imię" value="" required/>
                                    <div className="valid-feedback">
                                        Wygląda dobrze!
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="validationCustom02">Nazwisko</label>
                                    <input type="text" className="form-control" id="validationCustom02" placeholder="Nazwisko" value="" required/>
                                    <div className="valid-feedback">
                                        Wygląda dobrze!
                                    </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label for="validationCustomUsername">Użytkownik</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroupPrepend">@</span>
                                        </div>
                                        <input type="text" className="form-control" id="validationCustomUsername" placeholder="Użytkownik" aria-describedby="inputGroupPrepend" required/>
                                        <div className="invalid-feedback">
                                            Proszę wybrać nazwę użytkownika.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-7 mb-3">
                                    <label for="validationCustom03">Miasto</label>
                                    <input type="text" className="form-control" id="validationCustom03" placeholder="Miasto" required/>
                                    <div className="invalid-feedback">
                                        Proszę podać miasto.
                                    </div>
                                </div>
                                <div className="col-md-7 mb-3">
                                    <label for="validationCustom04">Województwo</label>
                                    <input type="text" className="form-control" id="validationCustom04" placeholder="Województwo" required/>
                                    <div className="invalid-feedback">
                                        Proszę podać województwo.
                                    </div>
                                </div>
                                <div className="col-md-7 mb-3">
                                    <label for="validationCustom05">Kod pocztowy</label>
                                    <input type="text" className="form-control" id="validationCustom05" placeholder="Kod pocztowy" required/>
                                    <div className="invalid-feedback">
                                        Proszę podać poprawny kod pocztowy.
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                                    <label className="form-check-label" for="invalidCheck">
                                                    Zaakceptuj <a href="/pages/polityka_prywatnosci.html">Politykę Prywatności</a>
                                                </label>
                                    <div className="invalid-feedback">
                                        Musisz się zgodzić aby ukończyć rejestrację.
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-gold" type="submit">Zarejestruj</button>
                        </form>

                        {/* <script>
                            // Example starter JavaScript for disabling form submissions if there are invalid fields
                            (function() {
                                'use strict';
                                window.addEventListener('load', function() {
                                    // Fetch all the forms we want to apply custom Bootstrap validation styles to
                                    var forms = document.getElementsByClassNclassNameName('needs-validation');
                                    // Loop over them and prevent submission
                                    var validation = Array.prototype.filter.call(forms, function(form) {
                                        form.addEventListener('submit', function(event) {
                                            if (form.checkValidity() === false) {
                                                event.preventDefault();
                                                event.stopPropagation();
                                            }
                                            form.classNameList.add('was-validated');
                                        }, false);
                                    });
                                }, false);
                            })();
                        </script> */}
                    </div>
                </div>
            </div>
		);
}

export default Form;