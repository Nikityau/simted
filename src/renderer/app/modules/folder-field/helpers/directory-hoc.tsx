import React from 'react';
import {nanoid} from "nanoid";

import File from "../components/file/file";
import Folder from "../components/folder/folder";

import {FolderFile} from "../data/folder.data";
import folder from "../components/folder/folder";

type DirectoryHOCProps = {
    data: FolderFile[]
}

const DirectoryHoc = ({data}: DirectoryHOCProps) => {

    function isFile(file: FolderFile | FolderFile[]): file is FolderFile {
        return !('length' in file)
    }

    function isFolderArr(folder: FolderFile | FolderFile[]): folder is FolderFile[] {
        return 'length' in folder
    }

    const make = (node: FolderFile[] | FolderFile): JSX.Element | JSX.Element[] => {
        if (isFile(node)) {
            if (node.type == "file")
                return (
                    <File key={node.id} file={node}/>
                )


            if (node.type == "folder")
                return (
                    <Folder key={node.id} folder={node}>
                        {make(node.inside)}
                    </Folder>
                )
        }


        if(isFolderArr(node)) {
            return node.map(n => (
                <React.Fragment
                    key={nanoid()}
                >
                    {make(n)}
                </React.Fragment>
            ))
        }
    }

    return (
        <>
            {make(data)}
        </>
    );
};

export default DirectoryHoc;