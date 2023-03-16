import React from 'react';
import {nanoid} from "nanoid";

import File from "../components/file/file";
import Folder from "../components/folder/folder";

type DirectoryHOCProps = {
    data: any[]
}

const DirectoryHoc = ({data}: DirectoryHOCProps) => {

    const make = (node): JSX.Element => {
        if (node.type == "file")
            return (
                <File key={nanoid()} title={node.title}/>
            )


        if (node.type == "folder")
            return (
                <Folder key={nanoid()} title={node.title}>
                    {make(node.inside)}
                </Folder>
            )


        return node.map(n => (
            <React.Fragment
                key={nanoid()}
            >
                {make(n)}
            </React.Fragment>
        ))
    }

    return (
        <>
            {make(data)}
        </>
    );
};

export default DirectoryHoc;