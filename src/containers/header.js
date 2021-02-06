import { Header } from '../components/';

const HeaderContainer = ({ children, ...restProps }) => {
  return (
    <Header {...restProps}>
      <Header.Title>Pokémon!</Header.Title>
      <Header.Subtitle>Gotta remember 'em all!</Header.Subtitle>
      {children}
    </Header>
  );
};

export default HeaderContainer;
