import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header"
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import './App.scss';

function App() {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/videos/:videoId" element={<HomePage />} />
                <Route path="/upload" element={<UploadPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;