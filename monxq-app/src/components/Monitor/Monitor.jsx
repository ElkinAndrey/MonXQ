import React from "react";
import { useParams } from "react-router-dom";

const Monitor = () => {
  const params = useParams();

  return <div>{params.id}</div>;
};

export default Monitor;
