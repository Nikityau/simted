import {FolderFile} from "../../folder-field";

export enum CodeFieldActionTypes {
    ADD_FILE = 'code-field/add-file',
    REMOVE_FILE = 'code-field/remove-file',
    CURRENT_FILE = 'code-field/current-file'
}

export interface CodeFieldAction {
    type: CodeFieldActionTypes,
    payload: FolderFile
}

export const addFileAction = (file: FolderFile): CodeFieldAction => {
    return {
        type: CodeFieldActionTypes.ADD_FILE,
        payload: file
    }
}

export const removeFileFolder = (file: FolderFile): CodeFieldAction => {
    return {
        type: CodeFieldActionTypes.REMOVE_FILE,
        payload: file
    }
}

export const currentFileFolder = (file: FolderFile):CodeFieldAction => {
    return {
        type: CodeFieldActionTypes.CURRENT_FILE,
        payload: file
    }
}