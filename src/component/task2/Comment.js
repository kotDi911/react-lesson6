import React from "react";

const Comment = ({comment}) => {
    const {name, email, body} = comment
    return(
        <div className="card">
            <div><b>Title:</b><br/>{name}</div>
            <div><b>Email:</b><br/>{email}</div>
            <div><b>Text:</b><br/>{body}</div>
        </div>
    )
}

export default Comment