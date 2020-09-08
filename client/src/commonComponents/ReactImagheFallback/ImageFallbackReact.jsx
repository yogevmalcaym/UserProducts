import React from 'react';
import {Loader} from "common-components/Loader/Loader";
import ImageFallbackReact from "react-image-fallback";

export const ReactImageFallback = ({src, className}) =>
    <ImageFallbackReact
        {...{
            src,
            fallbackImage: "https://static.thenounproject.com/png/340719-200.png",
            initialImage: <Loader/>,
            alt: "IMG",
            className,
            initialTimeout: 100

        }}
    />
