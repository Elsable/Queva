import React, { memo, useState } from "react";
import Button from "@material-ui/core/Button";
import { Modal } from "antd";
import { Link } from "react-router-dom";

export default memo(function ModalEpisodes(props) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        className="btn"
        onClick={() => setVisible(!visible)}
      >
        View
      </Button>
      <Modal
        title={<>Episode: {props.name}</>}
        visible={visible}
        width="98%"
        style={{ top: 25 }}
        onCancel={() => setVisible(!visible)}
        onOk={() => setVisible(!visible)}
      >
        <h1 className="h2">
          <strong> Name</strong>:{props.name}
        </h1>
        <h1 className="h4">
          <strong> Air Date</strong>:{props.air_date}
        </h1>
        <h1 className="h4">
          <strong>Episode</strong>:{props.episode}
        </h1>
        <h1 className="h4">
        <div className=" col-md-12" style={{background:"#abd213"}}>
          <strong>characters in the episode :</strong></div>
          <section className="col-md-12 row">
          {props.characters.map((d,index)=>{
              return(
                  <div key={index} className="jumbotron">
                    <Link key={index} to={`/personaje/${d.id}`} {...d.id}>

                      <img
                          className=""
                          style={{width: 240}}
                          src={d.image}
                          alt="alo"
                        />    <br/> 
                  {d.name}
                   </Link>
                 </div>
              )
          })}
           </section>
        </h1>
        
      </Modal>
    </>
  );
});
