import React from 'react';
import loadingImage from '../../../assets/images/preloader.gif';

const Loading = () => {
    return (
    <img src={loadingImage} className={'loading-img'} alt={'loading'}/>
    );
};

export default Loading;
