import React from 'react';
import { Link } from 'react-router-dom';

const Cel = () => {
		return (
            <div class="container marketing">
                <div class="container p-5">
                    <div class="first-text">
                        <Link to='/'className="btn btn-light mb-3">
                            <i className="chevron-left"></i>Strona główna
                        </Link>
                        <h1 class="my-5">Cel naukowy projektu</h1>
                        <p>
                            Cel naukowy projektu koncentruje się wokół określenia poziomu standaryzacji dostarczanych procedur leczniczych, terapeutycznych, rehabilitacyjnych i prognostycznych w oddziałach psychiatrii sądowej w Polsce. Cel ten wynika z braku ustalonych formalnie
                            standardów w zakresie preferowanych oddziaływań i procedur. Zasadnicza część projektu poświęcona jest identyfikacji tychże form leczenia, terapii, rehabilitacji i prognozy, a następnie analizie porównawczej stosowanych procedur
                            pomiędzy oddziałami psychiatrii sądowej w Polsce pod kątem poziomu standaryzacji. Dodatkowym celem jest odniesienie danych uzyskanych w Polsce do standardów ustalonych na podstawie przeglądu literatury światowej i międzynarodowych
                            wytycznych. Na bazie wstępnej analizy międzynarodowych wytycznych dotyczących psychiatrii sądowej, dostępnej polskiej legislacji, nielicznych rodzimych opracowań wskazujących na brak precyzyjnych uregulowań i wytycznych w zakreślonej
                            dziedzinie, autor projektu przyjął następujące hipotezy badawcze:
                        </p>
                        <p>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Pomiędzy polskimi oddziałami psychiatrii sądowej w Polsce istnieją znaczące różnice w zakresie standaryzacji stosowanych procedur (leczniczych, terapeutycznych, rehabilitacyjnych, prognostycznych).</li>
                                <li class="list-group-item">Stosowane w polskich oddziałach psychiatrii sądowej procedury różnią się znacząco od standardów określonych na podstawie literatury światowej i międzynarodowych wytycznych w zakresie psychiatrii sądowej. </li>
                                <li class="list-group-item">Stopień zgodności procedur w polskich oddziałach psychiatrii sądowej ze standardami określonymi na podstawie literatury światowej i międzynarodowych wytycznych w zakresie psychiatrii sądowej zależy od
                                    <ul>
                                        <li>stopnia zabezpieczenia oddziału</li>
                                        <li>ogólnej liczby personelu przypadającej na jednego pacjenta</li>
                                        <li>położenia geograficznego oddziału</li>
                                    </ul>
                                </li>
                            </ul>
                        </p>
                        <p>
                            Ogólny plan zakłada objęcie badaniem ankietowym pięciu grup (razem 80 osób) reprezentujących główne zawody występujące w systemie psychiatrii sądowej tj. 16 lekarzy psychiatrów, 16 psychologów - bez kwalifikacji w zakresie psychoterapii, 16 psychoterapeutów,
                            16 terapeutów zajęciowych, 16 terapeutów uzależnień z różnych oddziałów psychiatrii sądowej w Polsce. Badanie obejmie po 1 oddziale psychiatrii sądowej w każdym z 16 województw w Polski (1 oddział psychiatrii sądowej na 1 województwo)
                            w celu zwiększenia reprezentatywności próby badanej.
                        </p>
                    </div>
                </div>
            </div>
		);
}

export default Cel;