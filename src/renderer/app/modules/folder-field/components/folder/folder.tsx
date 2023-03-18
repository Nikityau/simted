import React, {useEffect, useState} from 'react';
import cn from 'classnames'

import FolderTitle from "./folder-title";
import FolderContent from "./folder-content";

import './style/folder.scss'

type FolderProps = {
    title: string,
}

const Folder = ({title, children}: FolderProps & React.PropsWithChildren) => {

    return (
        <div className={cn('folder')}>
            <FolderTitle title={title}/>
            <FolderContent>
                {children}
            </FolderContent>
        </div>
    );
};

export default Folder;