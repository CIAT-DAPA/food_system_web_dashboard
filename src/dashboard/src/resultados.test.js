import { render, screen } from '@testing-library/react';
import Resultados from './pages/resultados/resultados';

test('renders learn react link', () => {
  render(<Resultados />);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});