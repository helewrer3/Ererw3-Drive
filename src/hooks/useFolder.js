import { useEffect, useReducer } from "react";
import { useAuth } from "../contexts/AuthContext";
import { database } from "../firebase";

const ACTIONS = {
    SELECT_FOLDER: 'select-folder',
    UPDATE_FOLDER: 'update-folder',
    SET_CHILD_FOLDERS: 'set-child-folders',
    SET_CHILD_FILES: 'set-child-files',
}
const USER_ID = "userID", PARENT_ID = "parentID", FOLDER_ID = "folderID";
export const ROOT_FOLDER = {name: 'root', id: null, path: []}

const reducer = (state, {type, payload}) => {
    switch (type) {
        case ACTIONS.SELECT_FOLDER:
            return {childFiles: [], childFolders: [], folder: payload.folder, folderId: payload.folderId};
        case ACTIONS.UPDATE_FOLDER:
            return {...state, folder: payload.folder};
        case ACTIONS.SET_CHILD_FOLDERS:
            return {...state, childFolders: payload.childFolders};
        case ACTIONS.SET_CHILD_FILES:
            return {...state, childFiles: payload.childFiles};
        default:
            return state;
    }
}

const useFolder = (folderId = null, folder = null) => {
    const {currentUser} = useAuth();
    const [state, dispatch] = useReducer(reducer, {
        folderId,
        folder,
        childFolders: [],
        childFiles: []
    });

    useEffect(() => {
        if(folderId == null) dispatch({type: ACTIONS.UPDATE_FOLDER, payload: {folder: ROOT_FOLDER}});
        else database.folders.doc(folderId).get().then((doc) => {
            dispatch({type: ACTIONS.UPDATE_FOLDER, payload: {folder: database.formatDoc(doc)}});
        }).catch(() => {
            dispatch({type: ACTIONS.UPDATE_FOLDER, payload: {folder: ROOT_FOLDER}});
        })
    }, [folderId])

    useEffect(() => {
        const cleanup = database.folders.where(PARENT_ID, "==",  folderId).where(USER_ID, "==", currentUser.uid).onSnapshot((snapshot) => {
            dispatch({
                type: ACTIONS.SET_CHILD_FOLDERS, 
                payload: {childFolders: snapshot.docs.map(database.formatDoc)}
            })
        });
        return () => cleanup()
    }, [folderId, currentUser])

    useEffect(() => {
        const cleanup = database.files.where(FOLDER_ID, "==",  folderId).where(USER_ID, "==", currentUser.uid).onSnapshot((snapshot) => {
            dispatch({
                type: ACTIONS.SET_CHILD_FILES, 
                payload: {childFiles: snapshot.docs.map(database.formatDoc)}
            })
        });
        return () => cleanup()
    }, [folderId, currentUser])

    return state;
}

export {useFolder};
