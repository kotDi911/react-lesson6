import React from "react";
import {connect} from "react-redux";
import Comment from "./Comment"

const Comments = ({comments}) => {
    if (!comments.length) {
        return <span className="f-50" style={{textAlign: "center"}}>Information undefined</span>
    }

    return (
        <div className="f-50">
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments.comments
    }
}

export default connect(mapStateToProps, null)(Comments)