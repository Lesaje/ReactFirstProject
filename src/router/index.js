import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import {ABOUT_ROUTE, DEFAULT, LOGIN, POSTS_COMMENTS_ROUTE, POSTS_ROUTE} from "../utils/consts";
import Login from "../pages/Login";

export const privateRoutes = [
    {path: ABOUT_ROUTE, Component: About},
    {path: POSTS_ROUTE, Component: Posts},
    {
        path: POSTS_COMMENTS_ROUTE,
        Component: PostIdPage
    },
    {
        path: DEFAULT,
        Component: Error
    }
]

export const publicRoutes = [
    {path: LOGIN, Component: Login}
]