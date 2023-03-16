import React, {useEffect, useRef} from 'react';

import {FolderField} from "../folder-field";
import {CodeField} from "../code-field";

import './style/simted.scss'

const Simted = () => {

    return (
        <div className={'simted-module'}>
            <FolderField/>
            <CodeField/>
        </div>
    );
};

export default Simted;