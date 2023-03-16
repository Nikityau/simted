import React, {useState} from 'react';

import './style/folder.scss'

type FolderProps = {
    title: string,
}

const Folder = ({title, children}: FolderProps & React.PropsWithChildren) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div className={'folder'}>
            <div className={'folder__info'}>
                <div className={'folder__title'}>
                    <span>{ title }</span>
                </div>
            </div>
            <div className={'folder__content'}>
                { children }
            </div>
        </div>
    );
};

export default Folder;