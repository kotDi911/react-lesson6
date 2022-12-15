import React from "react";
import Cards from "./Comments";
import FetchedCards from "./FetchedComments";
import ReduxForm from "./ReduxForm";

const Redux = () => {
    return (
        <>
            <ReduxForm/>
            <div className="flex">
                <Cards/>
                <FetchedCards/>
            </div>
        </>
    )
}

export default Redux