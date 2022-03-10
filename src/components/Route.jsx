import React from "react";
import { Routes, Redirect } from "react-router-dom";

const Route = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route exact path="/">
          <Redirect to="/search" />
        </Route>
      </Routes>
    </div>
  );
};

export default Route;
