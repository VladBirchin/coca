import React, { useState, useMemo } from "react";
import "./Login.css";

interface LoginProps {
    onLogin: (email: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (email && password) {
            onLogin(email, password);
            setIsOpen(false);
        }
    };

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };


    const modalContent = useMemo(() => {
        if (!isOpen) return null;

        return (
            <div className="overlay" onClick={toggleModal}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <h2>Sign In</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <div className="button-container">
                            <button type="submit">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }, [isOpen, email, password]);

    return (
        <div className="login">
            <button onClick={toggleModal}>Sign In</button>
            {modalContent}
        </div>
    );
};

export default Login;
