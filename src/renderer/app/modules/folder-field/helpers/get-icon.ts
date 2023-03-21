import { siJavascript, siCss3 } from 'simple-icons'
import type { SimpleIcon } from 'simple-icons'

const getExt = (file: string) => {
    const pointIndex = file.lastIndexOf('.')
    const ext = file.substring(pointIndex + 1)

    return ext
}

export const getIcon = (file: string): SimpleIcon => {
    switch (getExt(file)) {
        case 'css':
            return siCss3
        case 'js':
            return siJavascript

        default:
            return siJavascript
    }

}