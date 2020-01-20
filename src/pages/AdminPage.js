import React from "react";
import { Route, Redirect } from "react-router-dom";

const premission = false;

const AdminPage = () => {
  return (
    <Route
      render={() =>
        premission ? (
          <h3>Panel admina dzień dobry</h3>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default AdminPage;
