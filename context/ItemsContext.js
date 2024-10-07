import React, { createContext, useState } from 'react';

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [dietItems, setDietItems] = useState([]);
  const [exerciseItems, setExerciseItems] = useState([]);

  function addDietItem(item) {
    setDietItems((prevItems) => {
      return [...prevItems, item];
    });
  }

  function addExerciseItem(item) {
    setExerciseItems((prevItems) => {
      return [...prevItems, item];
    });
  }

  const value = {
    dietItems,
    exerciseItems,
    addDietItem,
    addExerciseItem,
  };

  return (
    <ItemsContext.Provider value={value}>
      {children}
    </ItemsContext.Provider>
  );
};