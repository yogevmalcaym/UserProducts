import classNames from 'classnames';
import {Router} from '@reach/router';
import React, {useState, useMemo} from 'react';
import styled from 'styled-components';
import * as styles from './styles';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Welcome from './containers/Welcome/Welcome';
import Products from './containers/Products/Products';
import Product from './containers/Product/Product';
import {ErrorModal} from "common-components/ErrorModal/ErrorModal";
import ListItem from "./containers/Products/components/ProductsList/components/ListItem/ListItem";

export default styled(({className}) => {
        const [error, setError] = useState(null);

        const content = useMemo(() =>
                error ? <ErrorModal {...{error, path: "/"}}/>
                    : <Router className='route'>
                        <Welcome {...{path: '/', setError, className: "welcome"}}/>
                        <Products {...{path: '/products/:username', setError, className: "products"}}/>
                        <Product {...{path: '/product/:username/:id', setError, className: "product"}}/>
                        <NotFound default/>
                    </Router>

            , [error, setError]
            )
        ;

        return <div className={classNames(className, 'master-view')}>
            <Header/>
            <div className='content' id="main-content">
                {content}
            </div>
        </div>
    }
)`${styles.MasterView}`;
