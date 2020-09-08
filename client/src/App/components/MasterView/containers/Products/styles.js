import {css} from 'styled-components';
import {getColor, isPhone} from 'styles/helper';

export const NoProducts = css`
    width: 100%;
    margin-top: 10%;
    color: ${getColor('dark', 'light')};
    text-align: center;
`;

export const AddProductButton = css`
    position: absolute;
    right: 10px;
    box-shadow: 0px 2px 4px 1px ${getColor('shade')}; 
    background-color: ${getColor('primary')};
    color: ${getColor('light')};
    font-size: 43px;
    font-weight: 500;
    width: 66px;
    height: 66px;
    border-radius: 33px;
    
    ${isPhone(css`
        position: fixed;
        right: 35px;
        bottom: 50px;
    `)};
`;

export const Products = css`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 0px 70px;
    height: 100%;
    
    ${isPhone(css`
        padding: 0px 35px 100px 35px;
    `)};
        
    > .header {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 20px 0px;
        
        ${isPhone(css`
            align-items: flex-start;
            flex-direction: column;
            margin-bottom: 25px;            
        `)};
            
        > .search-box {
            width: fit-content;
            position: relative;
            width: 350px;
            margin-left: 28px;
            
            ${isPhone(css`
                width: 100%;
                margin-left: 0px;
            `)};
        
            > input {
                padding-right: 25px;
            }
            
            > img {
                position: absolute;
                right: 10px;
                top: 7px;
            }
        }
      
      
    }
`;
