import React, { useState } from "react";

const Poisto_lomake = () => {
  const [id, setId] = useState("");
  const [message, setMessage] = useState(""); // For displaying success or error messages

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3001/urheilijat/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setMessage("Poisto onnistui!");
        setId("");
      } else {
        setMessage(
          "Urheilijan poisto ei onnistunut. Server vastasi: " + response.status
        );
      }
    } catch (error) {
      setMessage("Tapahtui virhe: " + error.message);
      return;
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
