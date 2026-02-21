import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, ExternalLink } from 'lucide-react';
import './Footer.css';

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
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Academics</a></li>
                            <li><a href="#">Research</a></li>
                            <li><a href="#">Examinations</a></li>
                            <li><a href="#">Contact Us</a></li>
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
