// FIX: Create AdminPage as the main layout for the admin dashboard.
import React, { useState } from 'react';
import { LayoutGrid, List, Users, FileText, Settings, LogOut, Package, MessageSquare, User, Star, ExternalLink } from 'lucide-react';
import AdminDashboard from '../components/admin/AdminDashboard';
import AdminServices from '../components/admin/AdminServices';
import AdminCustomers from '../components/admin/AdminCustomers';
import AdminInvoices from '../components/admin/AdminInvoices';
import AdminSettings from '../components/admin/AdminSettings';
import AdminPortfolio from '../components/admin/AdminPortfolio';
import AdminPackages from '../components/admin/AdminPackages';
import AdminTeam from '../components/admin/AdminTeam';
import AdminClients from '../components/admin/AdminClients';
import AdminContacts from '../components/admin/AdminContacts';
import { useAuth } from '../hooks/useAuth';

type AdminSection = 'Dashboard' | 'Services' | 'Customers' | 'Invoices' | 'Portfolio' | 'Packages' | 'Team' | 'Clients' | 'Contacts' | 'Settings';

const AdminPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AdminSection>('Dashboard');
  const { user, logout } = useAuth();


  const navItems = [
    { name: 'Dashboard', icon: LayoutGrid },
    { name: 'Services', icon: List },
    { name: 'Customers', icon: Users },
    { name: 'Invoices', icon: FileText },
    // The rest are kept for functionality but not in the screenshot
    { name: 'Portfolio', icon: Star },
    { name: 'Packages', icon: Package },
    { name: 'Team', icon: User },
    { name: 'Clients', icon: Users },
    { name: 'Contacts', icon: MessageSquare },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'Dashboard': return <AdminDashboard />;
      case 'Services': return <AdminServices />;
      case 'Customers': return <AdminCustomers />;
      case 'Invoices': return <AdminInvoices />;
      case 'Portfolio': return <AdminPortfolio />;
      case 'Packages': return <AdminPackages />;
      case 'Team': return <AdminTeam />;
      case 'Clients': return <AdminClients />;
      case 'Contacts': return <AdminContacts />;
      case 'Settings': return <AdminSettings />;
      default: return <AdminDashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-[#111827] text-gray-300 flex flex-col flex-shrink-0">
        <div className="h-20 flex items-center px-6 border-b border-gray-700/50 space-x-3">
            <img src="/logo.png" alt="Syntrix Solutions LLC" className="h-9 w-auto object-contain bg-white px-2 py-1 rounded shadow-sm" />
        </div>
        <nav className="flex-1 px-4 py-6 space-y-1">
            {navItems.map(item => (
                <button
                    key={item.name}
                    onClick={() => setActiveSection(item.name as AdminSection)}
                    className={`w-full flex items-center px-4 py-2.5 rounded-md text-sm font-medium transition-colors relative ${
                        activeSection === item.name 
                        ? 'bg-gray-900/60 text-white' 
                        : 'hover:bg-gray-700/50 hover:text-white'
                    }`}
                >
                    {activeSection === item.name && <div className="absolute left-0 top-2 bottom-2 w-1 bg-red-500 rounded-r-full" />}
                    <item.icon className="h-5 w-5 mr-4" />
                    <span>{item.name}</span>
                </button>
            ))}
        </nav>
        <div className="p-4 border-t border-gray-700/50">
             <a href="/#" className="w-full flex items-center px-4 py-2.5 rounded-md hover:bg-gray-700/50 text-sm font-medium mb-1">
                <ExternalLink className="h-5 w-5 mr-4" />
                <span>Visit Site</span>
            </a>
             <button onClick={logout} className="w-full flex items-center px-4 py-2.5 rounded-md hover:bg-gray-700/50 text-sm font-medium">
                <LogOut className="h-5 w-5 mr-4" />
                <span>Logout</span>
            </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white h-20 flex-shrink-0 flex items-center px-8 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-gray-800">{activeSection}</h2>
        </header>
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          {renderSection()}
        </main>
      </div>
    </div>
  );
};

export default AdminPage;