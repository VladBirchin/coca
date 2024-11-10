import React from "react";
import "./ProfileIndicator.css"

interface ProfileIndicatorProps {
    email: string;
    onLogout: () => void;
}

const ProfileIndicator: React.FC<ProfileIndicatorProps> = ({ email, onLogout }) => {
    const getInitial = (email: string) => {
        return email && email.length > 0 ? email.charAt(0).toUpperCase() : '';
    };

    return (
        <div className="profile-indicator">
            <div className="profile-icon">
                {getInitial(email)}
            </div>
            <button onClick={onLogout}>Exit</button>
        </div>
    );
};

export default ProfileIndicator;
