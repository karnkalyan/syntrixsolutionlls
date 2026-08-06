// FIX: Create AdminCustomers component.
import React, { useState } from 'react';
import { useSiteData } from '../../context/SiteDataContext';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';
import CustomerModal from './CustomerModal';
import type { Customer } from '../../types';

const AdminCustomers: React.FC = () => {
    const { customers, deleteCustomer } = useSiteData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null);

    const handleAddNew = () => {
        setEditingCustomer(null);
        setIsModalOpen(true);
    };

    const handleEdit = (customer: Customer) => {
        setEditingCustomer(customer);
        setIsModalOpen(true);
    };

    const handleDelete = (id: string) => {
        if (window.confirm('Are you sure you want to delete this customer?')) {
            deleteCustomer(id);
        }
    };

    return (
        <>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200/50">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Customers</h2>
                    <button onClick={handleAddNew} className="flex items-center bg-red-500 text-white font-semibold text-sm py-2 px-4 rounded-lg hover:bg-red-600 transition-colors">
                        <PlusCircle size={18} className="mr-2" />
                        Add Customer
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200 text-sm">
                                <th className="p-4 font-semibold text-gray-600">Name</th>
                                <th className="p-4 font-semibold text-gray-600">Company</th>
                                <th className="p-4 font-semibold text-gray-600">Email</th>
                                <th className="p-4 font-semibold text-gray-600">Phone</th>
                                <th className="p-4 font-semibold text-gray-600 text-right">Total Spent</th>
                                <th className="p-4 font-semibold text-gray-600 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map(customer => (
                                <tr key={customer.id} className="border-b border-gray-200 hover:bg-gray-50 text-sm">
                                    <td className="p-4 font-medium text-gray-800 flex items-center">
                                        <img src={customer.avatarUrl} alt={customer.name} className="w-9 h-9 rounded-full mr-4 object-cover" />
                                        {customer.name}
                                    </td>
                                    <td className="p-4 text-gray-600">{customer.company}</td>
                                    <td className="p-4 text-gray-600">{customer.email}</td>
                                    <td className="p-4 text-gray-600">{customer.phone}</td>
                                    <td className="p-4 text-gray-800 font-semibold text-right">${customer.totalSpent.toLocaleString()}</td>
                                    <td className="p-4 text-center">
                                        <div className="flex justify-center items-center space-x-1">
                                            <button onClick={() => handleEdit(customer)} className="p-2 text-blue-600 hover:bg-blue-100 rounded-full transition-colors" aria-label={`Edit ${customer.name}`}>
                                                <Edit size={18} />
                                            </button>
                                            <button onClick={() => handleDelete(customer.id)} className="p-2 text-red-600 hover:bg-red-100 rounded-full transition-colors" aria-label={`Delete ${customer.name}`}>
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <CustomerModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                customer={editingCustomer}
            />
        </>
    );
};

export default AdminCustomers;