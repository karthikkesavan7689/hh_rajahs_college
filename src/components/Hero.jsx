import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, History, GraduationCap, Users, Target } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="container">
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="hero-badge">Established since 1857</span>
                        <h1>From Darkness to <span className="highlight">Light</span></h1>
                        <p>Welcome to H.H. The Rajah’s College. Empowering rural youth through excellence in education, research, and innovation for over 160 years.</p>

                        <div className="hero-btns">
                            <button className="btn btn-accent">
                                Admission 2025-26 <ArrowRight size={18} />
                            </button>
                            <button className="btn btn-outline">
                                <PlayCircle size={18} /> Virtual Tour
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="hero-bottom-panel">
                <div className="container">
                    <div className="bottom-grid">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="hero-news-box"
                        >
                            <div className="card-badge">Latest News</div>
                            <h3>UG Admission Rank List Published</h3>
                            <p>The merit list for various departments is now available.</p>
                            <a href="#" className="read-more">View All News <ArrowRight size={14} /></a>
                        </motion.div>

                        <div className="hero-stats-group">
                            <div className="stat-card">
                                <History size={24} />
                                <div className="stat-data">
                                    <h4>165+</h4>
                                    <span>Years</span>
                                </div>
                            </div>
                            <div className="stat-card">
                                <GraduationCap size={24} />
                                <div className="stat-data">
                                    <h4>20+</h4>
                                    <span>Programs</span>
                                </div>
                            </div>
                            <div className="stat-card">
                                <Users size={24} />
                                <div className="stat-data">
                                    <h4>5000+</h4>
                                    <span>Students</span>
                                </div>
                            </div>
                            <div className="stat-card">
                                <Target size={24} />
                                <div className="stat-data">
                                    <h4>100%</h4>
                                    <span>Rural</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
