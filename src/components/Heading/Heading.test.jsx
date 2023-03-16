import { screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { renderTheme } from "../../styles/render-theme";
import { theme } from "../../styles/theme";
import { Heading } from './index';

describe('<Heading/>', () => {
    it('should render with default values', () => {
        const {debug} = renderTheme(<Heading>texto</Heading>);
        const heading = screen.getByRole('heading', { name: 'texto' });

        expect(heading).toHaveStyle({
            color: theme.colors.primaryColor,
            'font-size': theme.font.sizes.xhuge,
            'text-transform' : 'none',
        });
    });

    it('should render with white color', () => {
        const {debug} = renderTheme(<Heading light={true}>texto</Heading>);
        const heading = screen.getByRole('heading', { name: 'texto' });

        expect(heading).toHaveStyle({
            color: theme.colors.white,
        });
    });

    it('should render correct heading sizes', () => {
        const {rerender} = renderTheme(<Heading size="small">texto</Heading>);
        const heading = screen.getByRole('heading', { name: 'texto' });
        
        expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
            'font-size' : theme.font.sizes.medium,
        });
        
        rerender(
        <ThemeProvider theme={theme}>
            <Heading size="big">texto</Heading>
        </ThemeProvider>
       );
    });


    it('should render with default values', () => {
        const {debug} = renderTheme(<Heading>texto</Heading>);
        const heading = screen.getByRole('heading', { name: 'texto' });

        expect(heading).toHaveStyle({
            color: theme.colors.primaryColor,
            'font-size': theme.font.sizes.xhuge,
            'text-transform' : 'none',
        });
    });

    it('should render correct font-size when using mobile', () => {
        const {debug} = renderTheme(<Heading light={true} size='huge'>texto</Heading>);
        const heading = screen.getByRole('heading', { name: 'texto' });   

       expect(screen.getByRole('heading', { name: 'texto'})).toHaveStyleRule('font-size',
         theme.font.sizes.xlarge, 
       {
        media: theme.media.lteMedium,
            } ,
        );
    });

    it('should render with upperCase letters', () => {
        renderTheme(<Heading uppercase>texto</Heading>);
        const heading = screen.getByRole('heading', { name: 'texto' });

        expect(heading).toHaveStyle({
            'text-transform' : 'uppercase',
        });
    });

});