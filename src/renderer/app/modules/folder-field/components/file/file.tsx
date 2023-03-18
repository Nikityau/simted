import React from 'react';

import './style/file.scss'

type FileProps = {
    title: string
}
const File = ({title}: FileProps) => {
    return (
        <div className={'file'}>
            <span>{title}</span>
        </div>
    );
};

export default File;