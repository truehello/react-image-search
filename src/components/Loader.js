import React from "react";

import styled from "styled-components";
import circleLoader from "../images/circleLoader.svg";

const LoaderArea = styled.div`
  margin: 0px auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const Loader = ({ abort, width }) => {
  var iconWidth = width ? width : 75;

  return (
    <LoaderArea>
      <img src={circleLoader} width={iconWidth} alt="loading" />
      <p className="loading__text">Loading...</p>
    </LoaderArea>
  );
};

export default Loader;
