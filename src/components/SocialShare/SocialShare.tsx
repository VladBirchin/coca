import React from 'react';
import './SocialShare.css';

const SocialShare: React.FC = () => {
    return (
        <div className="social-share">

            <h3>Share</h3>
            <div className="social-icons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <img src="/icons/facebook.png" alt="Facebook" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <img src="/icons/twitter.png" alt="Twitter" />
                </a>
                <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <img src="/icons/whatsup.png" alt="WhatsApp" />
                </a>
                <a href="https://line.me" target="_blank" rel="noopener noreferrer" aria-label="LINE">
                    <img src="/icons/line.png" alt="LINE" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <img src="/icons/link.png" alt="LinkedIn" />
                </a>
            </div>
        </div>
    );
};

export default SocialShare;
