'use client';

import { useUser } from '@clerk/nextjs';
import React from 'react';

const Dashboard = () => {
  const { user } = useUser();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user.firstName} {user.lastName}!</p>
      <p>Email: {user.primaryEmailAddress?.emailAddress}</p>
      <p>Id: {user.id || 'N/A'}</p>
      <p>Phone: {user.primaryPhoneNumber?.phoneNumber || 'N/A'}</p>
    </div>
  );
};

export default Dashboard;
