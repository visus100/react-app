import React from "react";
import { Route } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div>
      <h2>stopka</h2>
      <Route
        path="/"
        exact
        render={props => (
          <p>
            jesteś na <span>stronie głownej</span>
          </p>
        )}
      />

      <Route
        path="/:page"
        exact
        render={props => {
          console.log(props);
          return (
            <>
              <p>
                jesteś na <span>{props.match.params.page}</span>
              </p>
              <p>
                jesteś na <span>{props.match.url}</span>
              </p>
              <p>
                jesteś na <span>{props.match.path}</span>
              </p>
            </>
          );
        }}
      />

      <Route
        path="/:page/:idProduct"
        exact
        render={props => {
          console.log(props);
          return (
            <>
              <p>
                jesteś na <span>{props.match.params.idProduct}</span>
              </p>
              <p>
                jesteś na <span>{props.match.url}</span>
              </p>
              <p>
                jesteś na <span>{props.match.path}</span>
              </p>
            </>
          );
        }}
      />
    </div>
  );
};

export default Footer;
