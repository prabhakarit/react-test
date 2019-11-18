import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import TodoItem from "./todoItem";

// Client
const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/spanglegriffin-killer-786"
});

// Connecting to App
const App = () => (
    <ApolloProvider client={client}>
      <TodoItem/>
    </ApolloProvider>
  );

  export default App;

  /*

  <div>
        <h2>My first Apollo app</h2>
      </div>

      */