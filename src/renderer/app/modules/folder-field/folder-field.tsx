import React, {useEffect} from 'react';

import DirectoryHoc from "./helpers/directory-hoc";

import {folderData} from './data/folder.data'

import './style/folder-field.scss'

const FolderField = () => {

    useEffect(() => {
        console.log('rerender')
    })

    const onClick = (e) => {

    }

    return (
        <div className={'folder-field'}
             onMouseDown={onClick}
        >
            <div className={'folder-field__wrapper'}>
                <div className={'folder-field__container'}>
                    <DirectoryHoc data={folderData.directory}/>
                </div>
            </div>
        </div>
    );
};

export default FolderField;