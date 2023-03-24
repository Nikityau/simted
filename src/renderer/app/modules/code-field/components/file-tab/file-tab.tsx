import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import cn from 'classnames'

import {FolderFile} from "../../../folder-field";

import Icon from "../../../../ui/components/icon/icon";
import {getIcon} from "../../../folder-field/helpers/get-icon";
import {currentFileFolder, removeFileFolder} from "../../store/action";
import {currentSelector} from "../../store/selector/current.selector";

type FileTabProps = {
    file: FolderFile
}

import './style/file-tab.scss'

const FileTab = ({file}: FileTabProps) => {

    const dispatch = useDispatch()
    const current = useSelector(currentSelector)

    const onCurrent = () => dispatch(currentFileFolder(file))

    const onClose = () => dispatch(removeFileFolder(file))

    const isCurrent = (file: FolderFile): boolean => {
        return file.id == current.id
    }

    return (
        <div className={cn(
            'file-tab',
            {
                'file-tab_current': isCurrent(file)
            }
        )} onClick={onCurrent}>
            <div className={'file-tab__icon'}>
                <Icon icon={getIcon(file)}/>
            </div>
            <div className={'file-tab__name'}>
                <span>{file.name}</span>
            </div>
            <div className={'file-tab__close'} onClick={onClose}>
                <span>x</span>
            </div>
        </div>
    );
};

export default FileTab;