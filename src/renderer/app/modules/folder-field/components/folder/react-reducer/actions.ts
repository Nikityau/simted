import {FolderAction} from "./interface";

export enum FolderActionTypes {
    OPEN_FOLDER = 'folder/open',
    CLOSE_FOLDER = 'folder/close',
    CHANGE_FOLDER_VIS = 'folder/change'
}
export const changeFolderState = (): FolderAction => {
    return {
        type: FolderActionTypes.CHANGE_FOLDER_VIS,
        payload: null
    }
}