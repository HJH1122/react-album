import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "@pages/index/index";
import BookmarkPage from "@pages/bookmark/index";
import { RecoilRoot } from "recoil";

function App() {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<MainPage />}></Route>
                    <Route path="/:id" element={<MainPage />}></Route>
                    <Route path="/bookmark" element={<BookmarkPage />}></Route>
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    );
}

export default App;
