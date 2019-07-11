import React, { useState } from "react";
import { Query } from "react-apollo";
import ModalEpisodes from './modal'
import { GET_EPISODES } from "graphql/querys";
import { Table } from "reactstrap";


export default function Episodes({ episode, SetEpisode }) {
  const [page] = useState(1);
  return (
    <div className="col-md-12">
      <div className="jumbotron container">
        <Query variables={{ page, episode }} query={GET_EPISODES}>
          {({
            loading,
            error,

            data: {
              episodes: {
                info: { next, prev, pages, count } = {},
                results
              } = {}
            } = {}
          }) => {
            if (loading) return <>loading</>;
            if (error) return <>error</>;

            next = next ? next : pages;
            prev = prev ? prev : 1;

            return (
              <center>
              <strong>Episodes</strong>
              
                {results ? (
                  <Table className="table table-responsive col-md-12 ">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Air date</th>
                        <th>Options</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.map(dato => {
                        return (
                          <tr key={dato.id}>
                            <td>{dato.name}</td>
                            <td>{dato.air_date}</td>
                            <td>
                            <ModalEpisodes {...dato}/>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                ) : (
                  <div className="col-md-3">
                    <h2>No results found</h2>
                  </div>
                )}
              </center>
            );
          }}
        </Query>
      </div>
    </div>
  );
}
