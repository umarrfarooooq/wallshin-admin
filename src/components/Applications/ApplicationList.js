import React, { useEffect, useState } from 'react'
import ApplicationBox from './ApplicationBox'
import { VerifyStaffToken } from '@/utils/VerifyStaffToken';
import axios from 'axios';
const axiosInstense = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

const ApplicationList = () => {
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { verifyToken } = VerifyStaffToken();
  const fetchApplications = async () => {
    try {
      if (!verifyToken) {
        setError('Token is missing. Please log in.');
        return;
      }

      const response = await axiosInstense.get('api/v1/applications/all', {
        headers: {
          Authorization: `Bearer ${verifyToken}`
        }
      });

      setApplications(response.data.applications);
    } catch (error) {
      console.error('Error fetching messages:', error);
      setError('Failed to fetch messages.');
    }
  };
  useEffect(() => {
    fetchApplications();
  }, []);

  const handleDelete = async (applicationId) => {
    try {
      setLoading(true);
      const response = await axiosInstense.delete(`api/v1/applications/delete/${applicationId}`,  {
        headers: {
          Authorization: `Bearer ${verifyToken}`
        }
      });
      console.log('Application deleted successfully:', response.data);
    } catch (error) {
      console.error('Error deleting message:', error);
    } finally {
      fetchApplications()
      setLoading(false);
    }
  };


  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };
  return (
    <div className='bg-[#666] py-12 min-h-screen'>
        <div className='container mx-auto px-2 flex flex-col gap-8'>
            {error && <div className="text-red-500">{error}</div>}
            {applications.length > 0 ? (
              applications
                .map((application, index) => (
                  <ApplicationBox 
                    key={index} 
                    applicationData={application} 
                    formatDate={formatDate} 
                    onHandleDelete={handleDelete}
                    loading={loading}
                  />
                ))
            ) : (
              <div className="text-white">No Applications available.</div>
            )}
        </div>
    </div>
  )
}

export default ApplicationList
