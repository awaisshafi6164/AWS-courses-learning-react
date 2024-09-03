import React from 'react';
import MainDivWelcome from './Main-Div/MainDivWelcome';
import MainDivHotelInfo from './Main-Div/MainDivHotelInfo';

const Main = () => {

    return (
        <main id="wrapper">
            <MainDivWelcome/>
            <MainDivHotelInfo/>
        </main>
    );

}

export default Main;