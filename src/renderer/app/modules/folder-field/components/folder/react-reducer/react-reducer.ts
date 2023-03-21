import produce from "immer";

import {FolderAction, FolderState} from "./interface";

import {FolderActionTypes} from "./actions";

export const folderReducer = (state: FolderState, action: FolderAction) => {
    switch (action.type) {
        case FolderActionTypes.CLOSE_FOLDER:
            return produce(state, draft => {
                draft.isFolderOpen = false

                return draft
            })
        case FolderActionTypes.OPEN_FOLDER:
            return produce(state, draft => {
                draft.isFolderOpen = true

                return draft
            })
        case FolderActionTypes.CHANGE_FOLDER_VIS:
            return produce(state, draft => {
                draft.isFolderOpen = !draft.isFolderOpen

                return draft
            })
        default:
            return state
    }
}