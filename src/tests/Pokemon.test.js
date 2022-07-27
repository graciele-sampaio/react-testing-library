import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import pokemons from '../data';
import { FavoritePokemons } from '../pages';

describe('', () => {
  test('se é renderizado um card com as informações de determinado pokémon', () => {
    renderWithRouter(<App />);

    const pikachu = pokemons[0];

    const name = screen.getByTestId('pokemon-name');
    expect(name).toBeInTheDocument(pikachu.name);

    const type = screen.getAllByTestId(/pokemon-type/i);
    expect(type[0].textContent).toBe('Electric');

    const averageWeight = screen.getByTestId('pokemon-weight');
    expect(averageWeight).toBeInTheDocument(`Average weight:${pikachu.averageWeight.value}
     ${pikachu.averageWeight.measurementUnit}`);

    const image = screen.getByAltText(/pikachu sprite/i);
    expect(image).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  test('a página de detalhes', () => {
    const { history } = renderWithRouter(<App />);

    const details = screen.getByRole('link', { name: 'More details' });
    userEvent.click(details);

    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');
  });

  test('se o pokemon for favoritado há um ícone de estrela', () => {
    const pikachu = [pokemons[0]];

    renderWithRouter(<FavoritePokemons pokemons={ pikachu } />);

    const favoritePokemon = screen.getByAltText(/pikachu is marked as favorite/i);
    expect(favoritePokemon).toHaveAttribute('src', '/star-icon.svg');
  });
});
