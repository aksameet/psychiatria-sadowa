import React from 'react';
import { Link } from 'react-router-dom';
const Znaczenie = () => {
    return (
        <div className="container p-5">
            <div className="first-text">
                <Link to='/'className="btn btn-light mb-3">
                    <i className="chevron-left"></i>Strona główna
                </Link>
                <h1 className="my-5">Znaczenie Projektu</h1>
                <p>
                    Instytucja środków leczniczo-zabezpieczających wobec sprawców poważnych przestępstw kryminalnych, wobec których stwierdzono niepoczytalność tempore criminis na podstawie art.31 § 1 kk, jest najsurowszym środkiem, orzekanym bezterminowo, wzbudzającym szereg
                    kontrowersji i zastrzeżeń. Środki zabezpieczające są nierzadko obiektem spekulacji środowisk medialnych, politycznych i społecznych.
                </p>
                <p>
                    Autor projektu spodziewa się, że uzyskane wyniki przyczynią się do szerszej dyskusji na temat potrzeby stworzenia profesjonalnych wytycznych w systemie psychiatrii sądowej, obejmujących opis preferowanych procedur leczniczych, terapeutycznych, rehabilitacyjnych
                    i prognostycznych. Dostarczenie takich wytycznych daje szansę na większą standaryzację, skuteczność leczenia i większą ochronę praw pacjenta w systemie psychiatrii sądowej.
                </p>
                <p>
                    Wobec systemu psychiatrii sądowej wysuwane są dwutorowe oczekiwania: z jednej strony dotyczące konieczności zapewnienia bezpieczeństwa obywateli, a z drugiej strony postulujące położenie większego nacisku na ochronę praw człowieka i pacjenta poprzez m.in.
                    zapobieganie przedłużającym się detencjom. Wobec powszechnego dążenia do standaryzacji leczenia w wielu specjalizacjach medycznych, czego wyrazem jest publikowanie wytycznych, zastanawiający jest brak szczegółowych, preferowanych procedur
                    leczniczych, terapeutycznych, rehabilitacyjnych i prognostycznych w polskim systemie psychiatrii sądowej.
                </p>
            </div>
        </div>
    );
}

export default Znaczenie;