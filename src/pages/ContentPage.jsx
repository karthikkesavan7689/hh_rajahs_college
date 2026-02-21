import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pagesContent } from '../data/pagesContent';
import './ContentPage.css';

const ContentPage = () => {
    const { slug } = useParams();
    const pageData = pagesContent[slug] || { title: "Page Not Found", content: "<p>The requested page could not be found.</p>" };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    return (
        <motion.div
            className="content-page"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="content-header">
                <div className="container">
                    <nav className="breadcrumb">
                        <Link to="/">Home</Link> / <span>{pageData.title}</span>
                    </nav>
                    <h1>{pageData.title}</h1>
                </div>
            </div>

            <div className="container">
                <div className="content-body shadow-lg">
                    <div dangerouslySetInnerHTML={{ __html: pageData.content }} />
                </div>
            </div>
        </motion.div>
    );
};

export default ContentPage;
