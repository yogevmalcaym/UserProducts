import React from 'react';
import consts from './consts';
import styled from 'styled-components';
import * as styles from './styles';
import classNames from 'classnames';

export const ErrorModal = styled(({className, error}) =>
    <div {...{className: classNames(className, 'error-modal')}}>
        <h2>{consts.TITLE}</h2>
        <h4>{consts.SUB_TITLE}</h4>
        <p>{error}</p>
    </div>
)`${styles.ErrorModal}`;
