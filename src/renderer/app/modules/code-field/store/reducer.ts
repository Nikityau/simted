import produce from "immer";

import {FolderFile} from "../../folder-field";
import {CodeFieldAction, CodeFieldActionTypes} from "./action";

type FileR = FolderFile

export interface CodeField {
    files_opened: FolderFile[],
    file_current: FileR | null
}

const codeField: CodeField = {
    files_opened: [],
    file_current: null
}


function getLast<A>(arr: Array<A>, predicate: (el: A) => boolean) {
    if(predicate(arr[arr.length - 1])) {
        return arr[arr.length - 2]
    }

    return arr[arr.length - 1]
}

export const reducer = (state: CodeField = codeField, action: CodeFieldAction) => {
    switch (action.type) {
        case CodeFieldActionTypes.ADD_FILE:
            return produce(state, draft => {
                if (!draft.files_opened.find(f => f.id == action.payload.id)) {
                    draft.files_opened.push(action.payload)
                }

                draft.file_current = action.payload

                return draft
            })
        case CodeFieldActionTypes.REMOVE_FILE:
            return produce(state, draft => {
                const last = getLast<FolderFile>(state.files_opened, (el) => {
                    if(el.id == action.payload.id) {
                        return true
                    }

                    return false
                })


                draft.files_opened = draft.files_opened.filter(f => f.id != action.payload.id)

                draft.file_current = last

                return draft
            })
        case CodeFieldActionTypes.CURRENT_FILE:
            return produce(state, draft => {
                draft.file_current = action.payload

                return draft
            })
        default:
            return state
    }
}