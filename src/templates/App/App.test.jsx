import { Home } from './index';
import { renderTheme } from '../../styles/render-theme';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/react'
import { theme } from '../../styles/theme';

test('renders learn react link', () => {
  const { debug } = renderTheme(<Home />);
  const headingContainer = screen.getByRole('heading', { name: 'Hello' })
    .parentElement;
  expect(headingContainer).toHaveStyle({
    background: theme.colors.mainBg,
  });
  expect(headingContainer).toHaveStyleRule('background', 'red');
  expect(headingContainer).toMatchSnapshot();

});
