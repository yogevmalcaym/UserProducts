import {css} from 'styled-components'
import {getColor, isPhone} from 'styles/helper';

export const Main = css`
    display: flex;
    height: 100%;
    width: 100%;
    
    > .login-box {
        width: 444px;
        height: 444px;
        margin: auto;
        padding:50px;
        box-shadow: 0px 1px 5px 0 ${getColor('shade')};
        
        ${isPhone(css`
            box-shadow: initial;
        `)};
        
        > h1 {
            text-align: center;
        }
        
        > form {
        
            > input {
                margin-bottom: 25px;
                ${isPhone(css`
                        height: 55px;
                `)};
            }
        
            > button {
                background-color: ${getColor('primary')};
                color: ${getColor('light')};
                width: 100%;
                margin-bottom: 18px; 
                padding: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                
                ${isPhone(css`
                    font-size: 31.5px;
                    height: 55px; 
              `)}            
            }
            
            > span {
                color: ${getColor('primary')};
                cursor: pointer;
            }
        }
    }
    
    
`;
