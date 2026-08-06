// FIX: Create AuthPage component for login.
import React, { useState, useEffect } from 'react';
import type { Page } from '../types';
import { useAuth } from '../hooks/useAuth';
import { motion } from 'framer-motion';

const Logo: React.FC = () => (
    <div className="flex items-center justify-center mb-4">
        <img src="/logo.png" alt="Syntrix Solutions LLC" className="h-16 w-auto object-contain" />
    </div>
);


interface AuthPageProps {
  setCurrentPage: (page: Page) => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ setCurrentPage }) => {
    const { login, user } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        // This effect correctly handles redirection AFTER the user state has been updated.
        if (user) {
            setCurrentPage('Admin');
        }
    }, [user, setCurrentPage]);
    
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        const success = login(email, password);
        if (!success) {
            setError('Invalid email or password.');
        }
    };

    const handleDemoLogin = () => {
        setError('');
        login('support@syntrixsolutionsllc.com', 'password');
    }
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
            <motion.div 
                className="w-full max-w-sm p-8 space-y-6 bg-white rounded-2xl shadow-xl border border-gray-100"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="text-center">
                    <Logo />
                    <h1 className="text-2xl font-bold text-[#2B2B2B]">Admin Panel</h1>
                    <p className="text-gray-500">Please sign in to continue</p>
                </div>
                {error && <p className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-lg">{error}</p>}
                <form className="space-y-4" onSubmit={handleLogin}>
                    <div>
                        <label className="font-semibold text-sm text-gray-700">Email</label>
                        <input 
                            type="email" 
                            className="w-full p-3 mt-1 bg-gray-100 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D52036] focus:border-transparent transition"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="e.g., support@syntrixsolutionsllc.com"
                        />
                    </div>
                     <div>
                        <label className="font-semibold text-sm text-gray-700">Password</label>
                        <input 
                            type="password" 
                            className="w-full p-3 mt-1 bg-gray-100 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#D52036] focus:border-transparent transition"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                        />
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-[#D52036] text-white font-bold py-3 px-4 rounded-lg hover:bg-red-700 transition-colors shadow-sm hover:shadow-md">
                            Sign In
                        </button>
                    </div>
                </form>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or</span>
                    </div>
                </div>
                 <div>
                    <button onClick={handleDemoLogin} className="w-full bg-gray-700 text-white font-bold py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors shadow-sm hover:shadow-md">
                        Login as Demo User
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default AuthPage;