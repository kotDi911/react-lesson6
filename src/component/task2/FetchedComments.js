import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Comment from "./Comment";
import {fetchCard} from "../../redux/actions";

const FetchedComments = () => {
    const dispatch = useDispatch();
    const comments = useSelector(state => state.comments.fetchedComments);
    const loading = useSelector(state => state.app.loading);

    if (loading){
        return (<div className="f-50 loader">Loading...</div>)
    }

    if (!comments.length) {
        return (
            <div className="f-50">
                <span style={{marginRight: 20+"px"}}>Information undefined</span>
                <button onClick={() => dispatch(fetchCard())}>Load comments</button>
            </div>
        )
    }

    return (
        <div className="f-50">
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    )
}

export default FetchedComments