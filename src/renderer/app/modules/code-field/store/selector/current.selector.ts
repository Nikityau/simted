import {Store} from "redux";

import {CodeField} from "../reducer";

import {FolderFile} from "../../../folder-field";

export const currentSelector = (store: Store): FolderFile => {
    return (store['codeField'] as CodeField).file_current
}