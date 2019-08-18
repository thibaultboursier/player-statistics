import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";

import "./App.css";
import Players from "./components/Players/Players";
import ErrorBoundary from "./components/Errors/ErrorBoundary/ErrorBoundary";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="App text-center">
        <Jumbotron className="mb-0">
          <h1 className="display-4">Player statistics</h1>
          <p>
            Find statistics of your favorite players{" "}
            <span aria-label="Tennis ball" role="img">
              🎾
            </span>
          </p>
        </Jumbotron>
        <Players />
        <footer className="bg-dark mt-5 p-3 text-light">
          <a
            className="text-light"
            href="https://github.com/thibaultboursier/player-statistics"
            rel="noopener noreferrer"
            target="_blank"
          >
            See project on GitHub
          </a>
        </footer>
      </div>
    </ErrorBoundary>
  );
};

export default App;
