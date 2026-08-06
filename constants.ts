// FIX: Define and export all constant data used in the application.
import {
  LayoutTemplate,
  Smartphone,
  Server,
  Code,
  Cloud,
  BrainCircuit,
  Award,
  Star,
  Zap,
  DraftingCompass,
  FileCode,
  Rocket,
  Handshake,
  CheckCircle,
  ShieldCheck,
  Scaling,
  Users,
  GitMerge,
  Lightbulb,
  Search,
  TrendingUp,
  Headset,
  ShoppingCart,
} from 'lucide-react';
import type { NavLink, Service, WhyUsItem, Testimonial, Client, FaqItem, ProcessStep, Accomplishment, Package, PortfolioItem, TeamMember, Invoice, Customer, ContactMessage, RecentActivityItem } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', page: 'Home' },
  { label: 'Services', page: 'Services' },
  { label: 'Packages', page: 'Packages' },
  { label: 'Portfolio', page: 'Portfolio' },
  { label: 'About Us', page: 'About' },
  { label: 'Contact', page: 'Contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    slug: 'web-development',
    icon: LayoutTemplate,
    title: 'Web Development',
    description: 'Crafting responsive, high-performance websites and full-stack applications.',
    longDescription: 'We build beautiful, fast, and secure websites tailored to your business needs. From custom web portals to complex enterprise systems, our engineering team leverages modern frontend and backend tech stacks to deliver exceptional user experiences, seamless cross-device compatibility, and optimal page speeds.',
    imageUrl: '/72c1e0d8-7701-4a9a-a119-fab38f2cfffc.png',
    bannerUrl: '/a4f15e74-8cdd-4de2-ba5a-0e4dc55d0327.png',
    keyFeatures: [
        { icon: Zap, title: "Lightning Fast Performance", description: "Optimized code, smart caching, and low latency page loading." },
        { icon: Smartphone, title: "Fully Responsive UI/UX", description: "Flawless rendering on desktops, tablets, and mobile devices." },
        { icon: ShieldCheck, title: "Enterprise Grade Security", description: "Built-in encryption, data safety, and vulnerability protection." },
    ]
  },
  {
    id: 'saas-dev',
    slug: 'saas-development',
    icon: Server,
    title: 'SaaS Development',
    description: 'Building scalable, multi-tenant cloud platforms and AI-driven dashboards.',
    longDescription: 'From initial architectural planning to global deployment, we build scalable cloud-native SaaS applications. Our solutions feature real-time telemetry dashboards, AI-driven data analytics, role-based access control, multi-tenant database isolation, and automated payment subscription integration.',
    imageUrl: '/8f14f4c8-e0d3-4276-8238-1751f5f16e0f.png',
    bannerUrl: '/9ea4c9b7-0e2f-4875-a320-5e05834b07a4.png',
    keyFeatures: [
        { icon: BrainCircuit, title: "AI-Driven Insights", description: "Machine learning models to uncover real-time trends and metrics." },
        { icon: Scaling, title: "Elastic Multi-Tenancy", description: "High-concurrency infrastructure engineered for user growth." },
        { icon: GitMerge, title: "Seamless API Hub", description: "Connect with payment gateways, CRMs, and third-party tools." },
    ]
  },
  {
    id: 'mobile-apps',
    slug: 'mobile-app-development',
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Creating engaging iOS and Android applications with biometric security.',
    longDescription: 'We design and develop native and cross-platform mobile apps for iOS and Android. Whether building telemedicine portals with video consultations or fintech wallets with instant P2P transfers and biometric fingerprint authentication, we deliver intuitive, pixel-perfect mobile applications.',
    imageUrl: '/3928e164-2c71-481c-afa4-9859aaa139f8.png',
    bannerUrl: '/cfd634f2-d5f2-4139-bf03-20885a5c07de.png',
    keyFeatures: [
        { icon: Code, title: "Biometric & Wallet Security", description: "Fingerprint auth, end-to-end encryption, and payment integrations." },
        { icon: LayoutTemplate, title: "Intuitive Mobile UX", description: "User-centric designs with high engagement and fluid animations." },
        { icon: Rocket, title: "App Store Publishing", description: "Full deployment and maintenance on Apple App Store & Google Play." },
    ]
  },
  {
    id: 'it-support',
    slug: 'it-support',
    icon: Headset,
    title: 'Managed IT Support & AMC',
    description: 'Proactive 24/7 helpdesk, Annual Maintenance Contracts, and system monitoring.',
    longDescription: 'Syntrix Solutions LLC provides round-the-clock IT management, system monitoring, and Annual Maintenance Contracts (AMC). We keep your servers, networks, workstations, and network hardware online, backed by guaranteed SLA response times and dedicated tech engineers.',
    imageUrl: '/5025f406-4c32-47f5-85a4-908f4831665a.png',
    bannerUrl: '/3f22500f-2428-4ab9-be49-a0b48b10cc6e.png',
    keyFeatures: [
        { icon: CheckCircle, title: "24/7 Proactive Monitoring", description: "Immediate threat detection and system health monitoring." },
        { icon: ShieldCheck, title: "99.9% Uptime Guarantee", description: "Rapid remote assistance and hardware failure resolution." },
        { icon: Server, title: "Hardware & Server Maintenance", description: "Regular patching, firmware updates, and on-site support." },
    ]
  },
  {
    id: 'cybersecurity',
    slug: 'cybersecurity-threat-protection',
    icon: ShieldCheck,
    title: 'Cybersecurity & Threat Protection',
    description: 'Intelligent defense, firewall architecture, and continuous threat monitoring.',
    longDescription: 'Protect your enterprise assets with end-to-end security solutions. We deploy multi-layered firewall protections, intrusion prevention systems, end-to-end data encryption, and 24/7 security operation monitoring to safeguard your network and prevent cyber attacks.',
    imageUrl: '/01d3ad9a-a23f-46ba-ae40-051f398438d2.png',
    bannerUrl: '/b6477e62-934b-4614-8d14-37de00d4949a.png',
    keyFeatures: [
        { icon: ShieldCheck, title: "Automated Threat Isolation", description: "Advanced detection and immediate containment of malware and intrusions." },
        { icon: Cloud, title: "Network & Firewall Defense", description: "Encrypted network perimeter protection for remote and local nodes." },
        { icon: Zap, title: "24/7 Security Audits", description: "Continuous vulnerability assessments and compliance monitoring." },
    ]
  },
  {
    id: 'cloud-devops',
    slug: 'cloud-migration-backup',
    icon: Cloud,
    title: 'Cloud Migration & Disaster Recovery',
    description: 'Seamless cloud migration, automated backups, and 15-minute RTO recovery.',
    longDescription: 'Move, protect, and scale your IT infrastructure with confidence. We handle cloud migrations, zero-downtime backups, high-availability server clusters, and automated disaster recovery workflows that ensure 99.99% business continuity.',
    imageUrl: '/8d5edf51-439d-4ee9-a103-a8c8a821ad20.png',
    bannerUrl: '/98b07f4d-f1e7-4dd4-b36f-95a2c4de954b.png',
    keyFeatures: [
        { icon: Cloud, title: "Zero Data Loss Migration", description: "End-to-end encrypted transfer of enterprise databases and applications." },
        { icon: Scaling, title: "15-Min Recovery Time (RTO)", description: "Instant automated failover to secure secondary cloud sites." },
        { icon: Server, title: "Continuous Backup Sync", description: "Automated real-time backup schedules with verified restoration." },
    ]
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce-solutions',
    icon: ShoppingCart,
    title: 'Ecommerce Platforms & Storefronts',
    description: 'High-conversion online stores with 28.4K req/sec capacity and accessibility.',
    longDescription: 'We build high-performance e-commerce platforms designed for massive traffic scale and high conversion. Featuring real-time inventory management, multi-currency checkout, accessibility compliance (screen reader and keyboard friendly), and instant payment processing.',
    imageUrl: '/6071d12a-1a78-421d-8176-a54340b5ce74.png',
    bannerUrl: '/cebd43b3-a455-4790-98b7-10766d36a640.png',
    keyFeatures: [
        { icon: LayoutTemplate, title: "High Traffic Auto-Scaling", description: "Handles 28.4K+ requests/sec with 99.99% uptime." },
        { icon: Zap, title: "Seamless Cart & Checkout", description: "Custom cart drawer, instant calculation, and payment gateways." },
        { icon: Scaling, title: "Accessibility Ready", description: "Keyboard friendly, high contrast, and screen reader compatible." },
    ]
  },
];

