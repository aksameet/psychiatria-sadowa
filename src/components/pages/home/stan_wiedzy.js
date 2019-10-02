import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class StanWiedzy extends Component {
    render() {
        return (
            <div className="ref bg-dark py-5 color-light">
                <div className="container p-5">
                    <h3 className="color-light my-4">Stan Wiedzy</h3>
                    <p>
                        Przegląd polskiej legislacji i nielicznych opracowań krajowych dotyczący środków leczniczo-zabezpieczających wskazuje jedynie na ogólne cele, charakter i miejsce tychże środków w polskim systemie prawa karnego.</p>
                    <p>
                        Brakuje jednak szczegółowych przepisów i krajowych wytycznych precyzujących standardowe i preferowane procedury i oddziaływania lecznicze, rehabilitacyjne, terapeutyczne oraz prognostyczne, które należy stosować, aby osiągnąć zamierzone cele w postaci
                        skutecznej i możliwie szybkiej readaptacji niepoczytalnego sprawcy czynu kryminalnego do społeczeństwa i zminimalizowania ryzyka ponowienia czynów o znacznej szkodliwości społecznej.
                    </p>
                    <p>
                        Pojedyncze krajowe publikacje dotyczą procedur i oddziaływań w konkretnych oddziałach psychiatrii sądowej. Brak jest natomiast kompleksowych informacji z pozostałych ośrodków, pozwalających na analizę porównawczą i określenie stopnia standaryzacji w odziałach
                        w całej Polsce. Jednocześnie szereg publikacji światowych wskazuje na specyficzne, korzystne formy procedur i oddziaływań. Wyrazem dążenia do standaryzacji leczenia pacjentów sądowych na świecie jest także tworzenie wytycznych zawodowych,
                        m.in. najnowsze wytyczne Europejskiego Towarzystwa Psychiatrycznego z 2018r.
                    </p>
                    <Link to='/znaczenie_projektu' className="btn btn-light">Czytaj dalej</Link>
                </div>
            </div>
        )
    }
}
