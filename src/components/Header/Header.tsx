import React from 'react';
import Login from './Login/Login'; // Імпортуємо компонент Login
import ProfileIndicator from './ProfileIndicator'; // Імпортуємо ProfileIndicator
import { Link } from 'react-router-dom'; // Імпортуємо Link
import './Header.css';

interface HeaderProps {
    isLoggedIn: boolean;
    userEmail: string | null;
    onLogin: (email: string, password: string) => void;
    onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, userEmail, onLogin, onLogout }) => {
    return (
        <div className="header">
            <div className="logo">

                <Link to="/">
                    <img src="/img/logo.png" alt="Logo" />
                </Link>
            </div>
            <div className="profile-info">
                {isLoggedIn ? (
                    <ProfileIndicator email={userEmail || ''} onLogout={onLogout} />
                ) : (
                    <Login onLogin={onLogin} />
                )}
                <img src="/img/menu.png" alt="menu" />
            </div>
        </div>
    );
}

export default Header;
