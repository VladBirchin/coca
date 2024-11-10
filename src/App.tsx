import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostList from "./pages/PostList/PostList";
import PostDetail from "./pages/PostDetail/PostDetail";
import Header from "./components/Header/Header";
import { useAuth } from "./hooks/useAuth";
import "./App.css"
import Footer from "./components/Footer/Footer";
import Blog from "./pages/Blog/Blog";


const App: React.FC = () => {
    const { isLoggedIn, userEmail, login, logout } = useAuth();

    return (
        <Router>
            <Header isLoggedIn={isLoggedIn} userEmail={userEmail} onLogin={login} onLogout={logout} />
            <Routes>
                <Route path="/" element={
                    <>
                        <Blog />
                        <PostList />

                    </>
                } />
                <Route path="/" element={<PostList />} />
                <Route path="/post/:id" element={<PostDetail />} />
            </Routes>
            <Footer/>
        </Router>
    );
};

export default App;