export const WHY_US_ITEMS: WhyUsItem[] = [
    { point: '24/7 Dedicated IT Support & SLA Guarantee' },
    { point: 'Agile development process with transparent sprint tracking' },
    { point: 'Multi-layered cybersecurity & threat protection' },
    { point: 'Cloud-native infrastructure with 99.99% uptime assurance' },
    { point: 'Experienced team of developers, architects, and security leads' },
];

export const TESTIMONIALS: Testimonial[] = [
    {
        quote: "Syntrix Solutions LLC transformed our entire IT infrastructure. Their 24/7 support team and proactive cloud backup kept our business running smoothly during peak traffic.",
        author: 'Jessica Miller',
        company: 'CEO, Innovate Co.',
        avatar: '/6698e11e-f2c8-4b53-a55e-2f555a4969a8.png',
    },
    {
        quote: "The level of technical expertise at Syntrix is outstanding. They delivered our AI-driven analytics SaaS platform ahead of schedule with flawless security features.",
        author: 'David Chen',
        company: 'Founder, TechStream',
        avatar: '/72c1e0d8-7701-4a9a-a119-fab38f2cfffc.png',
    },
    {
        quote: "Our new e-commerce storefront handles thousands of requests per second effortlessly. The UI design and mobile checkout experience boosted our online revenue by 140%.",
        author: 'Sarah Rodriguez',
        company: 'Marketing Director, BrightFuture',
        avatar: '/139759f7-b129-4693-8ea1-6e4e8456235e.png',
    }
];

