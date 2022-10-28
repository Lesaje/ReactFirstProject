import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useNavigate, Navigate} from "react-router-dom"

const PostItem = (props) => {
    const navigate = useNavigate()

    return (
        <div className="post">
            <div className="post__content">
                <strong> {props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div>
                <div className="post__btns">
                    <MyButton onClick = {() => props.remove(props.post)}> Delete </MyButton>
                    <MyButton onClick = {() => navigate("" + props.post.id)}> Open </MyButton>
                </div>
            </div>
        </div>
    );
};

export default PostItem;