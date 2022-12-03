import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import MainPreview from '../MainPreview';
import store from '../redux/configureStore';

const MockMainPreview = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainPreview pokemon={{ id: '1', name: 'bulbasaur' }} />
    </BrowserRouter>
  </Provider>
);

describe('Test the MainPreview component', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<MockMainPreview />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders heading', () => {
    render(<MockMainPreview />);
    const headingElement = screen.getByRole('heading', {
      name: /who's that pokemon\?/i,
    });
    expect(headingElement).toBeInTheDocument();
  });
});
