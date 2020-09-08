import React, {useCallback, useMemo} from 'react';
import * as styles from './styles';
import styled from 'styled-components';
import {ReactImageFallback} from 'common-components';
import * as consts from './consts';
import editIcon from 'assets/edit.svg';
import deleteIcon from 'assets/delete.svg';
import {PhoneMediaQuery, PCMediaQuery} from 'styles/helper'

export default styled(({className, _id: id, name, description, basePrice, productImageURL, deleteProductClickedHandler, editProduct}) => {

    const deleteClickedHandler = useCallback(() =>
            deleteProductClickedHandler({id})
        , [])

    const editClickedHandler = useCallback(() =>
            editProduct({id})
        , [])

    const productImage = useMemo(() =>
            <div className="image-wrapper">
                <ReactImageFallback
                    {...{
                        src: productImageURL,
                        className: "product-image",
                    }}
                />
            </div>
        , [productImageURL]);

    const buttonsWrapper = useMemo(() =>
            <div className="buttons">

                <img {...{src: require('assets/delete.svg'), onClick: deleteClickedHandler}}/>
                <img {...{src: editIcon, onClick: editClickedHandler}}/>
            </div>
        , [deleteClickedHandler, editClickedHandler])

    return <div {...{className}}>
        <PCMediaQuery>
            {productImage}
            <div className="texts-wrapper">
                <h4 className="heading">{name}</h4>
                <p className="description">{description}</p>
                <span className="price">{`${consts.USD} ${basePrice || consts.UNKNOWN}`} </span>
            </div>
        </PCMediaQuery>
        <PhoneMediaQuery>
            <div className="header">
                {productImage}
                <div className="heading-and-price">
                    <h4 className="heading">{name}</h4>
                    <p className="price">{`${consts.USD} ${basePrice}`} </p>
                </div>

            </div>
            <p className="description">{description}</p>
        </PhoneMediaQuery>
        {buttonsWrapper}
    </div>
})`${styles.ListItem}`;
