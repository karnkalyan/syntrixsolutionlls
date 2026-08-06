// FIX: Create AdminPackages component.
import React, { useState } from 'react';
import { useSiteData } from '../../context/SiteDataContext';
import type { Package } from '../../types';
import { Edit, Trash2, PlusCircle } from 'lucide-react';
import PackageModal from './PackageModal';

const AdminPackages: React.FC = () => {
    const { packages, deletePackage } = useSiteData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingPackage, setEditingPackage] = useState<Package | null>(null);

    const handleAddNew = () => {
        setEditingPackage(null);
        setIsModalOpen(true);
    };

    const handleEdit = (pkg: Package) => {
        setEditingPackage(pkg);
        setIsModalOpen(true);
    };

    const handleDelete = (title: string) => {
        if (window.confirm('Are you sure you want to delete this package?')) {
            deletePackage(title);
        }
    };
    
    return (
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200/50">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Manage Packages</h2>
                 <button onClick={handleAddNew} className="flex items-center bg-red-500 text-white font-semibold text-sm py-2 px-4 rounded-lg hover:bg-red-600 transition-colors">
                    <PlusCircle size={18} className="mr-2" />
                    Add New Package
                </button>
            </div>
             <div className="space-y-4">
                {packages.map(pkg => (
                    <div key={pkg.title} className="flex flex-col md:flex-row justify-between md:items-center p-4 border rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex-1 mb-4 md:mb-0">
                            <h3 className="font-bold text-lg text-gray-800">{pkg.title} - <span className="text-red-600">${pkg.price}/{pkg.period}</span></h3>
                            <p className="text-sm text-gray-500 mt-1">{pkg.description}</p>
                        </div>
                        <div className="flex-shrink-0 flex items-center space-x-2">
                            <button onClick={() => handleEdit(pkg)} className="p-2 text-blue-600 hover:bg-blue-100 rounded-full transition-colors" aria-label={`Edit ${pkg.title}`}>
                                <Edit size={18} />
                            </button>
                            <button onClick={() => handleDelete(pkg.title)} className="p-2 text-red-600 hover:bg-red-100 rounded-full transition-colors" aria-label={`Delete ${pkg.title}`}>
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <PackageModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                pkg={editingPackage}
            />
        </div>
    );
};

export default AdminPackages;