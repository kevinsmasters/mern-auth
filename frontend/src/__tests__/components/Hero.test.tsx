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

test('renders sign in button', ()=> {
  render(<Provider store={store}><Hero /></Provider>);
  const buttonText1 = screen.getByText(/Sign in/i)
  expect(buttonText1).toBeInTheDocument();
})

test('renders register button', ()=> {
  render(<Provider store={store}><Hero /></Provider>);
  const buttonText2 = screen.getByText(/Register/i)
  expect(buttonText2).toBeInTheDocument();
})