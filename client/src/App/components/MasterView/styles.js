import {css} from 'styled-components';

export const MasterView = css`
    display: flex;
    flex-direction: column;
    
    > .content {
    
        display: flex;
        overflow: auto;
        flex-grow: 1;
        
        > .route {
            min-height: 100%;
            width: 100%;
        }
    }
`;
