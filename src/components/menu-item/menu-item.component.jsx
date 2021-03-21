import React from 'react';
import './menu-item.component.scss'
import { useHistory } from 'react-router-dom'

const MenuItem = ({title, subtitle= 'SHOP NOW', imageUrl, size, linkUrl }) => {

    const history = useHistory();

    return (
            <div
                className={`${size} menu-item`}
                onClick={() => history.push(`${linkUrl}`)}
            >
                <div className='background-image'
                     style={{
                         backgroundImage: `url(${imageUrl})`
                     }}
                     />

                <div className='content'>
                    <div className='title'>{title.toString()}</div>
                    <span className='subtitle'>{subtitle.toUpperCase()}</span>
                </div>
            </div>
    );
};

export default MenuItem;