export const CLIENTS: Client[] = [
    { name: 'Innovate Co', logo: '/logo.png' },
    { name: 'TechStream', logo: '/logo.png' },
    { name: 'BrightFuture', logo: '/logo.png' },
    { name: 'QuantumLeap', logo: '/logo.png' },
    { name: 'NextGen', logo: '/logo.png' },
    { name: 'Vertex', logo: '/logo.png' },
];

export const FAQ_ITEMS: FaqItem[] = [
    {
        question: "What support and maintenance SLAs do you offer?",
        answer: "We offer Annual Maintenance Contracts (AMC) with round-the-clock 24/7 helpdesk monitoring, 15-minute response times for critical threats, and 99.99% uptime guarantees for server infrastructure."
    },
    {
        question: "How long does it take to develop a custom web application or mobile app?",
        answer: "Typical projects range from 3 to 6 weeks for streamlined platforms up to 8 to 12 weeks for complex enterprise SaaS platforms or multi-platform mobile apps with biometric security."
    },
    {
        question: "How do you ensure cybersecurity and data privacy?",
        answer: "We incorporate threat protection, automated data encryption, regular vulnerability audits, zero-trust network perimeter defense, and HIPAA/PCI compliance from day one."
    },
     {
        question: "Can you help migrate existing infrastructure to the cloud?",
        answer: "Yes, we specialize in zero-downtime cloud migration, disaster recovery setup, multi-tenant SaaS architecture, and automated daily cloud backups."
    }
];

export const PROCESS_STEPS: ProcessStep[] = [
    { icon: Search, title: 'Discovery & Sprint Planning', description: 'We start by defining project roadmaps, backlog prioritization, and requirements alignment using visual Kanban tracking.', imageUrl: '/ba2b654c-750c-4146-93e1-ff462d700355.png' },
    { icon: DraftingCompass, title: 'UI/UX & Architecture Design', description: 'Our designers and system architects build intuitive wireframes, responsive UI component libraries, and cloud topologies.', imageUrl: '/a4f15e74-8cdd-4de2-ba5a-0e4dc55d0327.png' },
    { icon: FileCode, title: 'Agile Code Development', description: 'Our senior engineers write clean, scalable, type-safe code following best practices and security standards.', imageUrl: '/72c1e0d8-7701-4a9a-a119-fab38f2cfffc.png' },
    { icon: CheckCircle, title: 'Security & Quality Assurance', description: 'Comprehensive automated testing, penetration testing, performance audits, and accessibility compliance verification.', imageUrl: '/aef1a078-9609-42ae-ac95-d06170cae03d.png' },
    { icon: Rocket, title: 'Cloud Deployment & CI/CD', description: 'Automated deployment pipelines with zero-downtime releases, global CDN setup, and server configuration.', imageUrl: '/8d5edf51-439d-4ee9-a103-a8c8a821ad20.png' },
    { icon: Handshake, title: '24/7 Managed AMC Support', description: 'Post-launch maintenance, 24/7 real-time telemetry monitoring, continuous software updates, and rapid SLA assistance.', imageUrl: '/acb10ac6-ded9-469a-a420-3a92cc572f5a.png' },
];

