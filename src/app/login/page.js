"use client"
import Login from '@/components/Auth/Login'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { VerifyStaffToken } from '@/utils/VerifyStaffToken';

const LoginPage = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  useEffect(() => {
    const { valid } = VerifyStaffToken();
    if (valid) {
      router.push('/');
    } else {
      setIsAuthenticated(false);
    }
  }, [router]);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Login />
    </div>
  )
}

export default LoginPage
