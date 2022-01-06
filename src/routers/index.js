import { Routes, Route } from "react-router-dom";
import ListPost from "../pages/listPost";
import DetailPost from "../pages/detailPost";
import UserProfile from "../pages/userDetail";

export default function Routers() {
    return(
        <Routes>
            <Route path="/post" element={<ListPost/>} />
            <Route path="/post/:idBaru" element={<DetailPost/>} />
            <Route path="/profile/:idBaru" element={<UserProfile/>} />
        </Routes>
    )
}