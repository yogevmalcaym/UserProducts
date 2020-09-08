import React from 'react';
import consts from './consts';
import classNames from 'classnames';
import * as styles from './styles';
import styled from 'styled-components';
import pageNotFoundImage from './assets/page-not-found.png';


export default styled(({className}) =>
    <div className={classNames(className, 'not-found')}>
        <div className = 'content'>
            <img src={pageNotFoundImage}/>
            <h1>{consts.TITLE}</h1>
            <h4>{consts.SUB_TITLE}</h4>
        </div>
    </div>
)`${styles.NotFound}`;
