import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#beauty"
          onClick={() => handlePageChange('Beauty')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Beauty' ? 'nav-link active' : 'nav-link'}
        >
          Beauty
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#outfit"
          onClick={() => handlePageChange('Outfit')}
          // Check to see if the currentPage is `Application`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Outfit' ? 'nav-link active' : 'nav-link'}
        >
          Outfit
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#innerfit"
          onClick={() => handlePageChange('Innerfit')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Innerfit' ? 'nav-link active' : 'nav-link'}
        >
          Innerfit
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
