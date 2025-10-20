import React, { useState, useContext } from "react";
import UrheilijatContext from "../contexts/UrheilijatContext";

const Lisays_lomake = () => {
  const urheilijatContext = useContext(UrheilijatContext);
  const [etunimi, setEtunimi] = useState("");
  const [sukunimi, setSukunimi] = useState("");
  const [kutsumanimi, setKutsumanimi] = useState("");
  const [syntymavuosi, setSyntymavuosi] = useState("");
  const [paino, setPaino] = useState("");
  const [kuva, setKuva] = useState("");
  const [laji, setLaji] = useState("");
  const [saavutukset, setSaavutukset] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUrheilija = {
      etunimi,
      sukunimi,
      kutsumanimi,
      syntymavuosi,
      paino,
      kuva,
      laji,
      saavutukset,
    };

    if (await urheilijatContext.addUrheilija(newUrheilija)) {
      setMessage("Lisäys onnistui!");
      setEtunimi("");
      setSukunimi("");
      setKutsumanimi("");
      setSyntymavuosi("");
      setPaino("");
      setKuva("");
      setLaji("");
      setSaavutukset("");
    } else {
      setMessage("Urheilijan lisäys ei onnistunut.");
    }
  };
  return (
    <>
      <h1>Urheilijan lisäys</h1>
      <form onSubmit={handleSubmit}>
        <label>Etunimi:</label>
        <input
          type="text"
          id="etunimi"
          value={etunimi}
          onChange={(e) => setEtunimi(e.target.value)}
          required
        />

        <label>Sukunimi:</label>
        <input
          type="text"
          id="sukunimi"
          value={sukunimi}
          onChange={(e) => setSukunimi(e.target.value)}
          required
        />

        <label>Kutsumanimi:</label>
        <input
          type="text"
          id="kutsumanimi"
          value={kutsumanimi}
          onChange={(e) => setKutsumanimi(e.target.value)}
          required
        />

        <label>Syntymavuosi:</label>
        <input
          type="number"
          id="syntymavuosi"
          value={syntymavuosi}
          onChange={(e) => setSyntymavuosi(e.target.value)}
          required
        />

        <label>Paino:</label>
        <input
          type="number"
          id="paino"
          value={paino}
          onChange={(e) => setPaino(e.target.value)}
          required
        />

        <label>Kuva:</label>
        <input
          type="text"
          id="kuva"
          value={kuva}
          onChange={(e) => setKuva(e.target.value)}
          required
        />

        <label>Laji:</label>
        <input
          type="text"
          id="laji"
          value={laji}
          onChange={(e) => setLaji(e.target.value)}
          required
        />

        <label>Saavutukset:</label>
        <input
          type="text"
          id="saavutukset"
          value={saavutukset}
          onChange={(e) => setSaavutukset(e.target.value)}
          required
        />

        <button type="submit">Lisää urheilija</button>
      </form>
      {message && <p>{message}</p>}
    </>
  );
};

export default Lisays_lomake;
