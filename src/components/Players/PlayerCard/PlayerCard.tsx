import React, { useState } from "react";

import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import { Player } from "models/player";

import { convertGramsToKilograms } from "utils/units";
import ResultsModal from "./ResultsModal/ResultsModal";

type Props = Player;

const PlayerCard: React.FC<Props> = ({
  country,
  data,
  firstname,
  lastname,
  picture,
  sex,
  shortname
}) => {
  const [shouldDisplayResults, setShouldDisplayResults] = useState<boolean>(
    false
  );
  const fullName = `${firstname} ${lastname}`;

  const toggleModal = React.useCallback(
    () => setShouldDisplayResults(previousValue => !previousValue),
    []
  );

  return (
    <>
      <Card>
        <Card.Header className="bg-dark p-0">
          <Image alt={fullName} src={picture} rounded />
        </Card.Header>
        <Card.Body>
          <Card.Title>
            {fullName}{" "}
            <small>
              <em className="mr-2">({shortname})</em>
              <Badge className="text-uppercase" variant="info">
                Rank {data.rank}
              </Badge>
            </small>
          </Card.Title>
          <Card.Body className="pt-0">
            <Image
              alt={country.code}
              height="25"
              width="37.5"
              src={country.picture}
            />
            <ListGroup className="mt-3" variant="flush">
              <ListGroup.Item className="p-1">
                <strong>Sex:</strong> {sex}
              </ListGroup.Item>
              <ListGroup.Item className="p-1">
                <strong>Age:</strong> {data.age}
              </ListGroup.Item>
              <ListGroup.Item className="p-1">
                <strong>Weight:</strong> {convertGramsToKilograms(data.weight)}{" "}
                kg
              </ListGroup.Item>
              <ListGroup.Item className="p-1">
                <strong>Height:</strong> {data.height} cm
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <Button onClick={toggleModal} variant="primary">
            <FontAwesomeIcon className="mr-1" icon={faEye} /> View results
          </Button>
          <ResultsModal
            fullName={fullName}
            isOpen={shouldDisplayResults}
            lastScores={data.last}
            onHide={toggleModal}
          />
        </Card.Body>
      </Card>
    </>
  );
};

export default PlayerCard;
