import { useEffect, useState, useCallback, useContext } from 'react';
import { arraySample } from '../utils/array_sample';

import { useQuery } from '@apollo/client';
import { GET_POKEMON } from '../graphql/get_pokemon';

export const useGame = () => {
  const { data: { pokemon = [] } = {} } = useQuery(GET_POKEMON, {
    variables: { first: 151 },
  });
  const [allPokemon, setAllPokemon] = useState([]);
  const [seenPokemon, setSeenPokemon] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const imgURL = (id) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  useEffect(() => {
    setAllPokemon(pokemon);
  }, []);

  const getColor = async (pokemon) => {};

  const getCurrentPokemon = useCallback(() => {
    let samplePokemon = arraySample(allPokemon, 3);
    if (seenPokemon.length) {
      let sampleSeen = arraySample(seenPokemon, 1)[0];
      if (!samplePokemon.some((poke) => poke.name === sampleSeen.name)) {
        const idx = Math.floor(Math.random() * 3);
        samplePokemon[idx] = sampleSeen;
      }
    }
    return samplePokemon;
  }, [allPokemon, seenPokemon]);

  useEffect(() => {
    if (allPokemon.length) {
      setCurrentPokemon(getCurrentPokemon());
    }
  }, [allPokemon, score, getCurrentPokemon]);

  const resetGame = () => {
    setHighScore((hs) => Math.max(hs, score));
    setScore(0);
    setSeenPokemon([]);
  };

  const handleClick = (pokemon) => {
    if (seenPokemon.some((pk) => pk.name === pokemon.name)) {
      resetGame();
    } else {
      setScore((score) => score + 1);
      setSeenPokemon((seen) => [...seen, pokemon]);
    }
  };

  return {
    currentPokemon,
    handleClick,
    score,
    highScore,
  };
};
