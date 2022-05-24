import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { baseUrl, apiKey, hash } from "../../constants/Constants";
import "./Style.css";

const DetailContainer = () => {
  // HOOK useState

  const [detailApi, setdetailApi] = useState([]);

  // HOOKS useParams
  const { id } = useParams();
  console.log(id);

  // HOOKS useEffect

  useEffect(() => {
    // FUNCTION

    const getDetails = async () => {
      try {
        const url = `${baseUrl}characters/${id}?ts=1&apikey=${apiKey}&hash=${hash}`;
        console.log(url);
        const data = await fetch(url);
        const characters = await data.json();
        setdetailApi(characters.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getDetails();
  }, [id]);
  console.log(detailApi);
  return (
    <>
      {detailApi.map((detail) => (
        <div key={detail.id} className="container-detail">
          <Card className="card-detail">
            <Card.Img
              variant="top"
              src={`${detail.thumbnail.path}.${detail.thumbnail.extension}`}
            />
            <Card.Body className="body-detail">
              <Card.Title className="title-detail">{detail.name}</Card.Title>
              <Card.Text>{detail.description}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
};

export default DetailContainer;
