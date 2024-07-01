import React, { useEffect, useState } from 'react';
import '../App2.css';

const Dashboard = () => {
  const [user, setUser] = useState(null); 
  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser); 
    }
  }, []);

  
  const tableData = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User', status: 'Active' },
    { id: 3, name: 'Michael Johnson', email: 'michael.johnson@example.com', role: 'User', status: 'Inactive' },
    { id: 4, name: 'Emily Brown', email: 'emily.brown@example.com', role: 'Admin', status: 'Active' },
    { id: 5, name: 'William Clark', email: 'william.clark@example.com', role: 'User', status: 'Active' },
    { id: 6, name: 'Sophia Davis', email: 'sophia.davis@example.com', role: 'User', status: 'Active' },
    { id: 7, name: 'Daniel Lee', email: 'daniel.lee@example.com', role: 'Admin', status: 'Inactive' },
    { id: 8, name: 'Olivia White', email: 'olivia.white@example.com', role: 'User', status: 'Active' }
  ];
  
  return (
    <div className="dashboard-container">
      {user ? (
        <>
          <h2>Welcome {user.name} !</h2>
          <div className="table-container">
            <table className="styled-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.role}</td>
                    <td>{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <p>Please log in to view this page.</p>
      )}
    </div>
  );
};

export default Dashboard;
