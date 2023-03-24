import React from 'react';
import {useSelector} from "react-redux";

import {filesSelector} from "../../store/selector/files.selector";
import FileTab from "../file-tab/file-tab";

import './style/files-tabs.scss'

const FilesTabs = () => {

    const files = useSelector(filesSelector)

    return (
        <div className={'files-tabs'}>
            {
                files.map(f => (
                   <FileTab key={f.id} file={f}/>
                ))
            }
        </div>
    );
};

export default FilesTabs;