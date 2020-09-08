import {css} from 'styled-components';
import {getColor, isPhone} from 'styles/helper';

export const Product = css`
    padding: 20px 37px 0px 37px;
    height: 100%;
    
    ${isPhone(css`
        padding: 20px 37px 0px 37px;
    `)};
    
     label {
        width: 160px;
        margin-right: 10px;
     }
     
     .buttons {
            font-size: initial;
            align-self: center;
            position: absolute;
            right: 0;
            
            ${isPhone(css`
                position: fixed;
                bottom: 0;
                background-color: ${getColor('light')};
                width: 100%;
                padding: 33px;
                display: flex;
                
                > button {
                    flex-grow: 1;
                    padding: 10px;
                }
            `)};
            
            > .save {
                width: 70px;
                border-radius: 15px;
                padding: 5px 10px;
                background-color: ${getColor('primary')};
                color: ${getColor('light')};
            }
            
            > .cancel {
                width: 70px;
                margin-right: 10px;
                border-radius: 15px;
                padding: 5px 10px;
                background-color: ${getColor('light')};
                color: ${getColor('primary')};
            }
        }
        
    > .header {
        height: 45px ;
        position: relative;
        font-size: 30px;
        display: flex;
        
        > .inner-link-sign {
            font-weight: 600;
            color: ${getColor('shade')};
            margin: 0px 20px;
        }                
        
    }
    
    
    > .content {
        position: relative;        
        display: flex;
        flex-direction: column;
        padding: 30px;
        background-color: ${getColor('light')};
        box-shadow: 0px 1px 5px 0px ${getColor('shade')};
        margin-top: 20px;
        
        ${isPhone(css`
            background-color: initial;
            box-shadow: initial;
            padding: 0px 0px 110px 0px;
            margin-top: 0px;
            height: 100%;
        `)};
        
        .delete-button {
            position: absolute;
            top: 25px;
            right: 25px;
            cursor: pointer;
            
            ${isPhone(css`
                top: -34px;
                right: -20px;
            `)};
        }        
        
        > span {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 20px;
        }
        
        > form {
            > div {
                display: flex;
                margin: 17px 0px;
                
                ${isPhone(css`
                    flex-direction: column;
                `)};
                
            }
            
            
            
            > .name {
            
                > input {
                    width: 320px;
                    
                    ${isPhone(css`
                        width: 100%;
                    `)};
                }
            
            }
            
            > .description {
            
                > textarea {
                    padding: 15px;
                    flex-grow: 1;
                    border: 1px solid ${getColor('dark', 'light')};
                    
                    &:focus {
                        outline: none;
                        border: 2px solid ${getColor('dark', 'light')}; 
                    }
                }
            
            }
            
            > .image {
                
                ${isPhone(css`
                    flex-direction: row;
                    flex-wrap: wrap;
                `)};
            
                > .image-box {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 20px 30px;
                    width: 125px; 
                    height: 100px;
                    border: 1px dashed ${getColor('shade')};
                    margin-right: 10px;
                    
                    > img {
                        height: 77px;
                        width: 77px;
                    }
                    
                    > span {
                        text-align: center;
                    }
                    
                }
                
                ${isPhone(css`
                    > .edit-icon {
                        height:39px;
                    }
                `)};
                
                > .image-url {
                    width: initial;
                    margin-right: 10px;
                    height: fit-content;
                    align-self: center;
                    
                    ${isPhone(css`
                        margin: 10px 0px;
                    `)};
                }
                
                > .submit-image-url {
                    height: fit-content;
                    align-self: center;
                    padding: 5px; 
                }
                
                
            }
            
            > .price {
              display: flex;
              align-items: center;
              
              ${isPhone(css`
                  flex-direction: row;
                  flex-wrap: wrap;
                  
                  > label {
                      flex-basis: 100%;
                  }
              `)};
              
              
            
              > input {
                width: 72px;      
                margin-right: 10px;
                
                    ${isPhone(css`
                        width: 100%;
                    `)};
              }
              
              > span {
                  font-size: 14px;
                  
              }
              
            }
        
            > * {
                
                > .update-add-image-url {
                    cursor: pointer;
                    color: ${getColor('primary')};
                    align-self: center;
                }
                
            }
        }
        
        input textarea {
        ${isPhone(css`
            width: 100%;
        `)};
        }
        
        
    }
`;
