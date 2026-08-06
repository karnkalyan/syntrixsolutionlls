// FIX: Create AdminPortfolio component.
import React, { useState } from 'react';
import { useSiteData } from '../../context/SiteDataContext';
import type { PortfolioItem } from '../../types';
import { Edit, Trash2, PlusCircle } from 'lucide-react';
import PortfolioModal from './PortfolioModal';

const AdminPortfolio: React.FC = () => {
    const { portfolioItems, deletePortfolioItem } = useSiteData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<PortfolioItem | null>(null);

    const handleAddNew = () => {
        setEditingItem(null);
        setIsModalOpen(true);
    };

    const handleEdit = (item: PortfolioItem) => {
        setEditingItem(item);
        setIsModalOpen(true);
    };

    const handleDelete = (id: number) => {
        if (window.confirm('Are you sure you want to delete this portfolio item?')) {
            deletePortfolioItem(id);
        }
    };

    return (
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200/50">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Manage Portfolio</h2>
                <button onClick={handleAddNew} className="flex items-center bg-red-500 text-white font-semibold text-sm py-2 px-4 rounded-lg hover:bg-red-600 transition-colors">
                    <PlusCircle size={18} className="mr-2" />
                    Add New Project
                </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioItems.map(item => (
                    <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                        <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="font-bold text-gray-800 truncate">{item.title}</h3>
                            <p className="text-sm text-red-600 font-semibold">{item.category}</p>
                            <p className="text-sm text-gray-500 mt-2 line-clamp-2">{item.description}</p>
                        </div>
                         <div className="p-2 border-t border-gray-200 bg-gray-50 flex justify-end space-x-2">
                            <button onClick={() => handleEdit(item)} className="p-2 text-blue-600 hover:bg-blue-100 rounded-full transition-colors" aria-label={`Edit ${item.title}`}>
                                <Edit size={18} />
                            </button>
                            <button onClick={() => handleDelete(item.id)} className="p-2 text-red-600 hover:bg-red-100 rounded-full transition-colors" aria-label={`Delete ${item.title}`}>
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <PortfolioModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                item={editingItem}
            />
        </div>
    );
};

export default AdminPortfolio;