import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <App.js />', () => {
  test('Se a aplicação é redirecionada para a página inicial', () => {
    const { history } = renderWithRouter(<App />);

    const homelLink = screen.getByRole('link', { name: 'Home' });
    expect(homelLink).toBeInTheDocument();
    userEvent.click(homelLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  test('Se a aplicação é redirecionada para a página de About', () => {
    const { history } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: 'About' });
    userEvent.click(aboutLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });

  test('Se a aplicação é redirecionada para a página de Pokémons Favoritados', () => {
    const { history } = renderWithRouter(<App />);

    const favoritesLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
    userEvent.click(favoritesLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });

  test('Se a aplicação é redirecionada para a página Not Found', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/url/desconhecida');

    const notFoundTitle = screen.getByRole('heading',
      { name: 'Page requested not found Crying emoji', level: 2 });
    expect(notFoundTitle).toBeInTheDocument();
  });
});
