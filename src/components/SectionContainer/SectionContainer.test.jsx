import { SectionContainer } from '.';

describe('<SectionContainer />', () => {
  it('should render content', () => {
    const { container } = renderTheme(
      <SectionContainer>
        <h1>Children</h1>
      </SectionContainer>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});