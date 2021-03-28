import React from 'react';
import './homepage.styles.scss'
import DirectoryMenu from "../../components/directory-menu/directory-menu.component";
import {connect} from "react-redux";
import {selectSections} from "../../redux/directory/directory.selectors";
import {createStructuredSelector} from "reselect";

const HomePage = ({sections}) => {

    return (
        <div className='homepage'>
            <h1>Welcome to my Homepage</h1>
            <DirectoryMenu sections={sections} />
        </div>
    );
};

const mapStateToProps = createStructuredSelector ({
        sections: selectSections
});

export default connect(mapStateToProps)(HomePage);