export const ACCOMPLISHMENTS: Accomplishment[] = [
    { icon: Award, name: 'Top Rated Managed IT Provider' },
    { icon: Star, name: '5-Star Client Reviews (Clutch & G2)' },
    { icon: Users, name: '150+ Enterprise Projects Delivered' },
];

export const PACKAGES: Package[] = [
  {
    icon: TrendingUp,
    title: 'SEO & Digital Growth Package',
    description: 'Boost online visibility, drive organic traffic, and convert visitors into active clients.',
    features: ['Keyword Analytics & Intent Mapping', 'On-Page & Off-Page SEO Strategy', 'PPC & Lead Generation Campaigns', 'Real-time Analytics Dashboard Integration', 'Monthly Growth Reports'],
    price: 499,
    period: 'mo',
    imageUrl: '/8f14f4c8-e0d3-4276-8238-1751f5f16e0f.png'
  },
  {
    icon: Headset,
    title: 'Managed IT Support & AMC Plan',
    description: 'Complete 24/7 helpdesk, proactive server monitoring, and hardware support.',
    features: ['24/7 Helpdesk & Ticket System', '99.9% Server Uptime Monitoring', 'Routine System Maintenance & Patching', 'Hardware & Router Support', '15-Min Emergency Response SLA'],
    price: 299,
    period: 'mo',
    imageUrl: '/3f22500f-2428-4ab9-be49-a0b48b10cc6e.png'
  },
  {
    icon: ShoppingCart,
    title: 'Ecommerce Storefront Package',
    description: 'Complete e-commerce solution with high traffic handling, cart UI, and payments.',
    features: ['Custom High-Conversion Storefront', '28.4K req/sec Scalable Backend', 'Payment Gateway & Multi-currency Integration', 'Accessibility & Screen Reader Ready', 'Real-time Inventory Management'],
    price: 999,
    period: 'mo',
    imageUrl: '/6071d12a-1a78-421d-8176-a54340b5ce74.png'
  },
  {
    icon: Code,
    title: 'Full-Stack Web Development',
    description: 'Custom web applications built for speed, responsive design, and security.',
    features: ['Modern React & TypeScript Architecture', 'Fully Responsive Mobile & Desktop Layouts', 'CMS & REST API Integration', 'SEO & Speed Optimization', 'Complete Source Code Ownership'],
    price: 799,
    period: 'mo',
    imageUrl: '/72c1e0d8-7701-4a9a-a119-fab38f2cfffc.png'
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity & Threat Defense',
    description: 'Intelligent defense, network firewalls, and end-to-end data security.',
    features: ['Real-time Threat Protection', 'Encrypted Firewall Architecture', 'Network Vulnerability Auditing', 'Malware Isolation & Prevention', '24/7 Security Operations Monitoring'],
    price: 649,
    period: 'mo',
    imageUrl: '/b6477e62-934b-4614-8d14-37de00d4949a.png'
  },
  {
    icon: Cloud,
    title: 'Cloud Migration & Disaster Recovery',
    description: 'Zero downtime cloud setup, automated backup schedules, and failover.',
    features: ['Zero Data Loss Cloud Migration', 'Automated Daily Encrypted Backups', '15-Minute Recovery Time Objective (RTO)', '99.99% Uptime Cloud Architecture', 'DevOps & CI/CD Pipeline Automation'],
    price: 899,
    period: 'mo',
    imageUrl: '/8d5edf51-439d-4ee9-a103-a8c8a821ad20.png'
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { 
    id: 1, 
    title: 'InnovateX AI Data & SaaS Platform', 
    category: 'SaaS', 
    imageUrl: '/8f14f4c8-e0d3-4276-8238-1751f5f16e0f.png', 
    client: 'Innovate Co.', 
    date: '2024-02-15', 
    description: 'A cutting-edge SaaS platform featuring AI-driven data analytics, real-time telemetry graphs, automated machine learning insights, and unified data source aggregation.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'TensorFlow', 'Docker'],
    metrics: '+18.2% Monthly Conversion Growth | 98.4% Accuracy'
  },
  { 
    id: 2, 
    title: 'HealthPlus Telemedicine App', 
    category: 'Mobile', 
    imageUrl: '/cfd634f2-d5f2-4139-bf03-20885a5c07de.png', 
    client: 'HealthPlus Healthcare', 
    date: '2024-01-20', 
    description: 'HIPAA-compliant mobile application featuring HD doctor video consultation calls, appointment scheduling, secure end-to-end encrypted messaging, and digital health records.',
    technologies: ['React Native', 'WebRTC', 'Firebase', 'Stripe API', 'HIPAA Encryption'],
    metrics: '50,000+ Active Patients | 4.9/5 App Rating'
  },
  { 
    id: 3, 
    title: 'E-Shop Pro Commerce Platform', 
    category: 'Web', 
    imageUrl: '/6071d12a-1a78-421d-8176-a54340b5ce74.png', 
    client: 'Global Mart', 
    date: '2023-11-01', 
    description: 'High-conversion e-commerce platform with dynamic cart management, multi-currency checkout, real-time inventory sync, and intelligent product recommendation engines.',
    technologies: ['Next.js', 'Stripe', 'Algolia', 'Tailwind', 'Vercel'],
    metrics: '$320.76 Avg Basket Size | 2.1s Page Load Speed'
  },
  { 
    id: 4, 
    title: 'Cloud-Based Big Data Analytics Hub', 
    category: 'Cloud', 
    imageUrl: '/9ea4c9b7-0e2f-4875-a320-5e05834b07a4.png', 
    client: 'Data Insights Inc.', 
    date: '2023-09-10', 
    description: 'Scalable cloud infrastructure for big data processing, featuring real-time telemetry dashboards, global nodes, and predictive analytics to drive business intelligence.',
    technologies: ['Python', 'AWS Lambda', 'Redshift', 'QuickSight', 'Kubernetes'],
    metrics: '10M+ Data Points Processed / Min | 99.99% Uptime'
  },
  { 
    id: 5, 
    title: 'Fintech Mobile Wallet & Security', 
    category: 'Mobile', 
    imageUrl: '/3928e164-2c71-481c-afa4-9859aaa139f8.png', 
    client: 'SecurePay Financial', 
    date: '2023-07-18', 
    description: 'Secure mobile wallet application featuring biometric fingerprint authentication, P2P money transfers, instant bill payments, and automated card top-ups.',
    technologies: ['Flutter', 'Node.js', 'MongoDB', 'Biometric Auth', 'PCI-DSS'],
    metrics: '$2M+ Monthly Transfers | Zero Fraud Incident Rate'
  },
  { 
    id: 6, 
    title: 'MegaBrands Retail E-Commerce System', 
    category: 'Web', 
    imageUrl: '/cebd43b3-a455-4790-98b7-10766d36a640.png', 
    client: 'MegaBrands Global', 
    date: '2023-05-30', 
    description: 'Enterprise multi-device web system engineered for 28.4K requests/second with built-in accessibility compliance, screen reader support, and global CDN delivery.',
    technologies: ['Vue.js', 'GraphQL', 'Shopify API', 'Netlify', 'W3C Accessibility'],
    metrics: '28.4K Req/Sec Handling | 99.99% Reliability'
  },
  { 
    id: 7, 
    title: 'CyberShield Threat Protection Suite', 
    category: 'Security', 
    imageUrl: '/01d3ad9a-a23f-46ba-ae40-051f398438d2.png', 
    client: 'CyberShield Enterprise', 
    date: '2023-04-12', 
    description: 'Intelligent defense system providing multi-layer firewall architecture, automated threat isolation, end-to-end data encryption, and 24/7 network monitoring.',
    technologies: ['Go', 'Rust', 'eBPF', 'AWS GuardDuty', 'Prometheus'],
    metrics: '100% Malware Isolation Rate | <1ms Detection Speed'
  },
  { 
    id: 8, 
    title: 'Business Continuity & Disaster Recovery Suite', 
    category: 'Infrastructure', 
    imageUrl: '/8dd02021-71f9-4be9-a8ac-3e43162ffe9b.png', 
    client: 'Fortress Capital', 
    date: '2023-02-28', 
    description: 'High-availability disaster recovery solution with 15-minute Recovery Time Objective (RTO), 5-minute RPO, automated cloud failover, and continuous backup health checks.',
    technologies: ['Kubernetes', 'Terraform', 'Veeam', 'AWS CloudFormation', 'Docker'],
    metrics: '15-Min RTO Guarantee | 99.99% High Availability'
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
    { id: '1', name: 'John Doe', role: 'Lead Full-Stack Developer', imageUrl: '/72c1e0d8-7701-4a9a-a119-fab38f2cfffc.png', bio: 'Senior software architect with 10+ years of experience building high-performance web and cloud platforms.' },
    { id: '2', name: 'Jane Smith', role: 'Cloud & DevOps Architect', imageUrl: '/6698e11e-f2c8-4b53-a55e-2f555a4969a8.png', bio: 'Specialist in cloud infrastructure migration, multi-tenant databases, and zero-downtime deployment pipelines.' },
    { id: '3', name: 'Peter Jones', role: 'IT Support & AMC Manager', imageUrl: '/139759f7-b129-4693-8ea1-6e4e8456235e.png', bio: 'Certified helpdesk lead overseeing 24/7 network monitoring, hardware maintenance, and rapid SLA responses.' },
    { id: '4', name: 'Sarah Miller', role: 'Cybersecurity Operations Lead', imageUrl: '/2a9a9c66-f5c1-49ea-8124-550784942feb.png', bio: 'Expert in network threat detection, firewall security, end-to-end data encryption, and vulnerability defense.' },
    { id: '5', name: 'Alex Rivera', role: 'Hardware & Infrastructure Lead', imageUrl: '/d905be29-c750-4149-b0af-ba5736b4a195.png', bio: 'Field hardware specialist managing server rack deployments, router configuration, and physical IT assets.' }
];

export const MOCK_CUSTOMERS: Customer[] = [
    { id: 'cust_1', name: 'Innovate Co.', email: 'contact@innovate.co', company: 'Innovate Co.', phone: '555-0101', website: 'https://innovate.co', address: '123 Innovation Dr, Tech City, 10101', registeredDate: '2022-01-15', totalSpent: 25000, avatarUrl: '/6698e11e-f2c8-4b53-a55e-2f555a4969a8.png' },
    { id: 'cust_2', name: 'TechStream', email: 'hello@techstream.com', company: 'TechStream', phone: '555-0102', website: 'https://techstream.com', address: '456 Data Ave, Silicon Valley, 20202', registeredDate: '2022-03-20', totalSpent: 45000, avatarUrl: '/72c1e0d8-7701-4a9a-a119-fab38f2cfffc.png' },
    { id: 'cust_3', name: 'BrightFuture', email: 'info@brightfuture.org', company: 'BrightFuture', phone: '555-0103', website: 'https://brightfuture.org', address: '789 Growth St, Metropolis, 30303', registeredDate: '2022-05-10', totalSpent: 15000, avatarUrl: '/139759f7-b129-4693-8ea1-6e4e8456235e.png' },
];

export const MOCK_INVOICES: Invoice[] = [
    { id: 'inv_1', invoiceNumber: 'SSL-2023-001', customerId: 'cust_1', customerName: 'Innovate Co.', issueDate: '2023-10-01', dueDate: '2023-10-31', status: 'Paid', items: [{ id: 'item_1', description: 'SaaS Platform Development (Milestone 1)', quantity: 1, price: 10000 }], payments: [{ date: '2023-10-15', amount: 10000, method: 'Bank Transfer', transactionId: 'BT-12345' }] },
    { id: 'inv_2', invoiceNumber: 'SSL-2023-002', customerId: 'cust_2', customerName: 'TechStream', issueDate: '2023-11-05', dueDate: '2023-12-05', status: 'Pending', items: [{ id: 'item_2', description: 'Mobile App Design', quantity: 1, price: 5000 }] },
    { id: 'inv_3', invoiceNumber: 'SSL-2023-003', customerId: 'cust_1', customerName: 'Innovate Co.', issueDate: '2023-11-15', dueDate: '2023-12-15', status: 'Pending', items: [{ id: 'item_3', description: 'SaaS Platform Development (Milestone 2)', quantity: 1, price: 15000 }] },
];

export const MOCK_CONTACTS: ContactMessage[] = [
    { id: 'msg_1', name: 'Alice', email: 'alice@example.com', subject: 'Inquiry', message: 'Hello, I would like to know more about your services.', date: '2023-11-20', isRead: false },
    { id: 'msg_2', name: 'Bob', email: 'bob@example.com', subject: 'Quote Request', message: 'Please provide a quote for a new e-commerce website.', date: '2023-11-18', isRead: true },
];

export const MOCK_RECENT_ACTIVITY: RecentActivityItem[] = [
    { id: 1, type: 'invoice-generated', text: 'New Invoice #INV-2023-002 Generated' },
    { id: 2, type: 'customer-added', text: 'Customer "Starlight Media" added' },
    { id: 3, type: 'invoice-paid', text: 'Invoice #INV-2023-001 Paid' },
];