import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../../Pages/Homepage";
import DetailsPage from "../../Pages/ProjectDetailsPage/DetailsPage";

const Routing = (props) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage searchItem={props.searchItem} />} />
        <Route path="/projectdetails" element={<DetailsPage />} />
        <Route path="/projectdetails/Id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
};

export default Routing;
