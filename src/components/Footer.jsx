import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, ExternalLink } from 'lucide-react';
import './Footer.css';

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="brand-logo">
                            <img src="https://hhrc.ac.in/img/logo.jpg" alt="Logo" />
                            <h3>H.H The Rajah’s College</h3>
                        </div>
                        <p>Empowering the rural youth with quality education and moral values since 1857. An autonomous government institution committed to excellence.</p>
                        <div className="social-links">
                            <a href="#" className="social-icon"><Facebook size={20} /></a>
                            <a href="#" className="social-icon"><Twitter size={20} /></a>
                            <a href="#" className="social-icon"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/page/institutional-profile">About Us</Link></li>
                            <li><Link to="/page/departments">Academics</Link></li>
                            <li><Link to="/page/research">Research</Link></li>
                            <li><Link to="/page/calendar">Examinations</Link></li>
                            <li><Link to="/page/address">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Contact Info</h4>
                        <ul>
                            <li><MapPin size={20} /> Madurai Road, Pudukkottai - 622 001</li>
                            <li><Phone size={20} /> 04322 - 221558</li>
                            <li><Mail size={20} /> hhrajahscollege@gmail.com</li>
                        </ul>
                    </div>

                    <div className="footer-newsletter">
                        <h4>External Portals</h4>
                        <div className="portal-grid">
                            <a href="#" className="portal-link">Bharathidasan University <ExternalLink size={14} /></a>
                            <a href="#" className="portal-link">UGC India <ExternalLink size={14} /></a>
                            <a href="#" className="portal-link">TNDTE <ExternalLink size={14} /></a>
                            <a href="#" className="portal-link">NIRF <ExternalLink size={14} /></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2024 H.H. The Rajah’s College. All Rights Reserved.</p>
                    <p>Developed by <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>karthikkesavan S</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
