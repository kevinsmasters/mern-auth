import { render, screen } from '@testing-library/react';
import store from '../../store';
import { Provider } from 'react-redux';
import Hero from '../../components/Hero';

const mockUsedNavigate = jest.fn();
const mockUseHref = jest.fn();
const mockUseMatch = jest.fn();
const mockUseLocation = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
  useHref: ()=> mockUseHref,
  useMatch: ()=> mockUseMatch,
  useLocation: ()=> mockUseLocation
}));

test('renders hero header text', ()=> {
  render(<Provider store={store}><Hero /></Provider>);
  const headerText = screen.getByText(/Mern Authentication/);
  expect(headerText).toBeInTheDocument();
})