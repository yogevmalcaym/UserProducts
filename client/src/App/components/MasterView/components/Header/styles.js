import {css} from 'styled-components';
import {getColor, isPhone} from "styles/helper";

const getDimensions = ({isShown}) => css`
      width: ${isShown ? '100%' : '0px'};
      height: ${isShown ? '100%' : '0px'};
      top: ${isShown ? 0 : '-100px'};
    `;

export const Sidebar = css`
    z-index: 1;
    position: fixed;
    ${getDimensions};
    right: 0;
    background-color: ${getColor('shade', 'dark')};
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    
    transition: all ease 300ms ;
    transition-property: width, background-color;
    
    > .content {
          background-color: ${getColor('light','dark')};
          width: 70%;
          height: 100%;
          padding: 20px;
          
    } 
`;

export const Header = css`
    height: 65px;
    width: 100%;
    box-shadow: 0 0 10px 0 ${getColor('shade')};
    display: flex;
    background-color: ${getColor('light')};
    align-items: center;
    padding: 10px 70px;
    justify-content: space-between;
    
    ${isPhone(css`
        padding: 10px 30px;
    `)};
    
    > .logo {
        height: 26px; 
        width: 131px;
    }
    
    > .hamburger {
        height: 25px;
        width: 25px;
    }
    
    .user-details {
        display: flex;
    
        > .avatar-wrapper {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          border-radius: 22px;
          border: solid 1px ${getColor('shade', 'lighter')};
          background-color: ${getColor('dark', 'lighter')};
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 10px;
        }
        
        > .email-logout {
            display: flex;
            flex-direction: column;
            
            > .email {
                color: ${getColor('light', 'darker')};
            }
            
            > .log-out {
                color: ${getColor('primary')};
                cursor: pointer;            
            }
        
        }
        
    }
`;
