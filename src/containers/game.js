import { useGame } from '../hooks/game';
import { Card, Score } from '../components';

const GameContainer = ({ children, ...restProps }) => {
  const { score, highScore, currentPokemon, handleClick } = useGame();

  return (
    <>
      <Card {...restProps}>
        <Score>
          <Score.Text>
            Score
            <Score.Number score={score} align="left" />
          </Score.Text>
          <Score.Text>
            High Score
            <Score.Number score={highScore} align="right" />
          </Score.Text>
        </Score>

        <Card.Group>
          {currentPokemon.map((pokeman, idx) => {
            return (
              <Card.Item
                color={pokeman.color}
                onClick={() => handleClick(pokeman)}
                key={idx}
                double
              >
                <Card.Image src={pokeman.image} alt="" />
                <Card.Text>{pokeman.name}</Card.Text>
              </Card.Item>
            );
          })}
        </Card.Group>
        {children}
      </Card>
    </>
  );
};

export default GameContainer;
