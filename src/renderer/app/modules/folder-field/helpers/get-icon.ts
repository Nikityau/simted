import {siJavascript, siCss3} from 'simple-icons'
import type {SimpleIcon} from 'simple-icons'
import {FolderFile} from "../data/folder.data";

export const getIcon = (file: FolderFile): SimpleIcon => {
    switch (file.extension) {
        case '.css':
            return siCss3
        case '.js':
            return siJavascript

        default:
            return siJavascript
    }

}