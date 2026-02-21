import React from 'react';
import { motion } from 'framer-motion';
import { Eye, ShieldCheck, Laptop, Star } from 'lucide-react';
import './Features.css';

const features = [
    {
        icon: <Eye size={32} />,
        title: "Our Vision",
        desc: "To offer high quality graduation programmes to rural youth especially the first generation graduates and make them competitive in the global connect.",
        color: "#4f46e5"
    },
    {
        icon: <ShieldCheck size={32} />,
        title: "IQAC",
        desc: "Develop a system for conscious, consistent & catalytic improvement in the overall performance of the institution.",
        color: "#06b6d4"
    },
    {
        icon: <Laptop size={32} />,
        title: "Infrastructure",
        desc: "Well defined policies are in place maintaining the campus in every aspect towards quality improvement and excellence.",
        color: "#8b5cf6"
    },
    {
        icon: <Star size={32} />,
        title: "NAAC",
        desc: "Accredited with B+ identifying the quality of institute in terms of education, research, faculty, and infrastructure.",
        color: "#f59e0b"
    }
];

const Features = () => {
    return (
        <section className="features-section">
            <div className="container">
                <div className="section-header">
                    <span className="subtitle">Why Choose Us</span>
                    <h2>Excellence in Every Pillar</h2>
                    <div className="underline"></div>
                </div>

                <div className="features-grid">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="feature-card"
                        >
                            <div className="icon-wrapper" style={{ '--color': f.color }}>
                                {f.icon}
                            </div>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                            <button className="learn-more">Read More »</button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
