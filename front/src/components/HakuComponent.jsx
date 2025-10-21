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
    <div className="bg-white dark:bg-gray-800 p-5 max-w-md mx-auto mt-10">
      <h1 className="font-bold mb-6 dark:text-white">Urheilijan haku</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <div>
            <label htmlFor="hakuehto_id" className="dark:text-white">
              Hakuehto
            </label>
            <input
              type="text"
              id="hakuehto_id"
              value={hakuehto}
              onChange={(e) => setHakuehto(e.target.value)}
              required
              placeholder="Urheilijan id..."
              className="w-full border border-gray-300  focus:ring  placeholder-gray-400 dark:placeholder-gray-300 dark:text-white"
            />
          </div>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-gray-600 text-white hover:bg-gray-700 "
        >
          Etsi
        </button>
        {data && (
          <div className="mt-4">
            <h3 className="font-semibold dark:text-white">
              Urheilijan tiedot:
            </h3>
            <div className="mt-2 dark:text-white">
              <p>Etunimi: {data.etunimi}</p>
              <p>Sukunimi: {data.sukunimi}</p>
              <p>Kutsumanimi: {data.kutsumanimi}</p>
              <p>Syntymavuosi: {data.syntymavuosi}</p>
              <p>Paino: {data.paino}</p>
              <div className="flex justify-center mt-2">
                <img
                  src={data.kuva}
                  alt={data.kutsumanimi}
                  className="max-w-full h-auto"
                />
              </div>
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
