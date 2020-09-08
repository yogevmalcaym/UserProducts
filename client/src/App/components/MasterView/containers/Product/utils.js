export const getChangedAttrs = (newObj, originObj) =>
    Object.keys(newObj).reduce((acc, key) =>
            originObj[key] !== newObj[key] ?
                {...acc, [key]: newObj[key]} : acc
        , {})
