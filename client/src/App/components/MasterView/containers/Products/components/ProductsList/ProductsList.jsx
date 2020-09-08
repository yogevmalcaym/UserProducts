import React, {useState, useMemo, useCallback} from 'react';
import * as styles from './styles';
import styled from 'styled-components';
import ListItem from './components/ListItem/ListItem';
import DeleteValidation from './components/DeleteValidation/DeleteValidation';

export default styled(({products, className, deleteProduct, editProduct}) => {
        const [currentProduct, setCurrentProduct] = useState();
        const [displayDeleteValidation, setDisplayDeleteValidation] = useState(false);


        const deleteProductClickedHandler = useCallback(({id}) => {
            setCurrentProduct(id);
            setDisplayDeleteValidation(true);
        }, [setCurrentProduct, setDisplayDeleteValidation]);

        const productsList = useMemo(() =>
                products.map(product =>
                    <ListItem  {...{...product, deleteProductClickedHandler, editProduct, key: product._id}}/>),
            [products]);

        const cancelDeletion = useCallback(() => {
            setCurrentProduct(null);
            setDisplayDeleteValidation(false);
        }, [setCurrentProduct, setDisplayDeleteValidation]);

        const continueDeletion = useCallback(() => {
            deleteProduct({id: currentProduct});
            setDisplayDeleteValidation(false);
        }, [currentProduct]);

        return <div {...{className}}>
            {displayDeleteValidation && <DeleteValidation {...{
                onContinue: continueDeletion,
                onCancel: cancelDeletion
            }} />}
            {productsList}
        </div>
    }
)`${styles.ProductsList}`;
