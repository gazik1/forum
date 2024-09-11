import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { PATH } from "./constant/roote";
import  Layout  from "./pages/layout/layout/layout";
import  Test  from "./pages/test/test";
import  Posts from "./pages/posts/posts";
import Post from "./pages/post/post";
import Users from "./pages/users/users";
import Profile from "./pages/profile/profile";
export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>

     <Route path={PATH.MAIN.MAIN} element={<Layout/>}>

        <Route path={PATH.MAIN.POSTS.POSTS} element={<Posts/>} />
        <Route path={PATH.MAIN.POSTS.POST} element={<Post/>} />
        <Route path={PATH.MAIN.USERS.USERS} element={<Users />} /> 
        <Route path={PATH.MAIN.USERS.PROFILE} element={<Profile />} /> 

      </Route>

      <Route path={PATH.TEST}  element={<Test />}/>
       </Route>
    )
  );