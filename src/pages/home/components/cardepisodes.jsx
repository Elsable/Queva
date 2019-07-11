import React, { memo, useState } from "react";
import { Card } from "antd";
import { withRouter } from "react-router-dom";

const { Meta } = Card;

export default withRouter(function CardEpisodies({
  name,
  air_date,
  history,
  match
}) {
  const { id } = match.params;
  console.log(name);
  return (
    <>
      <Card hoverable className="col-md-3">
        <Meta title={name} description={"published in " + air_date} />
      </Card>
    </>
  );
});
