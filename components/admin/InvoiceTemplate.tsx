import React from 'react';
import type { Invoice } from '../../types';
import { Printer, ArrowLeft } from 'lucide-react';

interface InvoiceTemplateProps {
    invoice: Invoice;
    onBack: () => void;
}

const InvoiceTemplate: React.FC<InvoiceTemplateProps> = ({ invoice, onBack }) => {
    const total = invoice.items.reduce((sum, item) => sum + item.quantity * item.price, 0);

    return (
        <div>
            <div className="flex justify-between items-center mb-8 no-print">
                <div>
                    <button onClick={onBack} className="flex items-center text-gray-600 hover:text-black">
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Back to Invoices
                    </button>
                    <h1 className="text-4xl font-extrabold text-[#2B2B2B] mt-2">Invoice {invoice.invoiceNumber}</h1>
                </div>
                <button 
                    onClick={() => window.print()}
                    className="flex items-center bg-[#D52036] text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-red-700 transition-colors"
                >
                    <Printer className="mr-2 h-5 w-5" />
                    Print
                </button>
            </div>
            
            <div className="bg-white p-12 rounded-lg shadow-lg border border-gray-200 relative" id="invoice-to-print">
                 {invoice.status === 'Paid' && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform -rotate-12 opacity-10 pointer-events-none">
                        <span className="text-9xl font-black text-green-500 border-8 border-green-500 p-8 rounded-lg">PAID</span>
                    </div>
                )}
                {/* Header */}
                <div className="flex justify-between items-start mb-12 border-b pb-8">
                    <div className="flex flex-col items-start">
                        <img src="/logo.png" alt="Syntrix Solutions LLC" className="h-10 w-auto object-contain mb-2" />
                        <h2 className="text-2xl font-black text-[#2B2B2B]">SYNTRIX SOLUTIONS LLC</h2>
                        <p className="text-gray-500 text-sm">1001 Hensley St Ste H, Richmond, California 94801</p>
                        <p className="text-gray-500 text-sm">support@syntrixsolutionsllc.com</p>
                    </div>
                    <div className="text-right">
                        <h1 className="text-4xl font-bold text-gray-700 uppercase">Invoice</h1>
                        <p className="text-gray-500"># {invoice.invoiceNumber}</p>
                    </div>
                </div>

                {/* Details */}
                <div className="flex justify-between mb-12">
                    <div>
                        <p className="font-bold text-gray-700">Bill To:</p>
                        <p className="text-gray-800 font-semibold">{invoice.customerName}</p>
                    </div>
                    <div className="text-right">
                        <p><span className="font-bold text-gray-700">Issue Date: </span>{invoice.issueDate}</p>
                        <p><span className="font-bold text-gray-700">Due Date: </span>{invoice.dueDate}</p>
                        <p><span className="font-bold text-gray-700">Status: </span>
                            <span className={`font-semibold ${invoice.status === 'Paid' ? 'text-green-600' : 'text-orange-600'}`}>{invoice.status}</span>
                        </p>
                    </div>
                </div>

                {/* Items Table */}
                <table className="w-full text-left mb-12">
                     <thead>
                        <tr className="bg-gray-100">
                            <th className="p-3 font-bold text-gray-700">Description</th>
                            <th className="p-3 font-bold text-gray-700 text-right">Quantity</th>
                            <th className="p-3 font-bold text-gray-700 text-right">Price</th>
                            <th className="p-3 font-bold text-gray-700 text-right">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoice.items.map(item => (
                            <tr key={item.id} className="border-b">
                                <td className="p-3 text-gray-800">{item.description}</td>
                                <td className="p-3 text-right text-gray-600">{item.quantity}</td>
                                <td className="p-3 text-right text-gray-600">${item.price.toFixed(2)}</td>
                                <td className="p-3 text-right text-gray-800 font-medium">${(item.quantity * item.price).toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Total */}
                <div className="flex justify-end">
                    <div className="w-1/3">
                        <div className="flex justify-between text-lg">
                            <span className="font-semibold text-gray-600">Subtotal:</span>
                            <span className="text-gray-800">${total.toFixed(2)}</span>
                        </div>
                         <div className="flex justify-between text-lg mt-2">
                            <span className="font-semibold text-gray-600">Tax (0%):</span>
                            <span className="text-gray-800">$0.00</span>
                        </div>
                        <div className="flex justify-between text-2xl font-bold mt-4 pt-4 border-t-2">
                            <span className="text-[#2B2B2B]">Total:</span>
                            <span className="text-[#D52036]">${total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
                
                {/* Payment History */}
                {invoice.payments && invoice.payments.length > 0 && (
                    <div className="mt-12 pt-8 border-t">
                        <h3 className="text-xl font-bold mb-4 text-gray-800">Payment History</h3>
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="p-3 font-bold text-gray-700">Date</th>
                                    <th className="p-3 font-bold text-gray-700">Method</th>
                                    <th className="p-3 font-bold text-gray-700">Transaction ID</th>
                                    <th className="p-3 font-bold text-gray-700 text-right">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {invoice.payments.map((payment, index) => (
                                    <tr key={index} className="border-b last:border-0">
                                        <td className="p-3 text-gray-700">{payment.date}</td>
                                        <td className="p-3 text-gray-700">{payment.method}</td>
                                        <td className="p-3 text-gray-700">{payment.transactionId}</td>
                                        <td className="p-3 text-right text-gray-700 font-medium">${payment.amount.toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InvoiceTemplate;