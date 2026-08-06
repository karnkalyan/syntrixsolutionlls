// FIX: Create AdminSettings component.
import React from 'react';

const AdminSettings: React.FC = () => {
    return (
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200/50 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">General Settings</h2>
            <div className="space-y-6">
                <div>
                    <label htmlFor="adminEmail" className="font-semibold text-gray-700 block mb-2">Admin Email</label>
                    <input 
                        id="adminEmail"
                        type="email" 
                        defaultValue="support@syntrixsolutionsllc.com" 
                        className="w-full p-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition" 
                    />
                     <p className="text-sm text-gray-500 mt-1">This email is used for notifications.</p>
                </div>
                <div>
                    <label htmlFor="newPassword" className="font-semibold text-gray-700 block mb-2">Change Password</label>
                    <input 
                        id="newPassword"
                        type="password" 
                        placeholder="Enter New Password" 
                        className="w-full p-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-transparent transition" 
                    />
                </div>
                 <div className="pt-4 border-t mt-6">
                    <button className="bg-red-500 text-white font-semibold text-sm py-2 px-6 rounded-lg hover:bg-red-600 transition-colors">
                        Save Changes
                    </button>
                 </div>
            </div>
        </div>
    );
};

export default AdminSettings;