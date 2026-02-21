import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Bell } from 'lucide-react';
import './NewsAndEvents.css';

const newsItems = [
    { date: '10 Jun 2025', title: 'Tourism & Travel Management Merit List 2025-26', link: '#' },
    { date: '06 Jun 2025', title: 'Physical Education Admission Rank List 2025-26', link: '#' },
    { date: '31 May 2025', title: 'Zoology TM/EM Merit List Out Now', link: '#' },
    { date: '31 May 2025', title: 'Physics & Maths Merit List 2025-26', link: '#' },
    { date: '30 May 2025', title: 'BBA & Commerce Shift 1 & 2 Rank Lists', link: '#' }
];

const NewsAndEvents = () => {
    return (
        <section className="news-section">
            <div className="container">
                <div className="news-layout">
                    <div className="news-header">
                        <Bell className="bell-icon" />
                        <h2>News & <span>Updates</span></h2>
                        <p>Stay updated with our latest announcements and campus events.</p>
                        <button className="view-btn">Full Archive <ArrowRight size={16} /></button>
                    </div>

                    <div className="news-list">
                        {newsItems.map((news, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="news-card"
                            >
                                <div className="date-box">
                                    <Calendar size={18} />
                                    <span>{news.date}</span>
                                </div>
                                <div className="news-info">
                                    <h4>{news.title}</h4>
                                    <a href={news.link} className="download-link">Download PDF <ArrowRight size={14} /></a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsAndEvents;
