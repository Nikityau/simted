import React, {useContext} from 'react';
import cn from 'classnames'

import {FolderContext} from "./folder";

const FolderContent = ({children}:React.PropsWithChildren) => {

    const fc = useContext(FolderContext)

    return (
        <div className={cn(
            'folder__content',
            {
                'folder__content_open': fc.state.isFolderOpen
            }
        )}>
            { children }
        </div>
    );
};

export default FolderContent;