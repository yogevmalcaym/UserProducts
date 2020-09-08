import {css} from 'styled-components';
import {getColor} from 'styles/helper';

export const NotFound = css`
    display: flex;
    width: 100%;
    height: 100%;
    text-align: center;
    
    > .content {
        height: fit-content;
        width: fit-content;
        margin: auto;
        
        > h1 {
            color: ${getColor('danger')}
        }
    }
`
