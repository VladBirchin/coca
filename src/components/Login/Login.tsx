import React, { useState } from "react";
import "./Login.css"; // додайте цей файл для стилів

interface LoginProps {
    onLogin: (email: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isOpen, setIsOpen] = useState(false); // стан для відкриття модального вікна

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (email && password) {
            onLogin(email, password);
            setIsOpen(false); // Закрити модальне вікно після успішного входу
        }
    };

    const toggleModal = () => {
        setIsOpen(!isOpen); // перемикання відкриття модального вікна
    };

    return (
        <div className="login">
            <button onClick={toggleModal}>Sign In</button>
            {isOpen && (
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
            )}
        </div>
    );
};

export default Login;
