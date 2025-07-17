import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';

interface ContactData {
  _id: string;
  fullName: string;
  mobile: string;
  email: string;
  preparationYears: string;
  message: string;
  submittedAt: string;
}

const AdminDashboard = () => {
  const [contacts, setContacts] = useState<ContactData[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<ContactData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  // Filter states
  const [filters, setFilters] = useState({
    preparationYears: '',
    dateFrom: '',
    dateTo: '',
    searchQuery: '',
  });

  useEffect(() => {
    // Check authentication
    const isAuthenticated = localStorage.getItem('adminAuth') === 'true';
    if (!isAuthenticated) {
      navigate('/admin');
      return;
    }

    fetchContacts();
  }, [navigate]);

  const fetchContacts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/admin/contacts', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminAuth')}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch contacts');
      }
      
      const data = await response.json();
      setContacts(data);
      setFilteredContacts(data);
    } catch (err) {
      setError('Error fetching contact data');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin');
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const applyFilters = () => {
    let result = [...contacts];
    
    // Filter by preparation years
    if (filters.preparationYears) {
      result = result.filter(contact => contact.preparationYears === filters.preparationYears);
    }
    
    // Filter by date range
    if (filters.dateFrom) {
      const fromDate = new Date(filters.dateFrom);
      result = result.filter(contact => new Date(contact.submittedAt) >= fromDate);
    }
    
    if (filters.dateTo) {
      const toDate = new Date(filters.dateTo);
      toDate.setHours(23, 59, 59, 999); // End of the day
      result = result.filter(contact => new Date(contact.submittedAt) <= toDate);
    }
    
    // Filter by search query (name, email, mobile)
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      result = result.filter(contact => 
        contact.fullName.toLowerCase().includes(query) ||
        contact.email.toLowerCase().includes(query) ||
        contact.mobile.includes(query)
      );
    }
    
    setFilteredContacts(result);
  };

  const resetFilters = () => {
    setFilters({
      preparationYears: '',
      dateFrom: '',
      dateTo: '',
      searchQuery: '',
    });
    setFilteredContacts(contacts);
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredContacts);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Contacts");
    
    // Generate file name with current date
    const date = new Date().toISOString().split('T')[0];
    const fileName = `UPSC_Guide_Contacts_${date}.xlsx`;
    
    XLSX.writeFile(workbook, fileName);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <img 
              src="/UG LOGO.png" 
              alt="UPSC Guide" 
              className="h-12 mr-4" 
            />
            <h1 className="text-2xl font-bold text-navy">Admin Dashboard</h1>
          </div>
          <button
            onClick={handleLogout}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md text-sm"
          >
            Logout
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <h2 className="text-lg font-semibold text-navy mb-4">Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preparation Years</label>
              <select
                name="preparationYears"
                value={filters.preparationYears}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
              >
                <option value="">All Years</option>
                <option value="less-than-1">Less than 1 year</option>
                <option value="1-year">1 year</option>
                <option value="2-years">2 years</option>
                <option value="3-years">3 years</option>
                <option value="more-than-3">More than 3 years</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">From Date</label>
              <input
                type="date"
                name="dateFrom"
                value={filters.dateFrom}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">To Date</label>
              <input
                type="date"
                name="dateTo"
                value={filters.dateTo}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
              <input
                type="text"
                name="searchQuery"
                value={filters.searchQuery}
                onChange={handleFilterChange}
                placeholder="Name, Email, Mobile"
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
              />
            </div>
          </div>
          
          <div className="mt-4 flex justify-end space-x-3">
            <button
              onClick={resetFilters}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md text-sm"
            >
              Reset
            </button>
            <button
              onClick={applyFilters}
              className="bg-navy hover:bg-navy/90 text-white px-4 py-2 rounded-md text-sm"
            >
              Apply Filters
            </button>
            <button
              onClick={exportToExcel}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm"
            >
              Export to Excel
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {isLoading ? (
            <div className="p-8 text-center">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-navy border-r-transparent"></div>
              <p className="mt-2 text-gray-600">Loading data...</p>
            </div>
          ) : error ? (
            <div className="p-8 text-center text-red-600">{error}</div>
          ) : filteredContacts.length === 0 ? (
            <div className="p-8 text-center text-gray-600">No contact data found</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prep Years</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredContacts.map((contact) => (
                    <tr key={contact._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{contact.fullName}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contact.mobile}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contact.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {contact.preparationYears === 'less-than-1' && 'Less than 1 year'}
                        {contact.preparationYears === '1-year' && '1 year'}
                        {contact.preparationYears === '2-years' && '2 years'}
                        {contact.preparationYears === '3-years' && '3 years'}
                        {contact.preparationYears === 'more-than-3' && 'More than 3 years'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(contact.submittedAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;