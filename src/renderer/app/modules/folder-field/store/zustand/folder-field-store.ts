import {create} from "zustand";
import {devtools, persist} from "zustand/middleware";

interface Points {
    x: number,
    y: number
}

interface FolderFiledStore {
    isFolderCreateOpen: boolean,
    mousePos: Points
    change: (is:boolean) => any,
    changeMousePos: (pos: Points) => any
}

export const useFolderFieldStore = create<FolderFiledStore>()(
    devtools(
        persist(
            (set) => ({
                isFolderCreateOpen: false,
                mousePos: {
                    x: 0,
                    y: 0
                },
                change: (is: boolean) => set(state => ({ isFolderCreateOpen: is, mousePos: {...state.mousePos} })),
                changeMousePos: (pos: Points) => set(state => ({ mousePos: pos, isFolderCreateOpen: state.isFolderCreateOpen }))
            }),
            {
                name: 'folder-filed-storage'
            }
        )
    )
)