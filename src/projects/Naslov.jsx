import { useEffect, useState } from "react";

const Objasnjenje = ({ metoda }) => {
  const [naslov, setNaslov] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    if (metoda === "regula") {
      setNaslov("Metoda Regula Falsi");
      setDescription("Ova metoda kombinuje ideje metode polovljenja i secirajuće tačke. Umesto uzimanja sredine intervala, koristi se tačka gde prava koja povezuje vrednosti funkcije na krajevima intervala seče x-osu. Ta tačka postaje novi kraj intervala.");
    } else if (metoda === "polovljenje") {
      setNaslov("Metoda Polovljenja Intervala");
      setDescription("Ova metoda se koristi za numeričko rešavanje jednačina i zasniva se na svojstvu neprekidnih funkcija da menjaju znak na intervalu gde funkcija ima koren. Metoda deli interval na pola i zadržava polovinu koja sadrži koren, sve dok ne dostigne zadatu tačnost.");
    } else if (metoda === "prosta-iteracija") {
      setNaslov("Metoda Proste Iteracije");
      setDescription("Metoda proste iteracije je numerički algoritam za rešavanje jednačina. Ideja je iterativno poboljšavati pretpostavljeno rešenje. Na osnovu početne tačke, koristi se iterativna formula da bi se dobile naredne vrednosti, ažurirajući pretpostavljeno rešenje sve dok ne dostignemo dovoljnu preciznost.");
    } else if (metoda === "newton") {
      setNaslov("Newton-Raphsonova Metoda");
      setDescription("Newton-Raphsonova metoda je iterativni numerički algoritam za aproksimaciju korena realne funkcije. Metoda zahteva početnu pretpostavku i iterativno konvergira ka tačnom rešenju, koristeći tangenti liniju funkcije.");
    } else if (metoda === "modifikovan-newton") {
      setNaslov("Modifikovana Newton-Raphsonova Metoda");
      setDescription("Modifikovana Newton-Raphsonova metoda je varijacija Newton-Raphsonove metode koja uključuje korekciju ako se iteracija približava ekstremu funkcije. Ovo poboljšava konvergenciju i stabilnost metode.");
    }
  }, [metoda]);

  return (
    <div className="objasnjenje">
      <h1>{naslov}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Objasnjenje;
