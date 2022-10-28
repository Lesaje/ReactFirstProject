import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetching";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const r = await PostService.getById(params.id)
        setPost(r.data)
    })
    const [fetchComments, isCmLoading, cmError] = useFetching(async (id) => {
        const r = await PostService.getCommentsByPostId(params.id)
        setComments(r.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])


    return (
        <div>
            <h1> Post Page {params.id}</h1>
                {isLoading === true
                    ? <Loader/>
                    : <h2>{post.id}. {post.title}</h2>
                }
            <h1>Comments</h1>
                {isCmLoading === true
                    ? <Loader/>
                    :
                    <div>
                        {comments.map(comm =>
                            <div style={{marginTop: 10}}>
                                <h4>{comm.email}</h4>
                                <div>{comm.body}</div>
                            </div>
                        )}
                    </div>}
        </div>
    );
};

export default PostIdPage;