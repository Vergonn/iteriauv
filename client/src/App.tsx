import "./App.css";
import { Grommet, Card, CardHeader, CardBody } from "grommet";
import { Customers } from "./component/Customers";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: import.meta.env.VITE_URI as string,
  headers: {
    "content-type": "application/json",
    "x-hasura-admin-secret": import.meta.env.VITE_ADMIN_SECRET as string,
  },
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Grommet className="App">
        <Card background="light-1">
          <CardHeader className="card" pad="medium">
            Customers
          </CardHeader>
          <CardBody pad="medium">
            <Customers />
          </CardBody>
        </Card>
      </Grommet>
    </ApolloProvider>
  );
}

export default App;
