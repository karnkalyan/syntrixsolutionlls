import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, pass: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            const storedUser = localStorage.getItem('authUser');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        } catch (error) {
            console.error("Failed to parse user from localStorage", error);
            localStorage.removeItem('authUser');
        } finally {
            setLoading(false);
        }
    }, []);

    const login = (email: string, pass: string) => {
        const normalizedEmail = email.trim().toLowerCase();
        if ((normalizedEmail === 'syntrixsolutionsllc@gmail.com' || normalizedEmail === 'admin@syntrixsolutionsllc.com' || normalizedEmail === 'admin@syntrixsolution.com' || normalizedEmail === 'admin@kashvi.tech') && pass === 'password') {
            const userData: User = { id: 'admin1', name: 'Admin User', email: 'syntrixsolutionsllc@gmail.com' };
            localStorage.setItem('authUser', JSON.stringify(userData));
            setUser(userData);
            return true;
        }
        return false;
    };

    const logout = () => {
        localStorage.removeItem('authUser');
        setUser(null);
    };

    return React.createElement(
        AuthContext.Provider,
        { value: { user, loading, login, logout } },
        children
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
