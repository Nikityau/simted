import React from 'react';

import DirectoryHoc from "./helpers/directory-hoc";

import {folderData} from './data/folder.data'

import './style/folder-field.scss'

const FolderField = () => {

    return (
        <div className={'folder-field'}>
            <div className={'folder-field__wrapper'}>
                <div className={'folder-field__container'}>
                    <DirectoryHoc data={folderData.directory}/>
                </div>
            </div>
        </div>
    );
};

export default FolderField;