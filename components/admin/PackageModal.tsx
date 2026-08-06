import React, { useState, useEffect } from 'react';
import type { Package } from '../../types';
import { useSiteData } from '../../context/SiteDataContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, TrendingUp, Headset, ShoppingCart, Code, GitMerge, Cloud } from 'lucide-react';

interface PackageModalProps {
    isOpen: boolean;
    onClose: () => void;
    pkg: Package | null;
}

const icons = { TrendingUp, Headset, ShoppingCart, Code, GitMerge, Cloud };
const iconNames = Object.keys(icons) as (keyof typeof icons)[];

const initialPackageState: Package = {
    icon: TrendingUp,
    title: '',
    description: '',
    features: [],
    price: 0,
    period: 'mo',
};

const PackageModal: React.FC<PackageModalProps> = ({ isOpen, onClose, pkg }) => {
    const { addPackage, updatePackage } = useSiteData();
    const [formData, setFormData] = useState<Package>(initialPackageState);
    const [featuresInput, setFeaturesInput] = useState('');

    useEffect(() => {
        if (pkg) {
            setFormData(pkg);
            setFeaturesInput(pkg.features.join(', '));
        } else {
            setFormData(initialPackageState);
            setFeaturesInput('');
        }
    }, [pkg, isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: name === 'price' ? Number(value) : value }));
    };

    const handleFeaturesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFeaturesInput(e.target.value);
        setFormData(prev => ({ ...prev, features: e.target.value.split(',').map(f => f.trim()) }));
    };
    
    const handleIconChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.target;
      setFormData(prev => ({ ...prev, icon: icons[value as keyof typeof icons] }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (pkg) {
            updatePackage(pkg.title, formData);
        } else {
            addPackage(formData);
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
                                <h2 className="text-xl font-bold text-gray-800">{pkg ? 'Edit Package' : 'Add New Package'}</h2>
                                <button type="button" onClick={onClose} className="p-1 rounded-full hover:bg-gray-100"><X /></button>
                            </div>
                            <div className="p-6 space-y-4 overflow-y-auto flex-grow">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="font-semibold text-sm text-gray-700 block mb-1">Title</label>
                                        <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full p-2 bg-white border border-gray-300 rounded text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500" required />
                                    </div>
                                    <div>
                                        <label className="font-semibold text-sm text-gray-700 block mb-1">Icon</label>
                                        <select onChange={handleIconChange} className="w-full p-2 bg-white border border-gray-300 rounded text-gray-900 focus:ring-2 focus:ring-red-500" value={Object.keys(icons).find(key => icons[key as keyof typeof icons] === formData.icon)}>
                                            {iconNames.map(name => <option key={name} value={name}>{name}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="font-semibold text-sm text-gray-700 block mb-1">Price</label>
                                        <input type="number" name="price" value={formData.price} onChange={handleChange} className="w-full p-2 bg-white border border-gray-300 rounded text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500" required />
                                    </div>
                                    <div>
                                        <label className="font-semibold text-sm text-gray-700 block mb-1">Period (e.g., mo)</label>
                                        <input type="text" name="period" value={formData.period} onChange={handleChange} className="w-full p-2 bg-white border border-gray-300 rounded text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500" required />
                                    </div>
                                </div>
                                <div>
                                    <label className="font-semibold text-sm text-gray-700 block mb-1">Description</label>
                                    <textarea name="description" value={formData.description} onChange={handleChange} rows={2} className="w-full p-2 bg-white border border-gray-300 rounded text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500" required />
                                </div>
                                <div>
                                    <label className="font-semibold text-sm text-gray-700 block mb-1">Features (comma-separated)</label>
                                    <input type="text" value={featuresInput} onChange={handleFeaturesChange} className="w-full p-2 bg-white border border-gray-300 rounded text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500" required />
                                </div>
                            </div>
                            <div className="p-4 bg-gray-50 border-t flex justify-end space-x-3 flex-shrink-0">
                                <button type="button" onClick={onClose} className="bg-gray-200 text-gray-800 font-semibold text-sm py-2 px-4 rounded-lg hover:bg-gray-300">Cancel</button>
                                <button type="submit" className="bg-red-500 text-white font-semibold text-sm py-2 px-4 rounded-lg hover:bg-red-600">Save Package</button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PackageModal;