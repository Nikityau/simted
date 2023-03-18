import React from 'react';

const FolderContent = ({children}:React.PropsWithChildren) => {


    return (
        <div className={'folder__content'}>
            { children }
        </div>
    );
};

export default FolderContent;