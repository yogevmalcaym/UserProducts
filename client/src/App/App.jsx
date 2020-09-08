import React from "react";
import {ThemeProvider} from 'styled-components';
import theme from 'styles/theme';
import MasterView from './components/MasterView/MasterView';
import * as styles from './styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

class ErrorBoundary extends React.Component {
    componentDidCatch(error, info) {
        console.error(error)
    }

    render() {
        return this.props.children;
    }
}

export default () =>
    <React.Fragment>
        <ErrorBoundary>
            <ThemeProvider {...{theme}}>
                <styles.GlobalStyle/>
                <MasterView/>
            </ThemeProvider>
        </ErrorBoundary>
    </React.Fragment>;
