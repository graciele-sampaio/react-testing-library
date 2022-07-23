import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { NotFound } from '../pages';

describe('Teste o componente <FavoritePokemons.js />', () => {
  test('se a página contém um heading h2 com o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);

    const titleNotFound = screen.getByRole('heading',
      { name: /Page requested not found Crying emoji/i, level: 2 });
    expect(titleNotFound).toBeDefined();
  });

  test('se a página mostra a imagem', () => {
    renderWithRouter(<NotFound />);

    const imageNotFound = screen.getByRole('img',
      { name: /Pikachu crying because the page requested was not found/i });
    expect(imageNotFound).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
