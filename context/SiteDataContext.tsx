// FIX: Create SiteDataContext to provide global state.
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { SERVICES, MOCK_INVOICES, MOCK_CUSTOMERS, TEAM_MEMBERS, CLIENTS, PORTFOLIO_ITEMS, PACKAGES, MOCK_CONTACTS, MOCK_RECENT_ACTIVITY } from '../constants';
import type { Service, Invoice, Customer, Payment, TeamMember, Client, PortfolioItem, Package, ContactMessage, RecentActivityItem } from '../types';
import { v4 as uuidv4 } from 'uuid'; // Simple unique id generation

interface SiteDataContextType {
  services: Service[];
  updateService: (id: string, updatedService: Service) => void;
  addService: (newService: Omit<Service, 'id'>) => void;
  deleteService: (id: string) => void;
  
  invoices: Invoice[];
  addPaymentToInvoice: (invoiceId: string, payment: Payment) => void;
  
  customers: Customer[];
  addCustomer: (newCustomerData: Omit<Customer, 'id' | 'registeredDate' | 'totalSpent'>) => void;
  updateCustomer: (id: string, updatedCustomerData: Customer) => void;
  deleteCustomer: (id: string) => void;
  
  teamMembers: TeamMember[];
  updateTeamMember: (id: string, updatedMember: TeamMember) => void;
  addTeamMember: (newMember: Omit<TeamMember, 'id'>) => void;
  deleteTeamMember: (id: string) => void;

  clients: Client[];
  updateClient: (name: string, updatedClient: Client) => void;
  addClient: (newClient: Client) => void;
  deleteClient: (name: string) => void;

  portfolioItems: PortfolioItem[];
  updatePortfolioItem: (id: number, updatedItem: PortfolioItem) => void;
  addPortfolioItem: (newItem: Omit<PortfolioItem, 'id'>) => void;
  deletePortfolioItem: (id: number) => void;

  packages: Package[];
  updatePackage: (title: string, updatedPackage: Package) => void;
  addPackage: (newPackage: Package) => void;
  deletePackage: (title: string) => void;

  contacts: ContactMessage[];
  updateContact: (id: string, updatedContact: Partial<ContactMessage>) => void;
  deleteContact: (id: string) => void;

  recentActivity: RecentActivityItem[];
}

const SiteDataContext = createContext<SiteDataContextType | undefined>(undefined);

// Simple ID generator for new portfolio items since they use numbers
const generateNewPortfolioId = (items: PortfolioItem[]) => {
  return items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;
};

