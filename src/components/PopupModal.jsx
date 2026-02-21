import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Bell } from 'lucide-react';
import './PopupModal.css';

const PopupModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="modal-overlay">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="modal-content glass"
                    >
                        <button className="close-btn" onClick={() => setIsOpen(false)}>
                            <X size={24} />
                        </button>

                        <div className="modal-header">
                            <Bell className="pulse-icon" size={32} />
                            <h3>Important Announcement</h3>
                        </div>

                        <div className="modal-body">
                            <div className="announcement-card">
                                <h4>IQAC SSR REPORT 2024-25</h4>
                                <p>The Internal Quality Assurance Cell has released the SSR report for the current academic session. All stakeholders are requested to review.</p>
                                <a href="#" className="modal-link btn btn-primary">
                                    View SSR Report <ExternalLink size={16} />
                                </a>
                            </div>

                            <div className="announcement-card secondary">
                                <h4>Online Fees Payment</h4>
                                <p>Pay your college fees securely through the SBI Collect portal.</p>
                                <a href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=801119" target="_blank" className="modal-link">
                                    Visit SBI Collect <ExternalLink size={16} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default PopupModal;
