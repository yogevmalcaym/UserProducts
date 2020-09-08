import {css} from 'styled-components';
import {getColor} from 'styles/helper';

export const Input = css`
    width: 100%;
    border: 1px solid ${getColor('dark','light')};
    padding: 5px 10px 5px 13px;
    
    &:focus {
      outline: none;
      border: 2px solid ${getColor('dark','light')}; 
    }
    
`;
