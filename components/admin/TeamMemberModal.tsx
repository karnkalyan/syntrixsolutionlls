import React, { useState, useEffect } from 'react';
import type { TeamMember } from '../../types';
import { useSiteData } from '../../context/SiteDataContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface TeamMemberModalProps {
    isOpen: boolean;
    onClose: () => void;
    member: TeamMember | null;
}

const initialMemberState: Omit<TeamMember, 'id'> = {
    name: '',
    role: '',
    imageUrl: '',
    bio: '',
};

const TeamMemberModal: React.FC<TeamMemberModalProps> = ({ isOpen, onClose, member }) => {
    const { addTeamMember, updateTeamMember } = useSiteData();
    const [formData, setFormData] = useState<Omit<TeamMember, 'id'>>(initialMemberState);

    useEffect(() => {
        if (member) {
            setFormData(member);
        } else {
            setFormData(initialMemberState);
        }
    }, [member, isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (member) {
            updateTeamMember(member.id, formData as TeamMember);
        } else {
            addTeamMember(formData);
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
                                <h2 className="text-xl font-bold text-gray-800">{member ? 'Edit Team Member' : 'Add New Member'}</h2>
                                <button type="button" onClick={onClose} className="p-1 rounded-full hover:bg-gray-100"><X /></button>
                            </div>
                            <div className="p-6 space-y-4 overflow-y-auto flex-grow">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="font-semibold text-sm text-gray-700 block mb-1">Name</label>
                                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 bg-white border border-gray-300 rounded text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500" required />
                                    </div>
                                    <div>
                                        <label className="font-semibold text-sm text-gray-700 block mb-1">Role</label>
                                        <input type="text" name="role" value={formData.role} onChange={handleChange} className="w-full p-2 bg-white border border-gray-300 rounded text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500" required />
                                    </div>
                                </div>
                                <div>
                                    <label className="font-semibold text-sm text-gray-700 block mb-1">Image URL</label>
                                    <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} className="w-full p-2 bg-white border border-gray-300 rounded text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500" required />
                                </div>
                                <div>
                                    <label className="font-semibold text-sm text-gray-700 block mb-1">Bio</label>
                                    <textarea name="bio" value={formData.bio} onChange={handleChange} rows={3} className="w-full p-2 bg-white border border-gray-300 rounded text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500" required />
                                </div>
                            </div>
                            <div className="p-4 bg-gray-50 border-t flex justify-end space-x-3 flex-shrink-0">
                                <button type="button" onClick={onClose} className="bg-gray-200 text-gray-800 font-semibold text-sm py-2 px-4 rounded-lg hover:bg-gray-300">Cancel</button>
                                <button type="submit" className="bg-red-500 text-white font-semibold text-sm py-2 px-4 rounded-lg hover:bg-red-600">Save Member</button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default TeamMemberModal;