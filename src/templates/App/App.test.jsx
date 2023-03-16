import { Home } from './index';
import { renderTheme } from '../../styles/render-theme';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/react'
import { theme } from '../../styles/theme';

describe('<Home />', () =>{
  it('should render home', () => {
    renderTheme(<Home />);
  });
});

