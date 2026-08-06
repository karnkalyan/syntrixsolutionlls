// FIX: Create AdminInvoices component.
import React, { useState } from 'react';
import { useSiteData } from '../../context/SiteDataContext';
import type { Invoice, Payment } from '../../types';
import InvoiceTemplate from './InvoiceTemplate';
import PaymentModal from './PaymentModal';
import { DollarSign, PlusCircle } from 'lucide-react';

const AdminInvoices: React.FC = () => {
    const { invoices, addPaymentToInvoice } = useSiteData();
    const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

    const handleViewInvoice = (invoice: Invoice) => {
        setSelectedInvoice(invoice);
    };

    const handleOpenPaymentModal = (invoice: Invoice) => {
        setSelectedInvoice(invoice);
        setIsPaymentModalOpen(true);
    };

    const handleSavePayment = (payment: Payment) => {
        if (selectedInvoice) {
            addPaymentToInvoice(selectedInvoice.id, payment);
        }
        setIsPaymentModalOpen(false);
        setSelectedInvoice(null);
    };
    
    if (selectedInvoice && !isPaymentModalOpen) {
        return <InvoiceTemplate invoice={selectedInvoice} onBack={() => setSelectedInvoice(null)} />;
    }

    return (
        <>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200/50">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Invoices</h2>
                    <button className="flex items-center bg-red-500 text-white font-semibold text-sm py-2 px-4 rounded-lg hover:bg-red-600 transition-colors">
                        <PlusCircle size={18} className="mr-2" />
                        Create New Invoice
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                <th className="p-4 font-semibold text-gray-600">Invoice #</th>
                                <th className="p-4 font-semibold text-gray-600">Customer</th>
                                <th className="p-4 font-semibold text-gray-600">Issue Date</th>
                                <th className="p-4 font-semibold text-gray-600">Due Date</th>
                                <th className="p-4 font-semibold text-gray-600">Status</th>
                                <th className="p-4 font-semibold text-gray-600 text-right">Amount</th>
                                <th className="p-4 font-semibold text-gray-600 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoices.map(invoice => (
                                <tr key={invoice.id} className="border-b border-gray-200 hover:bg-gray-50">
                                    <td className="p-4 font-medium text-blue-600 hover:underline cursor-pointer" onClick={() => handleViewInvoice(invoice)}>{invoice.invoiceNumber}</td>
                                    <td className="p-4 text-gray-700">{invoice.customerName}</td>
                                    <td className="p-4 text-gray-600">{invoice.issueDate}</td>
                                    <td className="p-4 text-gray-600">{invoice.dueDate}</td>
                                    <td className="p-4">
                                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                                            invoice.status === 'Paid' ? 'bg-green-100 text-green-800' : 
                                            invoice.status === 'Pending' ? 'bg-orange-100 text-orange-800' : 'bg-red-100 text-red-800'
                                        }`}>
                                            {invoice.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-gray-800 font-semibold text-right">${invoice.items.reduce((sum, item) => sum + item.quantity * item.price, 0).toFixed(2)}</td>
                                    <td className="p-4 text-center">
                                         <button onClick={() => handleOpenPaymentModal(invoice)} className="text-gray-500 hover:text-green-600 p-2 rounded-full hover:bg-green-50 transition-colors" title="Record Payment">
                                            <DollarSign size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {selectedInvoice && (
                <PaymentModal 
                    isOpen={isPaymentModalOpen}
                    onClose={() => setIsPaymentModalOpen(false)}
                    onSave={handleSavePayment}
                    invoice={selectedInvoice}
                />
            )}
        </>
    );
};

export default AdminInvoices;