import React from 'react';

import FilesTabs from "./components/files-tabs/files-tabs";

import './style/code-field.scss'

const CodeField = () => {

    return (
        <div className={'code-field'}>
            <FilesTabs/>
        </div>
    );
};

export default CodeField;