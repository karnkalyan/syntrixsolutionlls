import React, { useState, useEffect } from 'react';
import type { Service, ServiceKeyFeature } from '../../types';
import { useSiteData } from '../../context/SiteDataContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, Smartphone, ShieldCheck, Scaling, Users, GitMerge, Code, LayoutTemplate, Rocket, CheckCircle, Server, Search, Lightbulb, Headset, ShoppingCart, TrendingUp, Trash2 } from 'lucide-react';

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: Service | null;
}

const icons = { Zap, Smartphone, ShieldCheck, Scaling, Users, GitMerge, Code, LayoutTemplate, Rocket, CheckCircle, Server, Search, Lightbulb, Headset, ShoppingCart, TrendingUp };
const iconNames = Object.keys(icons) as (keyof typeof icons)[];

const initialServiceState: Omit<Service, 'id'> = {
    slug: '',
    icon: Zap,
    title: '',
    description: '',
    longDescription: '',
    keyFeatures: [
        { icon: Zap, title: '', description: '' },
        { icon: Zap, title: '', description: '' },
        { icon: Zap, title: '', description: '' },
    ],
};

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
    const { addService, updateService } = useSiteData();
    const [formData, setFormData] = useState<Omit<Service, 'id'>>(initialServiceState);

    useEffect(() => {
        if (service) {
             const features = service.keyFeatures && Array.isArray(service.keyFeatures) ? service.keyFeatures : [];
            setFormData({...service, keyFeatures: features});
        } else {
            setFormData(initialServiceState);
        }
    }, [service, isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleIconChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.target;
      setFormData(prev => ({ ...prev, icon: icons[value as keyof typeof icons] }));
    };

    const handleFeatureChange = (index: number, field: keyof ServiceKeyFeature, value: string) => {
        const newFeatures = [...formData.keyFeatures];
        // @ts-ignore
        newFeatures[index][field] = value;
        setFormData(prev => ({ ...prev, keyFeatures: newFeatures }));
    };
    
     const handleFeatureIconChange = (index: number, value: string) => {
        const newFeatures = [...formData.keyFeatures];
        newFeatures[index].icon = icons[value as keyof typeof icons];
        setFormData(prev => ({ ...prev, keyFeatures: newFeatures }));
    };

    const addFeature = () => {
        setFormData(prev => ({
            ...prev,
            keyFeatures: [...prev.keyFeatures, { icon: Zap, title: '', description: '' }]
        }));
    };
    
    const removeFeature = (index: number) => {
        setFormData(prev => ({
            ...prev,
            keyFeatures: prev.keyFeatures.filter((_, i) => i !== index)
        }));
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (service) {
            updateService(service.id, formData as Service);
        } else {
            addService(formData);
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
                        className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden"
                        initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
                        onClick={e => e.stopPropagation()}
                    >
                        <form onSubmit={handleSubmit} className="flex flex-col h-full">
                            <div className="p-6 border-b flex justify-between items-center flex-shrink-0">
                                <h2 className="text-xl font-bold text-gray-800">{service ? 'Edit Service' : 'Add New Service'}</h2>
                                <button type="button" onClick={onClose} className="p-1 rounded-full hover:bg-gray-100"><X /></button>
                            </div>
                            <div className="p-6 space-y-4 overflow-y-auto flex-grow">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="font-semibold text-sm text-gray-700 block mb-1">Title</label>
                                        <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full p-2 bg-white border border-gray-300 rounded text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500" required />
                                    </div>
                                    <div>
                                        <label className="font-semibold text-sm text-gray-700 block mb-1">Slug</label>
                                        <input type="text" name="slug" value={formData.slug} onChange={handleChange} className="w-full p-2 bg-white border border-gray-300 rounded text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500" required />
                                    </div>
                                </div>
                                <div>
                                    <label className="font-semibold text-sm text-gray-700 block mb-1">Icon</label>
                                    <select name="icon" onChange={handleIconChange} className="w-full p-2 bg-white border border-gray-300 rounded text-gray-900 focus:ring-2 focus:ring-red-500" value={Object.keys(icons).find(key => icons[key as keyof typeof icons] === formData.icon)}>
                                        {iconNames.map(name => <option key={name} value={name}>{name}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="font-semibold text-sm text-gray-700 block mb-1">Short Description</label>
                                    <textarea name="description" value={formData.description} onChange={handleChange} rows={2} className="w-full p-2 bg-white border border-gray-300 rounded text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500" required />
                                </div>
                                <div>
                                    <label className="font-semibold text-sm text-gray-700 block mb-1">Long Description</label>
                                    <textarea name="longDescription" value={formData.longDescription} onChange={handleChange} rows={4} className="w-full p-2 bg-white border border-gray-300 rounded text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500" required />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-700 mb-2">Key Features</h4>
                                    <div className="space-y-2">
                                        {formData.keyFeatures.map((feature, index) => (
                                            <div key={index} className="flex items-center gap-2 p-2 border rounded-lg bg-gray-50/50">
                                                <select onChange={(e) => handleFeatureIconChange(index, e.target.value)} className="w-48 p-2 bg-white border border-gray-300 rounded text-gray-900 focus:ring-2 focus:ring-red-500" value={Object.keys(icons).find(key => icons[key as keyof typeof icons] === feature.icon)}>
                                                    {iconNames.map(name => <option key={name} value={name}>{name}</option>)}
                                                </select>
                                                <input type="text" value={feature.title} onChange={(e) => handleFeatureChange(index, 'title', e.target.value)} placeholder="Feature Title" className="flex-1 p-2 bg-white border border-gray-300 rounded text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500" />
                                                <input type="text" value={feature.description} onChange={(e) => handleFeatureChange(index, 'description', e.target.value)} placeholder="Feature Description" className="flex-1 p-2 bg-white border border-gray-300 rounded text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500" />
                                                <button type="button" onClick={() => removeFeature(index)} className="p-2 text-red-500 hover:bg-red-100 rounded-full flex-shrink-0" aria-label="Remove feature">
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                     <button type="button" onClick={addFeature} className="mt-3 text-sm text-red-600 font-semibold hover:text-red-800 transition-colors">
                                        + Add Feature
                                    </button>
                                </div>
                            </div>
                            <div className="p-4 bg-gray-50 border-t flex justify-end space-x-3 flex-shrink-0">
                                <button type="button" onClick={onClose} className="bg-gray-200 text-gray-800 font-semibold text-sm py-2 px-4 rounded-lg hover:bg-gray-300">Cancel</button>
                                <button type="submit" className="bg-red-500 text-white font-semibold text-sm py-2 px-4 rounded-lg hover:bg-red-600">Save Service</button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ServiceModal;