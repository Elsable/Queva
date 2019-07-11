import React, { memo } from "react";
import { Card } from "antd";

const { Meta } = Card;

export default memo(function Card1(props) {
  return (
    <div className="" style={{'box-sizing':' border-box'}}>
    <Card
      className=""
      hoverable
      cover={<img  alt="example" src={props.image} />}
    >
      <Meta
      
        description={
          <>
           <p style={{fontSize:20, color:"black"}}> <strong> {props.name}</strong></p>
            {props.status}
            {props.id}
          </>
        }
      />
    </Card>
    </div>
  );
});
