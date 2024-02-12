import React from 'react';

import Main from './Main';
import CallToAction from './CallToAction';
import Specials from './Specials';
import Chicago from './Chicago';


const HomePage = () => {
    return (
    <Main>
        <CallToAction/>
        <Specials/>
        <Chicago/>
    </Main>
    );
};

export default HomePage;