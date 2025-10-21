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
    <div className="bg-white dark:bg-gray-800 p-6  max-w-md mx-auto mt-10">
      <h1 className="font-bold text-center mb-6 dark:text-white">
        Urheilijan lisäys
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="etunimi"
            className=" text-sm font-medium text-gray-700 dark:text-white"
          >
            Etunimi:
          </label>
          <input
            type="text"
            id="etunimi"
            value={etunimi}
            onChange={(e) => setEtunimi(e.target.value)}
            required
            className="mt-1  w-full border border-gray-300  focus:ring dark:text-white"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="sukunimi"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Sukunimi:
          </label>
          <input
            type="text"
            id="sukunimi"
            value={sukunimi}
            onChange={(e) => setSukunimi(e.target.value)}
            required
            className="mt-1  w-full border border-gray-300  focus:ring dark:text-white"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="kutsumanimi"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Kutsumanimi:
          </label>
          <input
            type="text"
            id="kutsumanimi"
            value={kutsumanimi}
            onChange={(e) => setKutsumanimi(e.target.value)}
            required
            className="mt-1  w-full border border-gray-300  focus:ring dark:text-white"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="syntymavuosi"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Syntymavuosi:
          </label>
          <input
            type="number"
            id="syntymavuosi"
            value={syntymavuosi}
            onChange={(e) => setSyntymavuosi(e.target.value)}
            required
            className="mt-1  w-full border border-gray-300  focus:ring dark:text-white"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="paino"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Paino:
          </label>
          <input
            type="number"
            id="paino"
            value={paino}
            onChange={(e) => setPaino(e.target.value)}
            required
            className="mt-1  w-full border border-gray-300  focus:ring dark:text-white"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="kuva"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Kuva:
          </label>
          <input
            type="text"
            id="kuva"
            value={kuva}
            onChange={(e) => setKuva(e.target.value)}
            required
            className="mt-1  w-full border border-gray-300  focus:ring dark:text-white"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="laji"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Laji:
          </label>
          <input
            type="text"
            id="laji"
            value={laji}
            onChange={(e) => setLaji(e.target.value)}
            required
            className="mt-1  w-full border border-gray-300  focus:ring dark:text-white"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="saavutukset"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Saavutukset:
          </label>
          <input
            type="text"
            id="saavutukset"
            value={saavutukset}
            onChange={(e) => setSaavutukset(e.target.value)}
            required
            className="mt-1  w-full border border-gray-300  focus:ring dark:text-white"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-gray-600 text-white  hover:bg-gray-700"
        >
          Lisää urheilija
        </button>
      </form>
      <div className="block text-sm font-medium text-gray-700 dark:text-white">
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Lisays_lomake;
