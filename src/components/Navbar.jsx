import React from 'react';

export default function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Lebo Chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/18407675/pexels-photo-18407675/free-photo-of-homme-clairiere-veste-chapeau.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  );
}
