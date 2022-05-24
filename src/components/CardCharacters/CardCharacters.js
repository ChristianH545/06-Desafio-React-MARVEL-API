import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Style.css";

const CardCharacters = (character) => {
  return (
    <>
      <Col>
        <div className="container">
          <Card className="item" border="transparent">
            <Link to={`/detail/${character.id}`}>
              <Card.Img
                className="img "
                variant="top"
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              />
            </Link>
            <Card.Body>
              <Card.Title className="title">{character.name}</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </Col>
    </>
  );
};

export default CardCharacters;
