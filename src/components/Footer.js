import React from 'react';
import './footer.css'; // Import your footer styles

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Recipe Book App. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
