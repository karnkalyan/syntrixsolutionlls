import React from 'react';
import type { PortfolioItem } from '../types';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { X, User, Calendar, Tag } from 'lucide-react';

interface PortfolioDetailModalProps {
    project: PortfolioItem | null;
    onClose: () => void;
}

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

// FIX: Explicitly type `modal` as `Variants` to resolve Framer Motion type inference issue.
const modal: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
        duration: 0.4,
        ease: 'easeInOut'
    }
  },
  exit: { opacity: 0, y: 50, scale: 0.95 }
};


const PortfolioDetailModal: React.FC<PortfolioDetailModalProps> = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={onClose}
                >
                    <motion.div
                        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden"
                        variants={modal}
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                    >
                       <div className="p-4 flex justify-between items-center border-b bg-gray-50">
                            <h2 className="text-2xl font-bold text-[#2B2B2B]">{project.title}</h2>
                            <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-200 transition-colors">
                                <X className="h-6 w-6 text-gray-600" />
                            </button>
                        </div>
                       
                       <div className="flex-grow overflow-y-auto p-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div>
                                    <div className="overflow-hidden rounded-xl shadow-md border border-gray-100 bg-white aspect-[16/9] w-full flex items-center justify-center">
                                        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover rounded-xl" />
                                    </div>
                                     <div className="mt-6 flex flex-wrap gap-2">
                                        {project.technologies.map(tech => (
                                            <span key={tech} className="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <div className="space-y-4 text-gray-700">
                                        <div className="flex items-center">
                                            <User className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                                            <span><strong>Client:</strong> {project.client}</span>
                                        </div>
                                         <div className="flex items-center">
                                            <Calendar className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                                            <span><strong>Date:</strong> {project.date}</span>
                                        </div>
                                         <div className="flex items-center">
                                            <Tag className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                                            <span><strong>Category:</strong> {project.category}</span>
                                        </div>
                                    </div>

                                    {project.metrics && (
                                        <div className="mt-4 p-4 bg-red-50/80 rounded-xl border border-red-100">
                                            <p className="text-xs font-bold text-red-500 uppercase tracking-wider">Key Performance Metrics</p>
                                            <p className="text-sm font-bold text-gray-800 mt-1">{project.metrics}</p>
                                        </div>
                                    )}

                                    <div className="mt-6 border-t pt-6">
                                        <h3 className="font-bold text-lg mb-2 text-[#2B2B2B]">Project Overview</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">{project.description}</p>
                                    </div>
                                </div>
                            </div>
                       </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PortfolioDetailModal;