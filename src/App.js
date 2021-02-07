import HeaderContainer from './containers/header';
import GameContainer from './containers/game';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/client';

const App = () => {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app/',
  });

  return (
    <ApolloProvider client={client}>
      <HeaderContainer />
      <GameContainer />
    </ApolloProvider>
  );
};

export default App;
