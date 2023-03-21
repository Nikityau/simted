import React from 'react';

import FileIcon from "./file-icon";
import {getIcon} from "../../helpers/get-icon";

import './style/file.scss'

type FileProps = {
    title: string
}

const File = ({title}: FileProps) => {

    return (
        <div className={'file'}>
            <div className={'file__icon'}>
                {
                    <FileIcon
                        icon={getIcon(title)}
                    />
                }
            </div>
            <div className={'file__name'}>
                <span>{title}</span>
            </div>
        </div>
    );
};

export default File;