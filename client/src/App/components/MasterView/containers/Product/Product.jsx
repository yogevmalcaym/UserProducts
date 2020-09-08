import React, {useCallback, useEffect, useState, useMemo} from 'react';
import {Input, Button, Loader, ReactImageFallback} from 'common-components';
import styled from 'styled-components';
import * as helpers from './helpers';
import * as styles from './styles';
import * as consts from './consts';
import * as utils from './utils';
import {PCMediaQuery, PhoneMediaQuery} from 'styles/helper';
import editIcon from 'assets/edit.svg';
import deleteIcon from 'assets/delete.svg';

export default styled(({className, username, navigate, id, setError}) => {

    const [initCompleted, setInitCompleted] = useState(false)
    const [originData, setOriginData] = useState({});
    const [productData, setProductData] = useState({});

    // Initiate product data.
    useEffect(() => {
        (async () => {
            if (id !== "new") {

                const res = await helpers.init({id});
                if (res.clientError)
                    setError(res.clientError)
                else {
                    setOriginData(res.productData)
                    setProductData(res.productData)
                }
            }

            setInitCompleted(true);

        })();
    }, []);

    // Handle changes of productData within the form.
    const productDataChangedHandler = useCallback(e => {
            let newVal = e.target.value;
            if (newVal === "") newVal = originData[e.target.name];
            if (e.target.name === "basePrice" && parseInt(newVal) <= 0) newVal = 1;

            setProductData({...productData, [e.target.name]: newVal})
        }
        , [productData, setProductData]
    )

    const [imageURL, setImageUrl] = useState();

    const imageUrlUpdateHandler = useCallback(e =>
            setImageUrl(e.target.value)
        , [setImageUrl]
    )

    const [changeImageUrlState, setChangeImageUrlState] = useState(false);

    const imageChangeClickedHandler = useCallback(() => {
        setChangeImageUrlState(true);
    }, [setChangeImageUrlState]);

    const submitImageHandler = useCallback(() => {
        setProductData({...productData, productImageURL: imageURL});
        setChangeImageUrlState(false);
    }, [imageURL, productData, setProductData, setChangeImageUrlState]);

    // Submits product-from.
    const onSaveHandler = useCallback(async e => {
        e.preventDefault();
        const newProductData = utils.getChangedAttrs(productData, originData);
        if (Object.keys(newProductData).length > 0) {
            const res = await helpers.saveProduct({...productData, id, username});
            if (res.clientError)
                setError(res.clientError);
            else
                navigate(`/products/${username}`);
        } else
            alert(consts.NO_CHANGES);


    }, [setError, productData, navigate]);

    const onCancelHandler = useCallback(() => navigate(`/products/${username}`), [navigate]);

    // Shows and hides image url change option.
    const imageURLChangeContent = useMemo(() =>
            changeImageUrlState ? <>
                <Input {...{
                    placeholder: consts.IMAGE_URL_PLACEHOLDER,
                    onChange: imageUrlUpdateHandler,
                    className: "image-url"

                }}/>
                <Button {...{onClick: submitImageHandler, className: "submit-image-url"}}>
                    {consts.SAVE_URL}
                </Button>
            </> : <>
                <PCMediaQuery>
                <span {...{
                    onClick: imageChangeClickedHandler,
                    className: "update-add-image-url"
                }}>{productData && productData.productImageURL ? consts.CHANGE_IMAGE : consts.NEW_IMAGE}</span>
                </PCMediaQuery>
                <PhoneMediaQuery>
                    <img {...{src: editIcon, className: "edit-icon", onClick:imageChangeClickedHandler}}/>
                </PhoneMediaQuery>
            </>

        , [changeImageUrlState, imageUrlUpdateHandler, submitImageHandler, imageChangeClickedHandler, productData])

    const buttonsContent = useMemo(() =>
            <div className="buttons">
                <Button {...{className: "cancel", onClick: onCancelHandler}}>
                    {consts.CANCEL}
                </Button>
                <Button {...{
                    className: "save",
                    type: "submit",
                    form: "product-form",
                    value: "Submit"
                }}>{consts.SAVE}</Button>
            </div>
        , [onCancelHandler]);

    const deleteProductHandler = useCallback(async () => {
            const res = await helpers.deleteProduct({id});
            if (res.clientError) setError(res.clientError);

            navigate(`/products/${username}`);

        }, []
    )

    return !initCompleted ? <Loader/> :
        <div {...{className}}>
            <div {...{className: "header"}}>
                <PCMediaQuery>
                    <span>{consts.PRODUCTS}</span>
                    <span className="inner-link-sign">{consts.INNER_LINK_SIGN}</span>
                    <span>{productData.name || ""}</span>
                    {buttonsContent}
                </PCMediaQuery>

                <PhoneMediaQuery>
                    <span>{productData.name || ""}</span>
                </PhoneMediaQuery>
            </div>

            <div className="content">
                <PCMediaQuery><span>{consts.GENERAL}</span></PCMediaQuery>
                <img {...{src: deleteIcon, className: "delete-button", onClick: deleteProductHandler}}/>
                <form {...{id: "product-form", onSubmit: onSaveHandler}}>

                    <div className="name">
                        <label>{consts.PRODUCT_TITLE}</label>
                        <Input {...{
                            name: "name",
                            placeholder: productData.name || consts.TITLE_PLACEHOLDER,
                            onChange: productDataChangedHandler,
                        }}/>
                    </div>

                    <div className="description">
                        <label>{consts.DESCRIPTION}</label>
                        <textarea {...{
                            name: "description",
                            placeholder: productData.description || consts.DESCRIPTION_PLACEHOLDER,
                            type: "textarea",
                            onChange: productDataChangedHandler
                        }}/>
                    </div>

                    <div className="image">
                        <label>{consts.PRODUCT_IMAGE}</label>
                        <div className="image-box">
                            {productData.productImageURL ?
                                <ReactImageFallback src={productData.productImageURL}/> :
                                <span>{consts.NO_IMAGE}</span>}
                        </div>
                        {imageURLChangeContent}
                    </div>

                    <div className="price">
                        <PCMediaQuery><label>{consts.PRICE}:</label></PCMediaQuery>
                        <PhoneMediaQuery><label>{`${consts.PRICE} (${consts.USD}):`}</label></PhoneMediaQuery>

                        <Input {...{
                            name: "basePrice",
                            type: "number",
                            placeholder: productData.basePrice || 0,
                            min: "1",
                            onChange: productDataChangedHandler,
                            value: productData.basePrice || ""
                        }}/>
                        <PCMediaQuery>
                            <span>{consts.USD}</span>
                        </PCMediaQuery>


                    </div>

                </form>

                <PhoneMediaQuery>{buttonsContent}</PhoneMediaQuery>

            </div>
        </div>

})`${styles.Product}`;
