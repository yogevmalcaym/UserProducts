import React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import * as styles from './styles';
import ReactLoaderSpinner from 'react-loader-spinner';

export const Loader = styled(({className}) =>
    <div {...{className: classnames(className, 'loader-wrapper')}}>
        <ReactLoaderSpinner/>
    </div>
)`${styles.LoaderWrapper}`;
