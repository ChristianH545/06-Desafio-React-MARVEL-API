import React, { useState, useEffect } from "react";
import { baseUrl, apiKey, hash } from "../../constants/Constants";
import { Row } from "react-bootstrap";

import CardCharacters from "../CardCharacters/CardCharacters";

const Characters = () => {
  // HOOKS useState
  const [mainCharacters, setMainCharacters] = useState([]);

  // FUNCTION

  const getCharacters = async () => {
    try {
      const url = `${baseUrl}characters?ts=1&apikey=${apiKey}&hash=${hash}`;
      console.log(url);
      const data = await fetch(url);
      const characters = await data.json();
      setMainCharacters(characters.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  // HOOKS useEffect

  useEffect(() => {
    getCharacters();
  }, []);
  console.log(mainCharacters);
  return (
    <>
      <Row xs={1} md={5} className="g-4">
        {mainCharacters.map((character) => (
          <div key={character.id}>
            <CardCharacters {...character} />
          </div>
        ))}
      </Row>
    </>
  );
};

export default Characters;
