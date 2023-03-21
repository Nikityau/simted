import {FolderActionTypes} from "./actions";

export interface FolderState {
    isFolderOpen: boolean
}

export interface FolderAction {
    type: FolderActionTypes,
    payload: any
}