import React from 'react';
import {SimpleIcon} from "simple-icons";

type FileIconProps = {
    icon: SimpleIcon
}

const FileIcon = ({icon}:FileIconProps) => {
    return (
        <svg
            role={'img'}
            viewBox={'0 0 24 24'}
            xmlns="http://www.w3.org/2000/svg"
            fill={`#${icon.hex}`}
        >
            <title>{ icon.title }</title>
            <path
                d={icon.path}
            />
        </svg>
    );
};

export default FileIcon;