// components/ProfileIndicator.tsx
import React from "react";
import "./ProfileIndicator.css"

interface ProfileIndicatorProps {
    email: string;
    onLogout: () => void;
}

const ProfileIndicator: React.FC<ProfileIndicatorProps> = ({ email, onLogout }) => {
    const getInitial = (email: string) => {
        return email && email.length > 0 ? email.charAt(0).toUpperCase() : ''; // Перевірка на порожній email
    };

    return (
        <div className="profile-indicator">
            <div className="profile-icon">
                {getInitial(email)}  {/* Виводимо тільки першу літеру */}
            </div>
            <button onClick={onLogout}>Exit</button>
        </div>
    );
};

export default ProfileIndicator;
