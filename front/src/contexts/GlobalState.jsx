import UrheilijatContext from "./UrheilijatContext";
import React, { useState, useEffect } from "react";

const GlobalState = (props) => {
  const [urheilijat, setUrheilijat] = useState([]);

  const getUrheilijat = async () => {
    let response = "";
    try {
      const url = `http://localhost:3001/urheilijat`;
      response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const vastaus = await response.json();
      if (response.ok) {
        console.log("Urheilijoita löytyi:", vastaus);
        setUrheilijat(vastaus);
      } else {
        console.log("Urheilijaa ei löytynyt. Server vastasi:", response.status);
      }
    } catch (error) {
      console.error("Tapahtui virhe:", error);
    }
  };

  useEffect(() => {
    getUrheilijat();
  }, []);

  const getUrheilija = (id) => {
    const etsittavaID = urheilijat.find((urheilija) => urheilija.id === id);
    return etsittavaID || null;
  };

  const addUrheilija = async (newUrheilija) => {
    try {
      const response = await fetch("http://localhost:3001/urheilijat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUrheilija),
      });
      if (response.ok) {
        console.log("Lisäys onnistui");
        getUrheilijat();
        return true;
      } else {
        console.log("Lisäys ei onnistunut");
        return false;
      }
    } catch (error) {
      console.log("Tapahtui virhe: " + error.message);
      return;
    }
  };

  const editUrheilija = async (id, updatedUrheilija) => {
    try {
      const response = await fetch(`http://localhost:3001/urheilijat/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUrheilija),
      });

      if (response.ok) {
        console.log("Päivitys onnistui");
        await getUrheilijat();
        return true;
      } else {
        console.log("Päivitys ei onnistunut. Server vastasi:", response.status);
        return false;
      }
    } catch (error) {
      console.error("Tapahtui virhe:", error.message);
      return false;
    }
  };

  const deleteUrheilija = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/urheilijat/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Poisto onnistui!");
        await getUrheilijat();
        return true;
      } else {
        console.error(
          "Urheilijan poisto ei onnistunut. Server vastasi:",
          response.status
        );
        return false;
      }
    } catch (error) {
      console.error("Tapahtui virhe:", error.message);
      return false;
    }
  };

  return (
    <UrheilijatContext.Provider
      value={{
        urheilijat,
        getUrheilijat,
        addUrheilija,
        editUrheilija,
        deleteUrheilija,
        getUrheilija,
      }}
    >
      {props.children}
    </UrheilijatContext.Provider>
  );
};

export default GlobalState;
