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
    <>
      <h1>Urheilijan poisto</h1>
      <form onSubmit={handleSubmit}>
        <label>Poistettavan urheilijan Id: </label>
        <input
          type="text"
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <button type="submit">Poista urheilija</button>
      </form>
      {message && <p>{message}</p>}
    </>
  );
};

export default Poisto_lomake;
