import React from "react";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="error-container">
            <div className="error-404">
                <span>4</span>
                <img src="https://www.transparentpng.com/thumb/smile/gGsgum-emoji-feliz-png-emoticon-smile-clipart-full-size.png"></img>
                <span>4</span>
            </div>
            <div className="description-404">Couldn't find this page</div>
            <button type="button" class="slide">
                <div>
                    <NavLink className="back-404" to="/">Back</NavLink>
                </div>
                <i className="icon-arrow-right"></i>
            </button>
        </div>
    )
}
export default NotFoundPage;