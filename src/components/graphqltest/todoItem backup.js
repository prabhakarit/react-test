import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_TODOITEMS } from "./queries";

const TodoItems = () => (
    <Query
      query={
        gql`
        {
          allTodoItems {
            id
            text
            dateCreated
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        return data.allTodoItems.map(({ text, dateCreated, id }) => (
          <div key={id}>
            <p>{`"${text}" created on "${dateCreated}"`}</p>
          </div>
        ));
      }}
    </Query>
  );
  export default TodoItems;