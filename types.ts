// FIX: Define and export all necessary types for the application.
import type { LucideIcon } from 'lucide-react';

export type Page = 'Home' | 'Services' | 'Packages' | 'Portfolio' | 'About' | 'Contact' | 'ServiceDetail' | 'Admin' | 'Auth';

export interface NavLink {
    label: string;
    page: Page;
}

export interface ServiceKeyFeature {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface Service {
    id: string;
    slug: string;
    icon: LucideIcon;
    title: string;
    description: string;
    longDescription: string;
    keyFeatures: ServiceKeyFeature[];
    imageUrl?: string;
    bannerUrl?: string;
}

export interface WhyUsItem {
    point: string;
    description?: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    company: string;
    avatar: string;
}

export interface Client {
    name: string;
    logo: string;
}

export interface FaqItem {
    question: string;
    answer: string;
}

export interface ProcessStep {
    icon: LucideIcon;
    title: string;
    description: string;
    imageUrl?: string;
}

export interface Accomplishment {
    icon: LucideIcon;
    name: string;
}

export interface Package {
    icon: LucideIcon;
    title: string;
    description: string;
    features: string[];
    price: number;
    period: string;
    imageUrl?: string;
}

export interface PortfolioItem {
    id: number;
    title: string;
    category: string;
    imageUrl: string;
    client: string;
    date: string;
    description: string;
    technologies: string[];
    metrics?: string;
}

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    imageUrl: string;
    bio: string;
}

export interface ContactMessage {
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    date: string;
    isRead: boolean;
}

// Admin / Invoice types
export interface InvoiceItem {
    id: string;
    description: string;
    quantity: number;
    price: number;
}

export interface Payment {
    date: string;
    amount: number;
    method: 'Credit Card' | 'Bank Transfer' | 'Other';
    transactionId?: string;
}

export interface Invoice {
    id: string;
    invoiceNumber: string;
    customerName: string;
    customerId: string;
    issueDate: string;
    dueDate: string;
    status: 'Paid' | 'Pending' | 'Overdue';
    items: InvoiceItem[];
    payments?: Payment[];
}

export interface Customer {
    id: string;
    name: string;
    email: string;
    company: string;
    phone: string;
    website: string;
    address: string;
    registeredDate: string;
    totalSpent: number;
    avatarUrl: string;
}

export interface RecentActivityItem {
    id: number;
    type: 'invoice-generated' | 'customer-added' | 'invoice-paid';
    text: string;
}