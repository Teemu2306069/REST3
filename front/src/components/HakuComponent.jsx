import React, { useState, useEffect } from "react";

const Haku_lomake = () => {
  const [hakuehto, setHakuehto] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("hakuehto muuttui:", hakuehto); //näytetään aina kun hakuehtoa muutetaan
  }, [hakuehto]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = "";
    try {
      const url = `http://localhost:3001/urheilijat/${hakuehto}`;
      response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const vastaus = await response.json();
      setData(vastaus);
      if (response.ok) {
        console.log("Urheilija löytyi:", vastaus);
      } else {
        console.log("Urheilijaa ei löytynyt. Server vastasi:", response.status);
      }
    } catch (error) {
      console.error("Tapahtui virhe:", error);
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
