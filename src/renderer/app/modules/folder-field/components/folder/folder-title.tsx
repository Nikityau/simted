import React, {useContext} from 'react';
import cn from 'classnames'

import {FolderContext} from "./folder";
import {changeFolderState} from "./react-reducer/actions";

import arrow_img from "../../assets/arrow.png";

type FolderTitleProps = {
    title: string
}

const FolderTitle = ({title}:FolderTitleProps) => {

    const fc = useContext(FolderContext)

    const onFolderClick = () => {
        fc.dispatch(changeFolderState())
    }

    return (
        <div className={'folder__info'} onDoubleClick={onFolderClick}>
            <div className={cn(
                'folder__status',
                {
                    'folder__status_open': fc.state.isFolderOpen
                }
            )}
                 onClick={onFolderClick}
            >
                <img src={arrow_img} alt={'arrow'}/>
            </div>
            <div className={'folder__title'}>
                <span>{ title }</span>
            </div>
        </div>
    );
};

export default FolderTitle;