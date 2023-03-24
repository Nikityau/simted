import {nanoid} from "nanoid";


export interface FolderFile {
    id: string,
    type: 'file' | 'folder',
    name: string,
    extension: string | null,
    full_name: string
    inside: null | Array<FolderFile>
}

export interface FolderData {
    directory: FolderFile[]
}

const FolderFileData: FolderFile[] = [
    {
        id: nanoid(),
        type: 'file',
        name: 'index.js',
        extension: '.js',
        full_name: 'index.js',
        inside: null
    },
    {
        id: nanoid(),
        type: 'folder',
        name: 'app',
        extension: null,
        full_name: 'app',
        inside: [
            {
                id: nanoid(),
                type: 'file',
                name: 'index.js',
                full_name: 'app/index.js',
                extension: '.js',
                inside: null,
            },
            {
                id: nanoid(),
                type: 'folder',
                name: 'app',
                extension: null,
                full_name: 'app',
                inside: [
                    {
                        id: nanoid(),
                        type: 'file',
                        name: 'index.js',
                        full_name: 'app/app/index.js',
                        extension: '.js',
                        inside: null,
                    },
                ]
            }
        ]
    },
    {
        id: nanoid(),
        type: 'folder',
        name: 'style',
        extension: null,
        full_name: 'style',
        inside: [
            {
                id: nanoid(),
                type: 'file',
                name: 'global.css',
                extension: '.css',
                full_name: 'style/global.css',
                inside: null
            }
        ]
    }
]

export const folderData: FolderData = {
    directory: FolderFileData
}



