import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <NavLink to="/add">
      Add a party
      </NavLink>
    </div>
  )
}

export default Home;