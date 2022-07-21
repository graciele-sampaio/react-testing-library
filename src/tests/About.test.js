import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { About } from '../pages';

describe('Teste o componente <About.js />.', () => {
  test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);

    const titleAbout = screen.getByRole('heading', { name: /About Pokédex/i, level: 2 });
    expect(titleAbout).toBeDefined();
  });

  test('se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    renderWithRouter(<About />);

    const paragraphOne = screen.getByText(/This application simulates a Pokédex/i);
    const paragraphTwo = screen.getByText(/One can filter Pokémons by type/i);
    expect(paragraphOne && paragraphTwo).toBeInTheDocument();
  });

  test('', () => {
    renderWithRouter(<About />);

    const imageAbout = screen.getByRole('img');
    expect(imageAbout).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
