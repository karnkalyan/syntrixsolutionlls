// FIX: Create AdminTeam component.
import React, { useState } from 'react';
import { useSiteData } from '../../context/SiteDataContext';
import type { TeamMember } from '../../types';
import { Edit, Trash2, PlusCircle } from 'lucide-react';
import TeamMemberModal from './TeamMemberModal';

const AdminTeam: React.FC = () => {
    const { teamMembers, deleteTeamMember } = useSiteData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingMember, setEditingMember] = useState<TeamMember | null>(null);

    const handleAddNew = () => {
        setEditingMember(null);
        setIsModalOpen(true);
    };

    const handleEdit = (member: TeamMember) => {
        setEditingMember(member);
        setIsModalOpen(true);
    };

    const handleDelete = (id: string) => {
        if (window.confirm('Are you sure you want to delete this team member?')) {
            deleteTeamMember(id);
        }
    };

    return (
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200/50">
             <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Manage Team</h2>
                 <button onClick={handleAddNew} className="flex items-center bg-red-500 text-white font-semibold text-sm py-2 px-4 rounded-lg hover:bg-red-600 transition-colors">
                    <PlusCircle size={18} className="mr-2" />
                    Add New Member
                </button>
            </div>
             <div className="space-y-4">
                {teamMembers.map(member => (
                    <div key={member.id} className="flex justify-between items-center p-4 border rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex items-center">
                            <img src={member.imageUrl} alt={member.name} className="w-14 h-14 rounded-full mr-4 object-cover" />
                            <div>
                                <h3 className="font-bold text-lg text-gray-800">{member.name}</h3>
                                <p className="text-sm text-red-600 font-semibold">{member.role}</p>
                            </div>
                        </div>
                        <div className="flex-shrink-0 flex items-center space-x-2">
                            <button onClick={() => handleEdit(member)} className="p-2 text-blue-600 hover:bg-blue-100 rounded-full transition-colors" aria-label={`Edit ${member.name}`}>
                                <Edit size={18} />
                            </button>
                            <button onClick={() => handleDelete(member.id)} className="p-2 text-red-600 hover:bg-red-100 rounded-full transition-colors" aria-label={`Delete ${member.name}`}>
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <TeamMemberModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                member={editingMember}
            />
        </div>
    );
};

export default AdminTeam;