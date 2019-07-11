import React, { memo, useState } from "react";
import { Modal } from "antd";
import { Redirect ,withRouter} from "react-router-dom";
import { Query } from "react-apollo";
import { GET_PROFILE } from "graphql/querys";
import Cardepisodes from "./cardepisodes";


export default memo(
  withRouter(function Perfil({ history, match }) {
    const { id } = match.params;

    const [visible, setVisible] = useState(true);

    function RedirectHome() {
      history.push("/");
    }
    return (
      <>
        {visible ? (
          <Query query={GET_PROFILE} variables={{ id }}>
            {({ data, loading, error }) => {
              if (loading) return <>loading</>;
              if (error) return <>error</>;
              return (
                <>
                  {data.character.name ? (
                    <Modal
                      title={data.character.name}
                      visible={visible}
                      width="100%"
                      style={{ top: 25 }}
                      onCancel={RedirectHome}
                      onOk={RedirectHome}
                    >
                      <div className="col-md-12  row jumbotron">
                        <div className="col-md-2 card">
                        <img
                          className=""
                          style={{width: 240}}
                          src={data.character.image}
                          alt="alo"
                        />                        </div>
                        
                        <div className="col-md-4 card">
                          <h1 className="h1">Information:</h1>
                          <h1 className="h3">
                            <b>name:</b> {data.character.name}
                          </h1>
                          <h1 className="h3">
                            <b>gender:</b>
                            {data.character.gender}
                          </h1>
                          <h1 className="h3">
                            <b>species:</b>
                            {data.character.species}
                          </h1>
                          <h1 className="h3">
                            <b>origen:</b>
                            {data.character.origin.name}
                          </h1>
                          <h1 className="h3">
                            <b>status:</b>
                            {data.character.status}
                          </h1>
                        </div>
                        <div className="col-md-12">
                          
                          <h1 className="h1">Episodes where {data.character.name} participates:</h1>
                          <div className="col-md-12 row">                          
                          {data.character.episode.map((data)=>{
                            return(
                              <Cardepisodes {...data}/>
                            )
                          })}</div>
                          
                        </div>
                      </div>
                    </Modal>
                  ) : (
                    <Redirect to="/" />
                  )}
                </>
              );
            }}
          </Query>
        ) : (
          <Redirect to="/" />
        )}
      </>
    );
  })
);