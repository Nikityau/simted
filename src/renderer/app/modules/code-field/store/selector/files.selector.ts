import {Store} from "redux";

import {CodeField} from "../reducer";

export const filesSelector = (store: Store) => {
    return (store['codeField'] as CodeField).files_opened
}