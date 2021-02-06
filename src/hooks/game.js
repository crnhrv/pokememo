import { useEffect, useState, useCallback } from 'react';
import { arraySample } from '../utils/array_sample';

import { useQuery } from '@apollo/client';
import { GET_POKEMON } from '../constants/graphql/get_pokemon';
import { TYPES } from '../constants/types';
export const useGame = () => {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMON, {
    variables: { first: 151 },
  });

  console.log(pokemons);

  const [seenPokemon, setSeenPokemon] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const imgURL = (id) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  const getColor = (type) => {
    return TYPES[type];
  };

  const getCurrentPokemon = useCallback(() => {
    let samplePokemon = arraySample(pokemons, 3);
    if (seenPokemon.length) {
      let sampleSeen = arraySample(seenPokemon, 1)[0];
      if (!samplePokemon.some((poke) => poke.name === sampleSeen.name)) {
        const idx = Math.floor(Math.random() * 3);
        samplePokemon[idx] = sampleSeen;
      }
    }
    return samplePokemon.map((pokemon) => ({
      ...pokemon,
      image: imgURL(parseInt(pokemon.number)),
      color: getColor(pokemon.types[0]),
    }));
  }, [pokemons, seenPokemon]);

  useEffect(() => {
    if (pokemons.length) {
      setCurrentPokemon(getCurrentPokemon());
    }
  }, [pokemons.length, score, getCurrentPokemon]);

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
