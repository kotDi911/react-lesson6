import {CREATE_COMMENT, FETCHED_COMMENT, HIDE_LOADER, SHOW_LOADER} from "./types";

export function commentCreate(comment) {
    return {
        type: CREATE_COMMENT,
        payload: comment,
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER,
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER,
    }
}

export function fetchCard() {
    return async (dispatch) => {
        dispatch(showLoader());
        const response = await fetch("https://jsonplaceholder.typicode.com/comments?_limit=5");
        const json = await response.json();

        setTimeout(()=>{
            dispatch({type: FETCHED_COMMENT, payload: json});
            dispatch(hideLoader());
        },1500)
    }
}