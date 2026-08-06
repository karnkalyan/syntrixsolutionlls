// FIX: Create AdminServices component.
import React, { useState } from 'react';
import { useSiteData } from '../../context/SiteDataContext';
import type { Service } from '../../types';
import { Edit, Trash2, PlusCircle } from 'lucide-react';
import ServiceModal from './ServiceModal'; // Assuming a modal component exists

const AdminServices: React.FC = () => {
    const { services, deleteService } = useSiteData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingService, setEditingService] = useState<Service | null>(null);
    
    const handleAddNew = () => {
        setEditingService(null);
        setIsModalOpen(true);
    };

    const handleEdit = (service: Service) => {
        setEditingService(service);
        setIsModalOpen(true);
    };

    const handleDelete = (id: string) => {
        if (window.confirm('Are you sure you want to delete this service?')) {
            deleteService(id);
        }
    };
    
    return (
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200/50">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Manage Services</h2>
                <button onClick={handleAddNew} className="flex items-center bg-red-500 text-white font-semibold text-sm py-2 px-4 rounded-lg hover:bg-red-600 transition-colors">
                    <PlusCircle size={18} className="mr-2" />
                    Add New Service
                </button>
            </div>

            <div className="space-y-4">
                {services.length > 0 ? services.map(service => (
                    <div key={service.id} className="flex flex-col md:flex-row justify-between md:items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex-1 mb-4 md:mb-0">
                            <h3 className="font-bold text-lg text-gray-800">{service.title}</h3>
                            <p className="text-sm text-gray-500 mt-1">{service.description}</p>
                        </div>
                        <div className="flex-shrink-0 flex items-center space-x-2">
                            <button onClick={() => handleEdit(service)} className="p-2 text-blue-600 hover:bg-blue-100 rounded-full transition-colors" aria-label={`Edit ${service.title}`}>
                                <Edit size={18} />
                            </button>
                            <button onClick={() => handleDelete(service.id)} className="p-2 text-red-600 hover:bg-red-100 rounded-full transition-colors" aria-label={`Delete ${service.title}`}>
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </div>
                )) : (
                    <p className="text-gray-500 text-center py-8">No services found. Click "Add New Service" to begin.</p>
                )}
            </div>

            <ServiceModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                service={editingService}
            />
        </div>
    );
};

export default AdminServices;