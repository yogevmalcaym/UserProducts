import {css} from 'styled-components';

export const ProductsList = css`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    
    @media (min-width: 1900px) {
        flex-direction: row;
    }
    
`;
