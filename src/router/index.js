import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import {ABOUT_ROUTE, DEFAULT, LOGIN, POSTS_COMMENTS_ROUTE, POSTS_ROUTE} from "../utils/consts";
import Login from "../pages/Login";

export const privateRoutes = [
    {path: ABOUT_ROUTE, component: <About/>},
    {path: POSTS_ROUTE, component: <Posts/>},
    {path: POSTS_COMMENTS_ROUTE, component: <PostIdPage/>},
    {path: LOGIN, component: <Posts/>},
    {path: DEFAULT, component: <Error/>}
]

export const publicRoutes = [
    {path: LOGIN, component: <Login/>},
    {path: DEFAULT, component: <Login/>}
]