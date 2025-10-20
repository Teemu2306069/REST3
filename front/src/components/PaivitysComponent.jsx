import React, { useState, useContext } from "react";
import UrheilijatContext from "../contexts/UrheilijatContext";

const Paivitys_lomake = () => {
  const urheilijatContext = useContext(UrheilijatContext);
  const [etunimi, setEtunimi] = useState("");
  const [sukunimi, setSukunimi] = useState("");
  const [kutsumanimi, setKutsumanimi] = useState("");
  const [syntymavuosi, setSyntymavuosi] = useState("");
  const [paino, setPaino] = useState("");
  const [kuva, setKuva] = useState("");
  const [laji, setLaji] = useState("");
  const [saavutukset, setSaavutukset] = useState("");
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedUrheilija = {
      etunimi,
      sukunimi,
      kutsumanimi,
      syntymavuosi,
      paino,
      kuva,
      laji,
      saavutukset,
    };

    const success = await urheilijatContext.editUrheilija(id, updatedUrheilija);

    if (success) {
      setMessage("Päivitys onnistui!");
      setEtunimi("");
      setSukunimi("");
      setKutsumanimi("");
      setSyntymavuosi("");
      setPaino("");
      setKuva("");
      setLaji("");
      setId("");
      setSaavutukset("");
    } else {
      setMessage("Urheilijan päivitys ei onnistunut.");
    }
  };

  return (
    <>
      <h1>Urheilijan päivitys</h1>
      <form onSubmit={handleSubmit}>
        <label>Päivitettävän urheilijan Id:</label>
        <input
          type="text"
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />

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

        <button type="submit">Päivitä urheilija</button>
      </form>
      {message && <p>{message}</p>}
    </>
  );
};

export default Paivitys_lomake;
