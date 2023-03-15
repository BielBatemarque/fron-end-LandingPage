import styled, { css } from "styled-components";

const titleSizes = {
    small: (theme) => css`
        font-size: ${theme.font.sizes.medium};
    `,
    medium: (theme) => css`
         font-size: ${theme.font.sizes.large};
    `,
    big: (theme) => css`
        font-size: ${theme.font.sizes.xlarge};
   `,
    huge: (theme) => css`
         font-size: ${theme.font.sizes.xhuge};
    `,
};

const titleCase = (uppercase) => css`
    text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
    ${({theme, light, size, uppercase}) => css`
        color: ${light ?  theme.colors.white : theme.colors.primaryColor};
        ${titleSizes[size](theme)};
        ${titleCase(uppercase)}
    `};
`;