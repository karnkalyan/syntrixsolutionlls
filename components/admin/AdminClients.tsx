// FIX: Create AdminClients component.
import React, { useState } from 'react';
import { useSiteData } from '../../context/SiteDataContext';
import type { Client } from '../../types';
import { Edit, Trash2, PlusCircle } from 'lucide-react';
import ClientModal from './ClientModal';

const AdminClients: React.FC = () => {
    const { clients, deleteClient } = useSiteData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingClient, setEditingClient] = useState<Client | null>(null);

    const handleAddNew = () => {
        setEditingClient(null);
        setIsModalOpen(true);
    };

    const handleEdit = (client: Client) => {
        setEditingClient(client);
        setIsModalOpen(true);
    };

    const handleDelete = (name: string) => {
        if (window.confirm('Are you sure you want to delete this client?')) {
            deleteClient(name);
        }
    };
    
    return (
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200/50">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Manage Clients (Logos)</h2>
                 <button onClick={handleAddNew} className="flex items-center bg-red-500 text-white font-semibold text-sm py-2 px-4 rounded-lg hover:bg-red-600 transition-colors">
                    <PlusCircle size={18} className="mr-2" />
                    Add New Client
                </button>
            </div>
             <div className="space-y-4">
                {clients.map(client => (
                    <div key={client.name} className="flex justify-between items-center p-4 border rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex items-center">
                            <img src={client.logo} alt={client.name} className="h-10 mr-6 bg-gray-100 p-1 rounded" />
                            <h3 className="font-bold text-lg text-gray-800">{client.name}</h3>
                        </div>
                         <div className="flex-shrink-0 flex items-center space-x-2">
                             <button onClick={() => handleEdit(client)} className="p-2 text-blue-600 hover:bg-blue-100 rounded-full transition-colors" aria-label={`Edit ${client.name}`}>
                                <Edit size={18} />
                            </button>
                            <button onClick={() => handleDelete(client.name)} className="p-2 text-red-600 hover:bg-red-100 rounded-full transition-colors" aria-label={`Delete ${client.name}`}>
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <ClientModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                client={editingClient}
            />
        </div>
    );
};

export default AdminClients;