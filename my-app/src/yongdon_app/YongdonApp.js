import React from 'react';
import YongdonMainPage from './YongdonMainPage';
import YongdonInputPage from './YongdonInputPage';

function YongdonApp(props) {

    let page = <YongdonMainPage />
    // let page = <YongdonInputPage />
    return (
        <div>
            {page} 
        </div>
    );
}

export default YongdonApp;