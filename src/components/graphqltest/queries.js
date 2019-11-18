import { gql } from 'apollo-boost';

export const GET_ALL_TODOITEMS = gql`
  {
    allTodoItems{
      id,
      text,
      dateCreated
    }
  }
`;

export const GET_TODOITEMS_BY_LISTID = gql`
  query ($id: String){
    allTodoItems(id: $id) {
      id,
      text,
      dateCreated
    }
  }
`;

export const GET_TODOITEMS_BY_LISTID_SEARCH = gql`
  query ($id: String){
    search(q: $id) {
      id,
      text,
      dateCreated,
      ... on list {
        id
      }
    }
  }
`;

/*
export const CREATE_TODOITEM = gql`
  {
    CreateTodoItem {
      completed
      dateCompleted
      dateCreated
      text
      listId
    }
  }
`;

export const CREATE_TODOLIST = gql`
  query ($id: String){
    CreateTodoList(id: $id) {
      id,
      name,
      job_title,
      email
    }
  }
`;

export const ADD_USER = gql`
  mutation($name: String, $email: String, $job_title: String) {
    createUser (name: $name, email: $email, job_title: $job_title)
  }
`;

export const EDIT_USER = gql`
  mutation($id: Int, $name: String, $email: String, $job_title: String) {
    updateUserInfo (id: $id, name: $name, email: $email, job_title: $job_title)
  }
`;

export const DELETE_USER = gql`
  mutation($id: Int) {
    deleteUser(id: $id)
  }
`
*/