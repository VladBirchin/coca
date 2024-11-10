import React from 'react';
import "./Footer.css"


function Footer() {
    return (
        <div className="footer">
            <div className="title_part">
                <div className="logo">
                    <img src={"/img/mini_logo.png"} alt="logo" />
                </div>
                <div className="button">
                    <div className="button_title">
                        Ready to get started?
                    </div>
                    <button>
                        Get Started
                    </button>
                </div>
            </div>
            <div className="content_part">
                <div className="subscribe">
                    <div className="subscribe_title">
                        Subscribe to our
                        newsletter
                    </div>
                    <div className="subscribe_content">
                        <input placeholder="Email adress"/>
                        <button>
                            <img src="/img/path.png" alt="path"/>
                        </button>
                    </div>
                </div>
                <div className="info">
                    <div className="info_title">
                        Services
                    </div>
                    <div className="info_element">
                        Email Marketing
                    </div>
                    <div className="info_element">
                        Campaigns
                    </div>
                    <div className="info_element">
                        Branding
                    </div>
                    <div className="info_element">
                        Offline
                    </div>
                </div>
                <div className="info">
                    <div className="info_title">
                        About
                    </div>
                    <div className="info_element">
                        Our Story
                    </div>
                    <div className="info_element">
                        Benefits
                    </div>
                    <div className="info_element">
                        Team
                    </div>
                    <div className="info_element">
                        Careers
                    </div>
                </div>
                <div className="info">
                    <div className="info_title">
                        Help
                    </div>
                    <div className="info_element">
                        FAQs
                    </div>
                    <div className="info_element">
                        Contact Us
                    </div>
                </div>
            </div>
            <div className="ink_part">
                <p>©2022 - Coca by Sans Design</p>
                <div className="media">
                    <img src="/img/facebook.png" alt="facebook"/>
                    <img src="/img/twitter.png" alt="twitter"/>
                    <img src="/img/instagram.png" alt="instagram"/>

                </div>
            </div>

        </div>
    );
}

export default Footer;