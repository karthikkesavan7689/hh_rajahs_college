import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import PrincipalMessage from '../components/PrincipalMessage';
import NewsAndEvents from '../components/NewsAndEvents';

const Home = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <main>
            <Hero />
            <div className="reveal">
                <Features />
            </div>
            <div className="reveal">
                <PrincipalMessage />
            </div>
            <div className="reveal">
                <NewsAndEvents />
            </div>
        </main>
    );
};

export default Home;
