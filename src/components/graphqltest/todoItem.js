import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_TODOITEMS, GET_TODOITEMS_BY_LISTID, GET_TODOITEMS_BY_LISTID_SEARCH } from "./queries";

function TodoItems(){
      //const getAllTodoItems = useQuery(GET_ALL_TODOITEMS);
      const getAllTodoItems = useQuery(GET_TODOITEMS_BY_LISTID_SEARCH, { variables: { id: "ck2q4n8p00ndb0139qt1mujga" }});
    if (getAllTodoItems.loading){ return <p>Loading...</p>;}
      if (getAllTodoItems.error){ return <p>Error :(</p>;}
      return getAllTodoItems.data.allTodoItems.map(({ text, dateCreated, id }) => (
          <div key={id}>
            <p>{`"${text}" created on "${dateCreated}"`}</p>
          </div>
      ));
    }
  export default TodoItems;