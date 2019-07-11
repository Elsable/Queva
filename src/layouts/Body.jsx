import React, { memo } from "react";
import {  withRouter} from "react-router-dom";

import styled from "styled-components";
const Contenido = styled.div`
  padding-top: 0px;
`;
//In this function its very very important for the functioning  the body(the Magic it's in the children)
export default memo(withRouter(function Body({ match,children}) {
  return (
    <>
      <Contenido >
        <center>
      {match.url !== "/episodes" ? (
      <strong className="h1">Characters</strong>
      ):
      <strong className="h1">Episodes</strong>
      }
      </center>
      {children}
      </Contenido>
    </>
  )
}))