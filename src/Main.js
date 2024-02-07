import { Router, Routes, Route } from 'react-router-dom';

import React from 'react';
import CallToAction from './CallToAction';
import Specials from './Specials';
import Chicago from './Chicago';

const Main = () => {
    return (
        <main>
        <CallToAction/>
        <Specials/>
        <Chicago/>
        </main>
    );
};

export default Main;