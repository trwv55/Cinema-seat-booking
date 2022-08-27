import React from 'react';

const Header = ({ children }) => {
  return (
    <div
      style={{
        fontSize: 24,
        padding: 20,
        fontWeight: 'bold',
        backgroundColor: '#e68e3d',
      }}>
      {children}
    </div>
  );
};

export default Header;
