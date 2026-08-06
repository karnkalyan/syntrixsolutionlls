// FIX: Create AdminContacts component.
import React from 'react';
import { useSiteData } from '../../context/SiteDataContext';
import { Trash2, Eye, MailCheck } from 'lucide-react';

const AdminContacts: React.FC = () => {
    const { contacts, updateContact, deleteContact } = useSiteData();

    const handleMarkAsRead = (id: string) => {
        updateContact(id, { isRead: true });
    };

    const handleDelete = (id: string) => {
        if (window.confirm('Are you sure you want to delete this message?')) {
            deleteContact(id);
        }
    };
    
    return (
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200/50">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Messages</h2>
            <div className="space-y-4">
                {contacts.length > 0 ? contacts.map(msg => (
                    <div key={msg.id} className={`p-5 border rounded-lg transition-colors ${!msg.isRead ? 'bg-blue-50/50 border-blue-200' : 'bg-white border-gray-200'}`}>
                        <div className="flex justify-between items-start">
                            <div className="flex-1">
                                <div className="flex items-center mb-2">
                                    {!msg.isRead && <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3"></span>}
                                    <h3 className="font-bold text-lg text-gray-800">{msg.subject}</h3>
                                </div>
                                <p className="text-sm text-gray-600">From: <span className="font-semibold">{msg.name}</span> ({msg.email})</p>
                                <p className="text-sm text-gray-500">Received: {msg.date}</p>
                                <p className="mt-3 text-gray-700 bg-gray-50 p-3 rounded-md">{msg.message}</p>
                            </div>
                            <div className="flex-shrink-0 flex items-center space-x-2 ml-4">
                                {msg.isRead 
                                    ? <span className="p-2 text-gray-400" title="Already Read"><MailCheck size={18} /></span>
                                    : <button onClick={() => handleMarkAsRead(msg.id)} className="p-2 text-green-600 hover:bg-green-100 rounded-full transition-colors" title="Mark as Read"><Eye size={18} /></button>
                                }
                                <button onClick={() => handleDelete(msg.id)} className="p-2 text-red-600 hover:bg-red-100 rounded-full transition-colors" title="Delete"><Trash2 size={18} /></button>
                            </div>
                        </div>
                    </div>
                )) : (
                     <p className="text-gray-500 text-center py-8">You have no new messages.</p>
                )}
            </div>
        </div>
    );
};

export default AdminContacts;