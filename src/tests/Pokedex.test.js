import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokedex.js />', () => {
  test('se a página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);

    const titlePokedex = screen.getByRole('heading',
      { name: /Encountered pokémons/i, level: 2 });
    expect(titlePokedex).toBeDefined();
  });

  test('O botão deve conter o texto Próximo pokémon', () => {
    renderWithRouter(<App />);

    const titleBtn = screen.getByRole('button',
      { name: /Próximo pokémon/i });
    expect(titleBtn).toBeDefined();
  });

  test('O próximo pokémon é mostrado, ao clicar no botão Próximo pokémon ', () => {
    renderWithRouter(<App />);

    const nextPokemon = screen.getAllByTestId('pokemon-name');

    const botaoNextPokemon = screen.getByRole('button', { name: /Próximo pokémon/i });
    userEvent.click(botaoNextPokemon);

    const pokemonOne = screen.getByText(/charmander/i);
    expect(pokemonOne).toBeInTheDocument();
    expect(nextPokemon).toHaveLength(1);

    userEvent.click(botaoNextPokemon);
    const pokemonTwo = screen.getByText(/caterpie/i);
    expect(pokemonTwo).toBeInTheDocument();
    expect(nextPokemon).toHaveLength(1);
  });

  test('se é mostrado apenas um pokémon por vez', () => {
    renderWithRouter(<App />);

    const presentPokemon = screen.getAllByText(/pikachu/i);

    expect(presentPokemon.length).toBe(1);
  });

  test('os botões de filtragem', () => {
    renderWithRouter(<App />);

    const numberButtons = 7;
    const buttonFilter = screen.getAllByTestId(/pokemon-type-button/i);
    expect(buttonFilter).toHaveLength(numberButtons);

    const typeEletric = screen.getAllByText(/electric/i);
    expect(typeEletric).toBeDefined();

    const typePsychic = screen.getAllByText(/psychic/i);
    expect(typePsychic).toBeDefined();
  });

  test('se tem um botão para resetar o filtro', () => {
    renderWithRouter(<App />);

    const buttonReset = screen.getByText(/all/i);
    userEvent.click(buttonReset);
    expect(buttonReset).toBeDefined();
    expect(buttonReset.type).toBe('button');
  });
});
