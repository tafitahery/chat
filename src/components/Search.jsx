import React from 'react';

export default function Search() {
  return (
    <div className="Search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/18407675/pexels-photo-18407675/free-photo-of-homme-clairiere-veste-chapeau.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
}
