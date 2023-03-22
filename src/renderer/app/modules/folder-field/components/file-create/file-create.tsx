import React, {useEffect} from 'react';
import cn from 'classnames'

import {useFolderFieldStore} from "../../store/zustand/folder-field-store";

import './style/file-create.scss'

const FileCreate = () => {

    const [isVisible, pos] = useFolderFieldStore(state => [state.isFolderCreateOpen, state.mousePos])

    useEffect(() => {
        console.log(isVisible,pos)
    })

    return (
        <div className={cn(
            'file-create',
            {
                'file-create_open': isVisible
            }
        )}
            style={{
                transform: `translate(${pos.x}px, ${pos.y}px)`
            }}
        >
            
        </div>
    );
};

export default FileCreate;