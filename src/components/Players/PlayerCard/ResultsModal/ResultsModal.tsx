import React from "react";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";

import useComputeWinsAndLosses from "hooks/useComputeWinsAndLosses";

interface Props {
  fullName: string;
  isOpen: boolean;
  lastScores: number[];
  onHide: () => void;
}

const ResultsModal: React.FC<Props> = ({
  fullName,
  isOpen,
  lastScores,
  onHide
}) => {
  const [wins, losses] = useComputeWinsAndLosses(lastScores);

  return (
    <Modal
      centered
      dialogClassName="player-results-modal"
      onHide={onHide}
      show={isOpen}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {fullName}'s results{" "}
          <span aria-label="Trophy" role="img">
            🏆
          </span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Results from the last <strong>{lastScores.length}</strong> games.
        </p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="text-center">Won</th>
              <th className="text-center">Lost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-weight-bold text-center text-success">
                {wins}
              </td>
              <td className="font-weight-bold text-center text-danger">
                {losses}
              </td>
            </tr>
          </tbody>
        </Table>
        {wins > losses ? (
          <Alert variant={"success"}>
            The latest results are satisfactory.
          </Alert>
        ) : (
          <Alert variant={"danger"}>
            The latest results are disappointing.
          </Alert>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ResultsModal;
