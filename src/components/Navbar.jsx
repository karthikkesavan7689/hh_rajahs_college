import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, Home, Info, Bell, Shield, MapPin, MessageSquare, Coffee, GraduationCap as AcademicIcon } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { title: 'Home', icon: <Home size={18} />, path: '/' },
        {
            title: 'About us',
            icon: <Info size={18} />,
            submenu: [
                { title: 'Vision & Mission', path: '/page/vision-mission' },
                { title: 'Institutional Profile', path: '/page/institutional-profile' },
                { title: 'Institutional Distinctiveness', path: '/page/institutional-distinctiveness' },
                { title: 'Principal’s Message', path: '/page/principals-message' },
                { title: 'Leadership', path: '/page/leadership' },
                { title: 'Organogram', path: '/page/organogram' }
            ]
        },
        {
            title: 'Academics',
            icon: <AcademicIcon size={18} />,
            submenu: [
                { title: 'Departments', path: '/page/departments' },
                { title: 'Curriculum', path: '/page/curriculum' },
                { title: 'Academic Calendar', path: '/page/calendar' },
                { title: 'CoE Office', path: '/page/coe-office' },
                { title: 'NPTEL / SWAYAM', path: '/page/nptel-swayam' },
                { title: 'ICT & E-Resources', path: '/page/ict-resources' }
            ]
        },
        {
            title: 'Campus Life',
            icon: <Coffee size={18} />,
            submenu: [
                { title: 'Library', path: '/page/library' },
                { title: 'Hostel', path: '/page/hostel' },
                { title: 'Gym', path: '/page/gym' },
                { title: 'Transport', path: '/page/transport' },
                { title: 'Gallery', path: '/page/gallery' }
            ]
        },
        {
            title: 'Updates',
            icon: <Bell size={18} />,
            submenu: [
                { title: 'Announcements', path: '/page/announcements' },
                { title: 'News & Events', path: '/page/news-events' },
                { title: 'Rank Holders', path: '/page/rank-holders' },
                { title: 'Examination Results', path: '/page/results-portal' },
                { title: 'Job Application', path: '/page/job-application' }
            ]
        },
        {
            title: 'Clubs & Cells',
            icon: <Shield size={18} />,
            submenu: [
                { title: 'Anti Dowry Club', path: '/page/anti-dowry' },
                { title: 'Child Rights Club', path: '/page/child-rights' },
                { title: 'Red Ribbon Club', path: '/page/rrc' },
                { title: 'Eco-Club', path: '/page/eco-club' },
                { title: 'NCC (Army Wing)', path: '/page/ncc' },
                { title: 'Curriculum Committee', path: '/page/curriculum-committee' },
                { title: 'Anti Ragging Committee', path: '/page/anti-ragging' },
                { title: 'Students Welfare Committee', path: '/page/students-welfare' },
                { title: 'Grievance Redressal Cell', path: '/page/grievance' },
                { title: 'Research Committee', path: '/page/research' }
            ]
        },
        {
            title: 'Contact',
            icon: <MapPin size={18} />,
            submenu: [
                { title: 'Campus Address', path: '/page/address' },
                { title: 'Contact Numbers', path: '/page/contact-numbers' },
                { title: 'Email Support', path: '/page/email-support' },
                { title: 'Find Us on Map', path: '/page/map' }
            ]
        },
        {
            title: 'Feedback',
            icon: <MessageSquare size={18} />,
            submenu: [
                { title: 'Parent Feedback', path: '/page/parent-feedback' },
                { title: 'Alumni Feedback', path: '/page/alumni-feedback' },
                { title: 'Student Feedback', path: '/page/student-feedback' }
            ]
        }
    ];

    return (
        <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
            <div className="top-bar">
                <div className="container">
                    <div className="contact-info">
                        <span><Phone size={14} /> 04322-230490</span>
                        <span className="separator">|</span>
                        <span><Mail size={14} /> hhrajahscollege@gmail.com</span>
                    </div>
                    <div className="quick-links">
                        <a href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=801119" target="_blank" className="fees-btn">Online Fees Payment</a>
                    </div>
                </div>
            </div>

            <nav className="main-nav">
                <div className="container">
                    <div className="logo-section">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="logo-container"
                        >
                            <img src="https://hhrc.ac.in/img/logo.jpg" alt="College Logo" className="logo-img" />
                            <div className="college-name">
                                <motion.h2
                                    initial="hidden"
                                    animate="visible"
                                    variants={{
                                        visible: { transition: { staggerChildren: 0.1 } }
                                    }}
                                >
                                    {["H.H. THE RAJAH'S", "COLLEGE"].map((line, i) => (
                                        <motion.span
                                            key={line}
                                            style={{ display: 'block' }}
                                            variants={{
                                                hidden: { opacity: 0, x: -10, filter: 'blur(5px)' },
                                                visible: { opacity: 1, x: 0, filter: 'blur(0px)' }
                                            }}
                                            transition={{ duration: 0.5, delay: i * 0.1 }}
                                        >
                                            {line}
                                        </motion.span>
                                    ))}
                                </motion.h2>
                                <motion.div
                                    className="accreditation"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1, duration: 1 }}
                                >
                                    <span>(Autonomous Accredited B+)</span>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="menu-desktop">
                        {menuItems.map((item, index) => (
                            <div
                                key={item.title}
                                className="nav-item"
                                onMouseEnter={() => setActiveDropdown(index)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                {item.path ? (
                                    <Link to={item.path} className="nav-link">
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                ) : (
                                    <span className="nav-link">
                                        {item.icon}
                                        <span>{item.title}</span>
                                        <ChevronDown size={14} className={`chevron-down ${activeDropdown === index ? 'rotate' : ''}`} />
                                    </span>
                                )}

                                <AnimatePresence>
                                    {item.submenu && activeDropdown === index && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="dropdown-menu"
                                        >
                                            {item.submenu.map((sub) => (
                                                <Link key={sub.title} to={sub.path} className="dropdown-item">
                                                    {sub.title}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mobile-menu"
                    >
                        {menuItems.map((item) => (
                            <div key={item.title} className="mobile-item">
                                {item.path ? (
                                    <Link to={item.path} className="mobile-link" onClick={() => setIsOpen(false)}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                ) : (
                                    <>
                                        <div className="mobile-link">
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </div>
                                        <div className="mobile-submenu">
                                            {item.submenu.map((sub) => (
                                                <Link
                                                    key={sub.title}
                                                    to={sub.path}
                                                    className="mobile-sublink"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {sub.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