export const SiteDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [services, setServices] = useState<Service[]>(SERVICES);
  const [invoices, setInvoices] = useState<Invoice[]>(MOCK_INVOICES);
  const [customers, setCustomers] = useState<Customer[]>(MOCK_CUSTOMERS);
  const [contacts, setContacts] = useState<ContactMessage[]>(MOCK_CONTACTS);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(TEAM_MEMBERS);
  const [clients, setClients] = useState<Client[]>(CLIENTS);
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>(PORTFOLIO_ITEMS);
  const [packages, setPackages] = useState<Package[]>(PACKAGES);

  // --- Services ---
  const addService = (newService: Omit<Service, 'id'>) => {
    setServices(prev => [...prev, { ...newService, id: uuidv4() }]);
  };
  const updateService = (id: string, updatedService: Service) => {
    setServices(prev => prev.map(s => s.id === id ? updatedService : s));
  };
  const deleteService = (id: string) => {
    setServices(prev => prev.filter(s => s.id !== id));
  };
  
  // --- Invoices ---
  const addPaymentToInvoice = (invoiceId: string, payment: Payment) => {
    setInvoices(prevInvoices => prevInvoices.map(invoice => {
        if (invoice.id === invoiceId) {
            const newPayments = [...(invoice.payments || []), payment];
            const totalPaid = newPayments.reduce((sum, p) => sum + p.amount, 0);
            const totalDue = invoice.items.reduce((sum, item) => sum + item.quantity * item.price, 0);
            const newStatus = totalPaid >= totalDue ? 'Paid' : invoice.status;
            return { ...invoice, payments: newPayments, status: newStatus };
        }
        return invoice;
    }));
  };

  // --- Customers ---
  const addCustomer = (newCustomerData: Omit<Customer, 'id' | 'registeredDate' | 'totalSpent'>) => {
    const newCustomer: Customer = {
      ...newCustomerData,
      id: `cust_${uuidv4()}`,
      registeredDate: new Date().toISOString().split('T')[0],
      totalSpent: 0,
    };
    setCustomers(prev => [...prev, newCustomer]);
  };
  const updateCustomer = (id: string, updatedCustomerData: Customer) => {
    setCustomers(prev => prev.map(c => c.id === id ? updatedCustomerData : c));
  };
  const deleteCustomer = (id: string) => {
    setCustomers(prev => prev.filter(c => c.id !== id));
  };

  // --- Portfolio ---
  const addPortfolioItem = (newItem: Omit<PortfolioItem, 'id'>) => {
    setPortfolioItems(prev => [...prev, { ...newItem, id: generateNewPortfolioId(prev) }]);
  };
  const updatePortfolioItem = (id: number, updatedItem: PortfolioItem) => {
    setPortfolioItems(prev => prev.map(p => p.id === id ? updatedItem : p));
  };
  const deletePortfolioItem = (id: number) => {
    setPortfolioItems(prev => prev.filter(p => p.id !== id));
  };
  
  // --- Packages ---
  const addPackage = (newPackage: Package) => {
    setPackages(prev => [...prev, newPackage]);
  };
  const updatePackage = (title: string, updatedPackage: Package) => {
     setPackages(prev => prev.map(p => p.title === title ? updatedPackage : p));
  };
  const deletePackage = (title: string) => {
    setPackages(prev => prev.filter(p => p.title !== title));
  };
  
  // --- Team ---
  const addTeamMember = (newMember: Omit<TeamMember, 'id'>) => {
    setTeamMembers(prev => [...prev, { ...newMember, id: uuidv4() }]);
  };
  const updateTeamMember = (id: string, updatedMember: TeamMember) => {
    setTeamMembers(prev => prev.map(m => m.id === id ? updatedMember : m));
  };
  const deleteTeamMember = (id: string) => {
    setTeamMembers(prev => prev.filter(m => m.id !== id));
  };

  // --- Clients ---
  const addClient = (newClient: Client) => {
    setClients(prev => [...prev, newClient]);
  };
  const updateClient = (name: string, updatedClient: Client) => {
    setClients(prev => prev.map(c => c.name === name ? updatedClient : c));
  };
  const deleteClient = (name: string) => {
    setClients(prev => prev.filter(c => c.name !== name));
  };

  // --- Contacts ---
  const updateContact = (id: string, updatedFields: Partial<ContactMessage>) => {
    setContacts(prev => prev.map(c => c.id === id ? { ...c, ...updatedFields } : c));
  };
  const deleteContact = (id: string) => {
    setContacts(prev => prev.filter(c => c.id !== id));
  };

  const value = { 
    services, addService, updateService, deleteService, 
    invoices, addPaymentToInvoice, 
    customers, addCustomer, updateCustomer, deleteCustomer,
    teamMembers, addTeamMember, updateTeamMember, deleteTeamMember,
    clients, addClient, updateClient, deleteClient,
    portfolioItems, addPortfolioItem, updatePortfolioItem, deletePortfolioItem,
    packages, addPackage, updatePackage, deletePackage,
    contacts, updateContact, deleteContact,
    recentActivity: MOCK_RECENT_ACTIVITY,
  };

  return (
    <SiteDataContext.Provider value={value}>
      {children}
    </SiteDataContext.Provider>
  );
};

export const useSiteData = () => {
  const context = useContext(SiteDataContext);
  if (context === undefined) {
    throw new Error('useSiteData must be used within a SiteDataProvider');
  }
  return context;
};
// Note: A real implementation for UUID would use a library.
// For this environment, we mock it.
const v4 = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
  const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
  return v.toString(16);
});