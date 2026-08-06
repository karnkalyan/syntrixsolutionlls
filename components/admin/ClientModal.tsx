import React, { useState, useEffect } from 'react';
import type { Client } from '../../types';
import { useSiteData } from '../../context/SiteDataContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ClientModalProps {
    isOpen: boolean;
    onClose: () => void;
    client: Client | null;
}

const initialClientState: Client = {
    name: '',
    logo: '',
};

const ClientModal: React.FC<ClientModalProps> = ({ isOpen, onClose, client }) => {
    const { addClient, updateClient } = useSiteData();
    const [formData, setFormData] = useState<Client>(initialClientState);

    useEffect(() => {
        if (client) {
            setFormData(client);
        } else {
            setFormData(initialClientState);
        }
    }, [client, isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (client) {
            updateClient(client.name, formData);
        } else {
            addClient(formData);
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
                        className="bg-white rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden"
                        initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
                        onClick={e => e.stopPropagation()}
                    >
                        <form onSubmit={handleSubmit} className="flex flex-col h-full">
                            <div className="p-6 border-b flex justify-between items-center flex-shrink-0">
                                <h2 className="text-xl font-bold text-gray-800">{client ? 'Edit Client' : 'Add New Client'}</h2>
                                <button type="button" onClick={onClose} className="p-1 rounded-full hover:bg-gray-100"><X /></button>
                            </div>
                            <div className="p-6 space-y-4 overflow-y-auto flex-grow">
                                <div>
                                    <label className="font-semibold text-sm text-gray-700 block mb-1">Client Name</label>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 bg-white border border-gray-300 rounded text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500" required />
                                </div>
                                <div>
                                    <label className="font-semibold text-sm text-gray-700 block mb-1">Logo URL</label>
                                    <input type="text" name="logo" value={formData.logo} onChange={handleChange} className="w-full p-2 bg-white border border-gray-300 rounded text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500" required />
                                </div>
                            </div>
                            <div className="p-4 bg-gray-50 border-t flex justify-end space-x-3 flex-shrink-0">
                                <button type="button" onClick={onClose} className="bg-gray-200 text-gray-800 font-semibold text-sm py-2 px-4 rounded-lg hover:bg-gray-300">Cancel</button>
                                <button type="submit" className="bg-red-500 text-white font-semibold text-sm py-2 px-4 rounded-lg hover:bg-red-600">Save Client</button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ClientModal;