import {css} from 'styled-components';
import {getColor} from 'styles/helper';

export const DeleteValidation = css`
    position: absolute;
    top:0;
    left: 0;
    display: flex;
    height: 100%;
    width: 100%;
    background-color: ${getColor('shade','dark')};
    
    
    > .box {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin: auto;
        width: 100%;
        max-width: 500px;
        height: 300px;
        background-color: white;
        text-align: center;
        
        > .buttons {
            display: flex;
            justify-content: center;
            
            > button {
                margin: 5px;
                width: 106px;
                height: 32px;       
            }
            
            > .continue {
                background-color: ${getColor('primary')};    
                color: ${getColor('light')}; 
            }
            
            > .cancel {
                background-color: ${getColor('light')};    
                color: ${getColor('primary')};
            }
        }
    }

`
