import React, {useEffect} from 'react';

import DirectoryHoc from "./helpers/directory-hoc";
import FileCreate from "./components/file-create/file-create";

import {folderData} from './data/folder.data'
import {useFolderFieldStore} from "./store/zustand/folder-field-store";

import './style/folder-field.scss'

const FolderField = () => {

    const [changeFCVisibilty, changeMousePos] = useFolderFieldStore(state => [state.change, state.changeMousePos])

    const onClick = (e) => {
        switch (e.button) {
            case 0:
                changeFCVisibilty(false)
                return
            case 2:
                changeFCVisibilty(true)
                changeMousePos({
                    x: e.clientX,
                    y: e.clientY
                })
                return;
            default:
                return;
        }
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
            <FileCreate/>
        </div>
    );
};

export default FolderField;