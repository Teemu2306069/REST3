import React, { useState, useContext } from "react";
import UrheilijatContext from "../contexts/UrheilijatContext";

const Poisto_lomake = () => {
  const urheilijatContext = useContext(UrheilijatContext);
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const idToDelete = parseInt(id, 10);

    const success = await urheilijatContext.deleteUrheilija(idToDelete);

    if (success) {
      setMessage("Poisto onnistui!");
      setId("");
    } else {
      setMessage("Urheilijan poisto ei onnistunut.");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 max-w-md mx-auto mt-10">
      <h1 className="font-bold text-center mb-6 dark:text-white">
        Urheilijan poisto
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="id" className="dark:text-white  text-gray-700">
            Poistettavan urheilijan id:
          </label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
            placeholder="Urheilijan id..."
            className="mt-1  w-full border border-gray-300  focus:ring placeholder-gray-400 dark:text-white"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gray-600 text-white py-2 hover:bg-gray-700 transition duration-200 dark:text-white"
        >
          Poista urheilija
        </button>
      </form>
      {message && (
        <p className="mt-4 text-center text-gray-600 dark:text-white">
          {message}
        </p>
      )}
    </div>
  );
};

export default Poisto_lomake;
