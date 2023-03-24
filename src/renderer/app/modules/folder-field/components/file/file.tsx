import React from 'react';
import {useDispatch} from "react-redux";

import {getIcon} from "../../helpers/get-icon";
import {addFileAction} from "../../../code-field";

import Icon from "../../../../ui/components/icon/icon";

import {FolderFile} from "../../data/folder.data";

import './style/file.scss'

type FileProps = {
    file: FolderFile
}

const File = ({file}: FileProps) => {

    const dispatch = useDispatch()

    const onFileOpen = () => {
        dispatch(addFileAction(file))
    }

    return (
        <div className={'file'} data-file-type={'file'} onDoubleClick={onFileOpen}>
            <div className={'file__icon'}>
                <Icon icon={getIcon(file)}/>
            </div>
            <div className={'file__name'}>
                <span>{file.name}</span>
            </div>
        </div>
    );
};

export default File;