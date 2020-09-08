import {css} from 'styled-components';
import {getColor} from 'styles/helper';

export const ErrorModal = css`
    border: 1px solid ${getColor('danger')};
    box-shadow: 0 0 2px 4px ${getColor('danger', 'light')};
    width: fit-content;
    padding: 30px;
    border-radius: 7px;
    margin: auto;
    
    > h2 {
        color: ${getColor('danger')};
    }
`
