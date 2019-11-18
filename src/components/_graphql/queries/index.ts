/*
import gql from 'graphql-tag';

export const FETCH_DASHBOARD_CONTENT = gql`
  query fetchDashboardContent($notebooksLimit: Int!) {
    Notebooks(limit: $notebooksLimit) {
      id
      image
      description
      name
      analytics {
        usageCount
      }
    }
    UserDatasets {
      id
      name
      description
      members {
        user {
          id
          image
        }
        isFavourite
      }
      notebook {
        image
      }
      expiryDate
    }
  }
`;

export const FETCH_NOTEBOOKS_BY_CATEGORY = gql`
  query fetchNotebooksByCategory {
    NotebooksGroupByCategory {
      category {
        id
        name
      }
      notebooks {
        id
        image
        notebookViewImage
        description
        name
        analytics {
          usageCount
        }
      }
    }
  }
`;
*/
