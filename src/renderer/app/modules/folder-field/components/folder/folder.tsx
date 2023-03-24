import React, {useReducer} from 'react';
import cn from 'classnames'

import {folderReducer} from "./react-reducer/react-reducer";
import {FolderAction, FolderState} from "./react-reducer/interface";

import FolderTitle from "./folder-title";
import FolderContent from "./folder-content";

import {FolderFile} from "../../data/folder.data";

import './style/folder.scss'

type FolderProps = {
    folder: FolderFile
}

interface FContext {
    state: FolderState,
    dispatch: React.Dispatch<FolderAction>
}

export const FolderContext = React.createContext<FContext>(null)

const Folder = ({folder, children}: FolderProps & React.PropsWithChildren) => {

    const [state, dispatch] = useReducer(folderReducer, { isFolderOpen: false })

    return (
        <FolderContext.Provider value={{
            state,
            dispatch
        }}>
            <div className={cn('folder')}
                data-file-type={'folder'}
            >
                <FolderTitle title={folder.name}/>
                <FolderContent>
                    {children}
                </FolderContent>
            </div>
        </FolderContext.Provider>
    );
};

export default Folder;