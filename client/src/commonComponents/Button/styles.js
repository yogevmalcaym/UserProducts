import {css} from 'styled-components'
import {getColor} from "styles/helper";

export const Button = css`
    outline: none;
    border: none;
    box-shadow: 0px 1px 5px 0 ${getColor('shade')};    
    border-radius: 2px;
`;
