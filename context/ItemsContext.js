import React, { createContext, useState } from 'react';

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [dietItems, setDietItems] = useState([]);
  const [activityItems, setActivityItems] = useState([]);
  
  function addDietItem(item) {
    setDietItems((prevItems) => {
      return [...prevItems, item];
    });
  }

  function addActivityItem(item) {
    setActivityItems((prevItems) => {
      return [...prevItems, item];
    });
  }

  const value = {
    dietItems,
    activityItems,
    addDietItem,
    addActivityItem,
  };

  return (
    <ItemsContext.Provider value={value}>
      {children}
    </ItemsContext.Provider>
  );
};