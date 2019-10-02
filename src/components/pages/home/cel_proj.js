import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CelProj extends Component {
    render() {
        return (
            <main>
                <div className="py-5 bg-vlight">
                    <div className="container p-5">
                        <div className="first-text">
                            <h3 className="mb-4">Cel naukowy projektu</h3>
                            <p>
                                Określenie poziomu standaryzacji dostarczanych procedur leczniczych, terapeutycznych, rehabilitacyjnych i prognostycznych w oddziałach psychiatrii sądowej w Polsce.
                            </p>
                            <p>
                                Cel ten wynika z braku ustalonych formalnie standardów ww. zakresie. Zasadnicza część projektu poświęcona jest identyfikacji preferowanych procedur w polskich oddziałach psychiatrii sądowej, a następnie dokonaniu analizy porównawczej i ustalenia poziomu
                                standaryzacji. Dodatkowo, zostanie dokonana analiza porównawcza dominujących w Polsce procedur ze standardami ustalonymi na podstawie przeglądu światowej literatury i zagranicznych wytycznych dotyczących psychiatrii sądowej.
                            </p>
                            <p>
                                Autor projektu spodziewa się znaczących różnic w preferowanych procedurach w polskich oddziałach psychiatrii sądowej. W ramach projektu zostanie przeprowadzone badanie ankietowe pośród 80 osób (psychiatrów, psychologów, psychoterapeutów, terapeutów zajęciowych,
                                terapeutów uzależnień) pracujących w oddziałach psychiatrii sądowej. Autor projektu zakłada, że uzyskane wyniki przyczynią się do dyskusji na temat potrzeby stworzenia krajowych wytycznych odnośnie pożądanychprocedur w systemie
                                psychiatrii sądowej.
                            </p>
                            <Link to='/cel_projektu' className="btn btn-light">Pełny opis</Link>
                        </div>
                    </div>
                </div>
            </main>

        )
    }
};

export default CelProj;