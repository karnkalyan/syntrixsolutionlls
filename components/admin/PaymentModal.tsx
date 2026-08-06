import React, { useState, useEffect } from 'react';
import type { Invoice, Payment } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (data: Payment) => void;
    invoice: Invoice;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, onSave, invoice }) => {
    const totalDue = invoice.items.reduce((sum, item) => sum + item.quantity * item.price, 0);
    const [amount, setAmount] = useState(totalDue);
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [method, setMethod] = useState<'Credit Card' | 'Bank Transfer' | 'Other'>('Bank Transfer');
    const [transactionId, setTransactionId] = useState('');

     useEffect(() => {
        if (isOpen) {
            setAmount(totalDue);
            setDate(new Date().toISOString().split('T')[0]);
            setMethod('Bank Transfer');
            setTransactionId('');
        }
    }, [isOpen, totalDue]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({ amount, date, method, transactionId });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    <motion.div 
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        className="bg-white rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden"
                        onClick={e => e.stopPropagation()}
                    >
                        <form onSubmit={handleSubmit} className="flex flex-col h-full">
                            <div className="p-6 border-b flex justify-between items-center flex-shrink-0">
                                <div>
                                    <h2 className="text-2xl font-bold">Record Payment</h2>
                                    <p className="text-gray-500">For Invoice {invoice.invoiceNumber}</p>
                                </div>
                                <button type="button" onClick={onClose} className="p-1 rounded-full hover:bg-gray-100"><X /></button>
                            </div>
                            <div className="p-6 space-y-4 overflow-y-auto flex-grow">
                               <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="amount" className="font-semibold text-gray-700 block mb-1">Amount</label>
                                        <input type="number" id="amount" value={amount} onChange={e => setAmount(Number(e.target.value))} className="w-full p-2 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500" required />
                                    </div>
                                    <div>
                                        <label htmlFor="date" className="font-semibold text-gray-700 block mb-1">Payment Date</label>
                                        <input type="date" id="date" value={date} onChange={e => setDate(e.target.value)} className="w-full p-2 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500" required />
                                    </div>
                               </div>
                               <div>
                                    <label htmlFor="method" className="font-semibold text-gray-700 block mb-1">Payment Method</label>
                                    <select id="method" value={method} onChange={e => setMethod(e.target.value as any)} className="w-full p-2 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-red-500" required>
                                        <option>Bank Transfer</option>
                                        <option>Credit Card</option>
                                        <option>Other</option>
                                    </select>
                               </div>
                                <div>
                                    <label htmlFor="transactionId" className="font-semibold text-gray-700 block mb-1">Transaction ID</label>
                                    <input type="text" id="transactionId" value={transactionId} onChange={e => setTransactionId(e.target.value)} className="w-full p-2 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500" placeholder="e.g., BT-XFGR567" />
                                </div>
                            </div>
                            <div className="p-6 bg-gray-50 border-t flex justify-end space-x-3 flex-shrink-0">
                                <button type="button" onClick={onClose} className="bg-gray-200 text-gray-800 font-semibold text-sm py-2 px-4 rounded-lg hover:bg-gray-300">Cancel</button>
                                <button type="submit" className="bg-green-600 text-white font-semibold text-sm py-2 px-4 rounded-lg hover:bg-green-700">Save Payment</button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PaymentModal;