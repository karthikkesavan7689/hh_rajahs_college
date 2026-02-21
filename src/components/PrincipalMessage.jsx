import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './PrincipalMessage.css';

const PrincipalMessage = () => {
    return (
        <section className="principal-section">
            <div className="container">
                <div className="principal-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="principal-image-side"
                    >
                        <div className="image-frame">
                            <img src="https://hhrc.ac.in/img/rajas.jpg" alt="Principal" />
                            <div className="experience-badge">
                                <span>30+ Years</span>
                                <small>Academic Leadership</small>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="principal-content"
                    >
                        <Quote className="quote-icon" size={48} />
                        <span className="subtitle">Leader's Perspective</span>
                        <h2>Principal’s <span>Message</span></h2>
                        <p className="lead">Education is the basis of all progress. The entire purpose of education is not to restrict itself to imparting bookish knowledge but to inculcate humanitarian values.</p>
                        <p>I firmly believe that growth is not an arrow pointing direction, but a hole that expands and lights up. It is a process of transforming all the students to become academically excellent, emotionally stable and socially responsible, and to become GOOD HUMAN BEINGS.</p>
                        <div className="principal-info">
                            <h4>Dr. C. Thiruchelvam</h4>
                            <span>Principal, H.H. The Rajah’s College</span>
                        </div>
                        <button className="btn btn-primary">Read Full Message</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PrincipalMessage;
