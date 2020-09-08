import {css} from 'styled-components';
import {getColor, isPhone} from 'styles/helper';

const imageWrapperStyles = css`
    > .image-wrapper {
        display: flex;
        border: 1px solid ${getColor('shade')};
        margin-right: 30px;
        padding: 15px 30px;
        
        ${isPhone(css`
            padding: 10px;
        `)};
        
        > img {
            margin: auto;
            width: 77px;
            height: 77px;
        }
    }
`

export const ListItem = css`
    display: flex;
    background-color: ${getColor('light')};
    margin-bottom: 17px;
    padding: 20px;
    justify-content: space-between;
    
    ${isPhone(css`
        flex-direction: column;
    `)};
    
    @media (min-width: 1900px) {
        flex: 1 1 50%;
        
        &:nth-child(odd){
            margin-right: 17px;
        }
        
    }
    
    @media (max-width: 1360px) {
        flex: 1 0 100%;
    }
    
    ${imageWrapperStyles}
    
    > .texts-wrapper {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        justify-content: space-between;
        
        > .heading {
            font-size: 18px;
            font-weight: 600;
        }
        
        > .price {
            text-shadow: 2px 0 0 #ffffff;
            font-size: 18px;
            font-weight: 600;
        }
        
    }
    
    ${isPhone(css`
        > .header {
            display: flex;
            ${imageWrapperStyles};
        
            > .heading-and-price {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                
                > * {
                    font-size: 18px;
                    font-weight: 600;
                    margin-bottom: 0;
                }
            }                        
        }
        
        > .description {
            padding: 20px 0;
            margin-bottom: 0;
        }
        
    `)};
    
    > .buttons {
    
        ${isPhone(css`
            padding-top: 10px;
            display: flex;
            justify-content: space-around;
            border-top: 1px solid ${getColor('shade')};
        `)};
            
        > img {
            cursor: pointer;
            margin: 0px 5px;
        }
            
    }
    
    
    
`;
