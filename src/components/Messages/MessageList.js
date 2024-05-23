import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MessageBox from './MessageBox';
import { VerifyStaffToken } from '@/utils/VerifyStaffToken';
const axiosInstense = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { verifyToken } = VerifyStaffToken();
  const fetchMessages = async () => {
    try {
      if (!verifyToken) {
        setError('Token is missing. Please log in.');
        return;
      }

      const response = await axiosInstense.get('api/v1/messages/all', {
        headers: {
          Authorization: `Bearer ${verifyToken}`
        }
      });

      setMessages(response.data.messages);
    } catch (error) {
      console.error('Error fetching messages:', error);
      setError('Failed to fetch messages.');
    }
  };
  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDelete = async (messageId) => {
    try {
      setLoading(true);
      const response = await axiosInstense.delete(`api/v1/messages/message/${messageId}`,  {
        headers: {
          Authorization: `Bearer ${verifyToken}`
        }
      });
      console.log('Message deleted successfully:', response.data);
    } catch (error) {
      console.error('Error deleting message:', error);
    } finally {
      fetchMessages()
      setLoading(false);
    }
  };

  const handleMarkDone = async (messageId) => {
    try {
      setLoading(true);
      const response = await axiosInstense.patch(`api/v1/messages/message/${messageId}/done`, {}, {
        headers: {
          Authorization: `Bearer ${verifyToken}`
        }
      });
      console.log('Message marked as done successfully:', response.data);
    } catch (error) {
      console.error('Error marking message as done:', error);
    } finally {
      fetchMessages();
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
        {messages.length > 0 ? (
          messages
            .sort((a, b) => (!a.isDone && b.isDone ? -1 : a.isDone && !b.isDone ? 1 : 0))
            .map((message, index) => (
              <MessageBox 
                key={index} 
                message={message} 
                formatDate={formatDate} 
                onHandleDelete={handleDelete} 
                onHandleMarkDone={handleMarkDone}
              />
            ))
        ) : (
          <div className="text-white">No messages available.</div>
        )}
      </div>
    </div>

  );
};

export default MessageList;
