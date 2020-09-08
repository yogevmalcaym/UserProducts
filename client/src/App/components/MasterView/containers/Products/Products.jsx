import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Loader, Input, Button} from 'common-components';
import styled from 'styled-components';
import * as styles from './styles';
import * as helpers from './helpers';
import * as consts from './consts';
import classNames from 'classnames';
import searchIcon from 'assets/search.svg';
import ProductsList from './components/ProductsList/ProductsList';

const NoProducts = styled(({className}) => <h1 {...{className}}>{consts.NO_PRODUCTS}</h1>)`${styles.NoProducts}`;

const AddProductButton = styled(({className, onClick}) =>
    <Button {...{className, onClick}}>{consts.ADD_PRODUCT_SIGN}</Button>
)`${styles.AddProductButton}`;

export default styled(({className, navigate, username, setError}) => {
    const [initCompleted, setInitCompleted] = useState(false);
    const [products, setProducts] = useState(null);
    const [filterText, setFilterText] = useState("");

    useEffect(() => {
        (async () => {
                const response = await helpers.init({username});
                response.clientError && setError(response.clientError);

                // If the user is not validated, products is undefined.
                if (response.notValidated) {
                    alert(consts.NOT_VALIDATED);
                    navigate('/');
                } else {
                    setProducts(response.userProducts);
                }
                setInitCompleted(true);
            }
        )();
    }, []);

    const filteredProducts = useMemo(() => filterText && products.filter(product =>
            product.name && product.name.toLowerCase().includes(filterText.toLowerCase())
        ) || products
        , [filterText, products]);

    const filterTextChangeHandler = useCallback(e =>
            setFilterText(e.target.value)
        , [setFilterText]);

    const deleteProductWrapper = useCallback(async ({id}) => {
        const response = await helpers.deleteProduct({id});
        response.clientError && setError(response.clientError);
        const newProducts = products.filter(product => product._id !== id)
        setProducts(newProducts);
    }, [setProducts, products]);

    const addProductClickedHandler = useCallback(() => {
        navigate(`/product/${username}/new`);
    }, []);

    const editProductHandler = useCallback(({id}) => {
        navigate(`/product/${username}/${id}`);
    }, []);

    const content = useMemo(() =>
            !initCompleted ? <Loader/> :
                (products.length === 0) ? <NoProducts/> :
                    <ProductsList {...{
                        products: filteredProducts,
                        deleteProduct: deleteProductWrapper,
                        editProduct: editProductHandler
                    }} />
        , [initCompleted, filteredProducts]);

    return <div {...{className: classNames(className, 'products')}}>
        <div className="header">
            <h1>{consts.PRODUCTS}</h1>
            <div className="search-box">
                <Input {...{
                    placeholder: consts.SEARCH_PLACEHOLDER,
                    onChange: filterTextChangeHandler,
                    value: filterText
                }}/>
                <img {...{src: searchIcon}}/>
            </div>
            <AddProductButton {...{onClick: addProductClickedHandler}}/>
        </div>
        {content}
    </div>

})`${styles.Products}`;
