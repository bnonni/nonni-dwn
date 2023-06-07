import React from 'react';
import './App.css';
import { Dwn } from '@tbd54566975/dwn-sdk-js';

const dwn = await Dwn.create({});
console.log(dwn)

export const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <p>Bnonni DWN</p>
            </header>
        </div>
    );
};
