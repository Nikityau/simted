import React from 'react';

import {Simted} from "../modules/simted";

import './style/app.scss'
import '../ui/style/scrollbar.scss'
import '../assets/fonts/jet-brains-mono'

const App = () => {

    return (
        <div className={'simted'}>
            <Simted/>
        </div>
    );
};

export default App;