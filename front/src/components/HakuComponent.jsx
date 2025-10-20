import React, { useState, useEffect, useContext } from "react";
import UrheilijatContext from "../contexts/UrheilijatContext";

const Haku_lomake = () => {
  const [hakuehto, setHakuehto] = useState("");
  const [data, setData] = useState(null);
  const urheilijaContext = useContext(UrheilijatContext);

  useEffect(() => {
    console.log("hakuehto muuttui:", hakuehto);
  }, [hakuehto]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const idToSearch = parseInt(hakuehto, 10);
    const result = urheilijaContext.getUrheilija(idToSearch);

    if (result) {
      setData(result);
    } else {
      console.log("Urheilijaa ei löytynyt");
      setData(null);
    }
  };

  return (
    <div>
      <h1>Urheilijan haku</h1>
      <form onSubmit={handleSubmit}>
        <div className="search">
          <div>
            <label>Hakuehto</label>
            <input
              type="text"
              id="hakuehto_id"
              value={hakuehto}
              onChange={(e) => setHakuehto(e.target.value)}
              required
            />
          </div>
        </div>
        <button type="submit">Etsi</button>
        {data && (
          <div>
            <h3>Urheilijan tiedot:</h3>
            <div>
              <p>Etunimi: {data.etunimi}</p>
              <p>Sukunimi: {data.sukunimi}</p>
              <p>Kutsumanimi: {data.kutsumanimi}</p>
              <p>Syntymavuosi: {data.syntymavuosi}</p>
              <p>Paino: {data.paino}</p>
              <p>
                <img src={data.kuva} alt={data.kutsumanimi} />
              </p>
              <p>Laji: {data.laji}</p>
              <p>Saavutukset: {data.saavutukset}</p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Haku_lomake;
