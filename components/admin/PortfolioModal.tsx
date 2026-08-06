import React, { useState, useEffect } from 'react';
import type { PortfolioItem } from '../../types';
import { useSiteData } from '../../context/SiteDataContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface PortfolioModalProps {
    isOpen: boolean;
    onClose: () => void;
    item: PortfolioItem | null;
}

const initialItemState: Omit<PortfolioItem, 'id'> = {
    title: '',
    category: 'Web',
    imageUrl: '',
    client: '',
    date: new Date().toISOString().split('T')[0],
    description: '',
    technologies: [],
};

const PortfolioModal: React.FC<PortfolioModalProps> = ({ isOpen, onClose, item }) => {
    const { addPortfolioItem, updatePortfolioItem, portfolioItems } = useSiteData();
    const [formData, setFormData] = useState<Omit<PortfolioItem, 'id'>>(initialItemState);
    const [techInput, setTechInput] = useState('');

    const uniqueCategories = [...new Set(portfolioItems.map(item => item.category))];

    useEffect(() => {
        if (item) {
            setFormData({ ...item, technologies: item.technologies || [] });
        } else {
            setFormData(initialItemState);
        }
    }, [item, isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleTechChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTechInput(e.target.value);
    };
    
    // Add technology on comma or enter
    const handleTechKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === ',' || e.key === 'Enter') {
            e.preventDefault();
            const newTech = techInput.trim();
            if (newTech && !formData.technologies.includes(newTech)) {
                setFormData(prev => ({...prev, technologies: [...prev.technologies, newTech]}));
            }
            setTechInput('');
        }
    };

    const removeTech = (techToRemove: string) => {
        setFormData(prev => ({...prev, technologies: prev.technologies.filter(t => t !== techToRemove)}));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (item) {
            updatePortfolioItem(item.id, formData as PortfolioItem);
        } else {
            addPortfolioItem(formData);
        }
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden"
                        initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
                        onClick={e => e.stopPropagation()}
                    >
                        <form onSubmit={handleSubmit} className="flex flex-col h-full">
                            <div className="p-6 border-b flex justify-between items-center flex-shrink-0">
                                <h2 className="text-xl font-bold text-gray-800">{item ? 'Edit Project' : 'Add New Project'}</h2>
                                <button type="button" onClick={onClose} className="p-1 rounded-full hover:bg-gray-100"><X /></button>
                            </div>
                            <div className="p-6 space-y-4 overflow-y-auto flex-grow">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="font-semibold text-sm text-gray-700 block mb-1">Title</label>
                                        <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full p-2 bg-white border border-gray-300 rounded text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500" required />
                                    </div>
                                    <div>
                                        <label className="font-semibold text-sm text-gray-700 block mb-1">Category (type to create new)</label>
                                        <input 
                                            type="text" 
                                            name="category"
                                            list="category-suggestions"
                                            value={formData.category} 
                                            onChange={handleChange} 
                                            className="w-full p-2 bg-white border border-gray-300 rounded text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500" 
                                            required 
                                        />
                                        <datalist id="category-suggestions">
                                            {uniqueCategories.map(cat => <option key={cat} value={cat} />)}
                                        </datalist>
                                    </div>
                                </div>
                                 <div>
                                    <label className="font-semibold text-sm text-gray-700 block mb-1">Image URL</label>
                                    <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} className="w-full p-2 bg-white border border-gray-300 rounded text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500" required />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="font-semibold text-sm text-gray-700 block mb-1">Client</label>
                                        <input type="text" name="client" value={formData.client} onChange={handleChange} className="w-full p-2 bg-white border border-gray-300 rounded text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500" required />
                                    </div>
                                    <div>
                                        <label className="font-semibold text-sm text-gray-700 block mb-1">Date</label>
                                        <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-2 bg-white border border-gray-300 rounded text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500" required />
                                    </div>
                                </div>
                                <div>
                                    <label className="font-semibold text-sm text-gray-700 block mb-1">Description</label>
                                    <textarea name="description" value={formData.description} onChange={handleChange} rows={3} className="w-full p-2 bg-white border border-gray-300 rounded text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500" required />
                                </div>
                                <div>
                                    <label className="font-semibold text-sm text-gray-700 block mb-1">Technologies (comma-separated)</label>
                                    <div className="flex flex-wrap items-center gap-2 p-2 bg-white border border-gray-300 rounded">
                                        {formData.technologies.map(tech => (
                                            <span key={tech} className="bg-red-100 text-red-800 text-sm font-medium px-2.5 py-1 rounded-full flex items-center">
                                                {tech}
                                                <button type="button" onClick={() => removeTech(tech)} className="ml-2 text-red-800 hover:text-red-900">&times;</button>
                                            </span>
                                        ))}
                                        <input 
                                            type="text" 
                                            value={techInput}
                                            onChange={handleTechChange}
                                            onKeyDown={handleTechKeyDown}
                                            className="flex-grow p-1 bg-transparent focus:outline-none text-gray-900 placeholder-gray-400"
                                            placeholder="Add tech..."
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 bg-gray-50 border-t flex justify-end space-x-3 flex-shrink-0">
                                <button type="button" onClick={onClose} className="bg-gray-200 text-gray-800 font-semibold text-sm py-2 px-4 rounded-lg hover:bg-gray-300">Cancel</button>
                                <button type="submit" className="bg-red-500 text-white font-semibold text-sm py-2 px-4 rounded-lg hover:bg-red-600">Save Project</button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PortfolioModal;