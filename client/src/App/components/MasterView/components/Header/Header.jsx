import styled from 'styled-components';
import React, {useCallback, useState, memo} from 'react';
import * as styles from './styles';
import * as consts from './consts';
import classNames from 'classnames';
import logo from 'assets/logo.png';
import avatar from 'assets/user.png';
import {navigate} from "@reach/router";
import {PCMediaQuery, PhoneMediaQuery} from "styles/helper";
import hamburger from 'assets/hamburger.svg';


const Sidebar = styled(memo(({className, onLogoutClicked, onClose}) => {

    return <div {...{className, onClick: onClose}}>
        <div className="content">
            <UserDetails {...{onLogoutClicked}}/>
        </div>
    </div>

}))`${styles.Sidebar}`;

const UserDetails = ({onLogoutClicked}) =>
    <div className="user-details">
        <div className="avatar-wrapper">
            <img src={avatar}/>
        </div>
        <div className="email-logout">
            <span className="email">{consts.EMAIL}</span>
            <span className="log-out" onClick={onLogoutClicked}>{consts.LOG_OUT}</span>
        </div>
    </div>


export default styled(({className}) => {

        const [showSideNav, setShowSideNav] = useState(false);

        const onBurgerClicked = useCallback(() => {
            setShowSideNav(true);
        }, [setShowSideNav]);

        const onCloseSidebar = useCallback(() => {
            setShowSideNav(false);
        }, [setShowSideNav]);

        const onLogoutClicked = useCallback(() => {
            if (confirm(consts.QUESTION)) {
                alert(consts.LOGGED_OUT);
                setShowSideNav(false);
                navigate('/');
            }
        }, [navigate]);

        return <div className={classNames(className, 'header')}>
            <img {...{src: logo, className: "logo"}}/>
            <PCMediaQuery><UserDetails {...{onLogoutClicked}}/></PCMediaQuery>
            <PhoneMediaQuery>
                <img {...{
                    src: hamburger,
                    onClick: onBurgerClicked,
                    className: "hamburger"
                }}/>

                <Sidebar {...{onClose: onCloseSidebar, onLogoutClicked, isShown: showSideNav}}/>
            </PhoneMediaQuery>
        </div>
    }
)`${styles.Header}`;
