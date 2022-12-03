import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Details from '../Details';
import store from '../redux/configureStore';

const MockDetails = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Details />
    </BrowserRouter>
  </Provider>
);

describe('Test the Details component', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<MockDetails />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders link', () => {
    render(<MockDetails />);
    const buttonElement = screen.getByRole('button', {
      name: /more details\.\.\./i,
    });
    expect(buttonElement).toBeInTheDocument();
  });
});
