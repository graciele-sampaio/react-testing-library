import React from 'react';
import { screen } from '@testing-library/react';
import { FavoritePokemons } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <FavoritePokemons.js />', () => {
  test('se é exibida na tela a mensagem No favorite pokemon found', () => {
    renderWithRouter(<FavoritePokemons />);

    const messageNotFound = screen.getByText(/No favorite pokemon found/i);
    expect(messageNotFound).toBeInTheDocument();
  });

  test('se são exibidos todos os cards de pokémons favoritados', () => {
    renderWithRouter(<FavoritePokemons />);

    const cardsFavoritesPokemons = document.querySelectorAll('.favorite-pokemon');
    cardsFavoritesPokemons
      .forEach((card) => expect(card).toBeInTheDocument());
  });
});
