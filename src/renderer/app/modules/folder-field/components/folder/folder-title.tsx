import React, {useState} from 'react';
import cn from 'classnames'

import arrow_img from "../../assets/arrow.png";

type FolderTitleProps = {
    title: string
}

const FolderTitle = ({title}:FolderTitleProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const onArrowClick = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <div className={'folder__info'}>
            <div className={cn(
                'folder__status',
                {
                    'folder__status_open': isOpen
                }
            )} onClick={onArrowClick}>
                <img src={arrow_img} alt={'arrow'}/>
            </div>
            <div className={'folder__title'}>
                <span>{ title }</span>
            </div>
        </div>
    );
};

export default FolderTitle;