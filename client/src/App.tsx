import './App.css';
import { Grommet, Card, CardHeader, CardBody } from 'grommet';
import { Customers } from './component/Customers';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://poetic-mosquito-48.hasura.app/v1/graphql',
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret': 'RSp9tnaT1QlBVoTW5cZNTBiYNuj20uEcMS0GjjAKbDyVeGH237w4Zr6RODiLKJZ3'
  },
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Grommet className='App'>
        <Card background="light-1">
          <CardHeader className='card' pad="medium">Customers</CardHeader>
          <CardBody pad="medium">
            <Customers />
          </CardBody>
        </Card>
      </Grommet>
    </ApolloProvider>
  );
}

export default App;