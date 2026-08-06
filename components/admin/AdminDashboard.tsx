// FIX: Create AdminDashboard component.
import React from 'react';
import BarChart from './BarChart';
import { useSiteData } from '../../context/SiteDataContext';
import { DollarSign, List, Users, FileText, ArrowUp, ArrowDown } from 'lucide-react';

const StatCard = ({ title, value, change, changeType, icon: Icon }) => {
  const isUp = changeType === 'up';
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm flex justify-between items-center border border-gray-200/50">
      <div>
        <p className="text-sm text-gray-500 font-medium">{title}</p>
        <p className="text-3xl font-bold text-gray-800 mt-1">{value}</p>
        <div className={`flex items-center text-sm mt-2 ${isUp ? 'text-green-600' : 'text-red-600'}`}>
          {isUp ? <ArrowUp size={14} className="mr-1" /> : <ArrowDown size={14} className="mr-1" />}
          <span className="font-semibold">{change}</span>
          <span className="text-gray-500 ml-1">vs last month</span>
        </div>
      </div>
      <div className="bg-red-50 p-3 rounded-full">
        <Icon size={24} className="text-red-500" />
      </div>
    </div>
  );
};

const AdminDashboard: React.FC = () => {
    const { recentActivity } = useSiteData();

    const getActivityColor = (type: string) => {
        switch (type) {
            case 'invoice-generated': return 'bg-green-500';
            case 'customer-added': return 'bg-blue-500';
            case 'invoice-paid': return 'bg-green-500';
            default: return 'bg-gray-400';
        }
    };

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
                <StatCard title="Total Revenue" value="$45,231" change="12.5%" changeType="up" icon={DollarSign} />
                <StatCard title="Active Services" value="6" change="2" changeType="up" icon={List} />
                <StatCard title="New Customers" value="4" change="5.2%" changeType="down" icon={Users} />
                <StatCard title="Invoices Paid" value="1" change="20%" changeType="up" icon={FileText} />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-200/50">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Revenue Overview (Mock)</h3>
                    <div className="h-96 text-gray-400 flex items-center justify-center">
                        <BarChart />
                    </div>
                </div>
                 <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200/50">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Activity (Mock)</h3>
                    <ul className="space-y-4">
                        {recentActivity.map(item => (
                        <li key={item.id} className="flex items-center">
                            <span className={`w-2.5 h-2.5 rounded-full mr-4 flex-shrink-0 ${getActivityColor(item.type)}`}></span>
                            <span className="text-gray-700 text-sm">{item.text}</span>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;