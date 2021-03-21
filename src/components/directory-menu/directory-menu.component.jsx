import React from 'react';
import './directory-menu.styles.scss'
import MenuItem from "../menu-item/menu-item.component";

const DirectoryMenu = ({sections}) => {
    return (
        <div className='directory-menu'>
            {
                sections.map(({id, ...otherProps}) => {
                    return <MenuItem key={id} {...otherProps} />
                })
            }
        </div>
    );
};

export default DirectoryMenu;