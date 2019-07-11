import React, { memo } from "react";
import styled from "styled-components";
const Contenido = styled.div`
  padding-top: 0px;
`;
//In this function its very very important for the functioning  the body(the Magic it's in the children)
export default memo(function Body(props) {
  return (
    <>
      <Contenido className="container">
      {props.children}
      </Contenido>
    </>
  );
})