import React from 'react';
import Spinner from './Spinner';


const WithSpinner = WrappedComponent => {
    const SpinnerBlock = ({isLoading, ...otherProps}) => {
        return isLoading ? (
            <Spinner/>
        ) : (
            <WrappedComponent {...otherProps}/>
        );
    };
    return SpinnerBlock;
};

export default WithSpinner;